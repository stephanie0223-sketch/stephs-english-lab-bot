const express = require('express');
const path = require('path');
const cron = require('node-cron');
const { messagingApi, middleware } = require('@line/bot-sdk');
const { MessagingApiClient } = messagingApi;
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { quizReplies, otherReplies } = require('./quiz-data');
const { schedule, weekCards } = require('./schedule-data');

// 20 天的片語清單（供 AI 批改參考）
const idiomList = [
  'speak volumes', 'on the fence', 'a blessing in disguise',
  'cut to the chase', 'go the extra mile', 'get something off one\'s chest',
  'hit it off', 'keep someone in the loop', 'rub someone the wrong way',
  'see eye to eye', 'back to square one', 'pull one\'s weight',
  'think outside the box', 'up in the air', 'call the shots',
  'step out of one\'s comfort zone', 'the bigger picture',
  'take something with a grain of salt', 'turn over a new leaf',
  'broaden one\'s horizons',
];

// Gemini AI 設定
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// LINE Messaging API 設定
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new MessagingApiClient({ channelAccessToken: config.channelAccessToken });
const app = express();

// 提供圖片靜態檔案（圖卡和測驗卡）
app.use('/cards', express.static(path.join(__dirname, 'public', 'cards')));

// 取得圖片的完整 URL
function getImageUrl(filename) {
  const baseUrl = process.env.BASE_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
  return `${baseUrl}/cards/${encodeURIComponent(filename)}`;
}

// ==========================================
// 排程推播：每日圖卡 + 週六測驗
// ==========================================

cron.schedule('30 7 * * 1-5', async () => {
  const today = getToday();
  const entry = schedule.find(s => s.date === today && s.type === 'card');
  if (!entry) {
    console.log(`[${today}] 今天沒有排定的圖卡推播`);
    return;
  }

  const todayIdiom = idiomList[entry.dayNum - 1] || '';
  console.log(`[${today}] 推播 Day ${entry.dayNum}: ${entry.image}`);
  try {
    await client.broadcast({
      messages: [
        {
          type: 'image',
          originalContentUrl: getImageUrl(entry.image),
          previewImageUrl: getImageUrl(entry.image),
        },
        {
          type: 'text',
          text: `✏️ 今日練習：試著用「${todayIdiom}」造一個英文句子吧！\n\n直接打在聊天室裡，AI 老師會幫你批改 ☺️`,
        },
      ],
    });
    console.log(`[${today}] 推播成功！`);
  } catch (err) {
    console.error(`[${today}] 推播失敗:`, err.message);
  }
}, { timezone: 'Asia/Taipei' });

cron.schedule('0 10 * * 6', async () => {
  const today = getToday();
  const entry = schedule.find(s => s.date === today && s.type === 'quiz');
  if (!entry) {
    console.log(`[${today}] 今天沒有排定的測驗推播`);
    return;
  }

  console.log(`[${today}] 推播 Week ${entry.week} 測驗（${entry.quizImages.length} 題）`);
  try {
    await client.broadcast({
      messages: [{
        type: 'text',
        text: `📝 Week ${entry.week} Quiz Time!\n\n以下有 5 題，測試你這週學的片語！\n每題回覆對應的編號（如 ${entry.week === 1 ? '1A' : entry.week === 2 ? '6A' : entry.week === 3 ? '11A' : '16A'}），馬上告訴你對不對 ☺️`,
      }],
    });

    for (const quizImg of entry.quizImages) {
      await client.broadcast({
        messages: [{
          type: 'image',
          originalContentUrl: getImageUrl(quizImg),
          previewImageUrl: getImageUrl(quizImg),
        }],
      });
      await sleep(500);
    }
    console.log(`[${today}] 測驗推播成功！`);
  } catch (err) {
    console.error(`[${today}] 測驗推播失敗:`, err.message);
  }
}, { timezone: 'Asia/Taipei' });

// ==========================================
// 防休眠：每 14 分鐘 ping 自己
// ==========================================
cron.schedule('*/14 * * * *', () => {
  const baseUrl = process.env.BASE_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
  if (baseUrl && baseUrl !== 'undefined') {
    const http = require('https');
    http.get(baseUrl, (res) => {
      console.log(`[keep-alive] ping status: ${res.statusCode}`);
    }).on('error', (err) => {
      console.error('[keep-alive] ping failed:', err.message);
    });
  }
});

// ==========================================
// 手動觸發推播（補發用）
// ==========================================
app.get('/trigger-quiz/:week', async (req, res) => {
  const week = parseInt(req.params.week);
  const entry = schedule.find(s => s.type === 'quiz' && s.week === week);
  if (!entry) return res.status(404).send('Quiz not found');

  try {
    await client.broadcast({
      messages: [{
        type: 'text',
        text: `📝 Week ${entry.week} Quiz Time!\n\n以下有 5 題，測試你這週學的片語！\n每題回覆對應的編號（如 ${entry.week === 1 ? '1A' : entry.week === 2 ? '6A' : entry.week === 3 ? '11A' : '16A'}），馬上告訴你對不對 ☺️`,
      }],
    });

    for (const quizImg of entry.quizImages) {
      await client.broadcast({
        messages: [{
          type: 'image',
          originalContentUrl: getImageUrl(quizImg),
          previewImageUrl: getImageUrl(quizImg),
        }],
      });
      await sleep(500);
    }
    res.send(`Week ${week} quiz sent!`);
  } catch (err) {
    console.error('Manual trigger error:', err.message);
    res.status(500).send(err.message);
  }
});

// ==========================================
// Webhook：處理學生回覆
// ==========================================

app.post('/webhook', middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.json({ success: true }))
    .catch((err) => {
      console.error('Error:', err);
      res.status(500).end();
    });
});

app.get('/', (req, res) => {
  res.send("Steph's English Lab LINE Bot is running! 🌿");
});

async function handleEvent(event) {
  if (event.type === 'follow') {
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: `嗨！歡迎加入 Steph's English Lab 🌿\n\n我是 Stephanie，一位相信「英文是通往世界的橋樑」的高中英文老師。\n\n在這裡，你會收到：\n📍 週一到週五｜每日一組實用英文片語 + 情境例句\n📍 週六｜每週小測驗，測試你這週學了多少\n\n不用死背，不用壓力——\n每天花 30 秒看一張圖卡，慢慢累積就好。\n\n📖 中途加入也沒關係！輸入 W1、W2... 就能補看之前的圖卡\n\n一起用英文拓展視野吧！\nEnglish for Connection ✨`,
      }],
    });
  }

  if (event.type !== 'message' || event.message.type !== 'text') {
    return null;
  }

  const userText = event.message.text.trim();
  const upperText = userText.toUpperCase();
  const lowerText = userText.toLowerCase();

  if (quizReplies[upperText]) {
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: quizReplies[upperText].reply,
      }],
    });
  }

  const weekMatch = lowerText.match(/^(?:w|week\s?)(\d)$/);
  if (weekMatch) {
    const weekNum = parseInt(weekMatch[1]);
    if (weekCards[weekNum]) {
      const images = weekCards[weekNum].map(img => ({
        type: 'image',
        originalContentUrl: getImageUrl(img),
        previewImageUrl: getImageUrl(img),
      }));
      return client.replyMessage({
        replyToken: event.replyToken,
        messages: images,
      });
    }
  }

  const otherKey = Object.keys(otherReplies).find(
    (key) => lowerText === key.toLowerCase()
  );
  if (otherKey) {
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: otherReplies[otherKey],
      }],
    });
  }

  // 句子長度 >= 10 才送 AI 批改（避免短訊息誤觸發）
  if (userText.length >= 10) {
    return handleAIGrading(event.replyToken, userText);
  }

  return null;
}

// ==========================================
// AI 造句批改（Gemini）
// ==========================================
async function handleAIGrading(replyToken, sentence) {
  const systemPrompt = `你是 Steph's English Lab 的 AI 英文助教。學生正在練習用英文片語造句。你必須嚴格、準確地批改，判斷結果和後面的分析必須一致，絕對不能前後矛盾。

以下是本課程教的 20 個片語（包含正確搭配的介係詞）：
1. speak volumes（不需介係詞，直接用）
2. on the fence about（後接 about + N/Ving）
3. a blessing in disguise（整組使用）
4. cut to the chase（不需介係詞）
5. go the extra mile（不需介係詞）
6. get something off one's chest（注意 off 和 one's 的搭配）
7. hit it off（with someone）
8. keep someone in the loop（注意 keep + 人 + in the loop）
9. rub someone the wrong way（注意 rub + 人 + the wrong way）
10. see eye to eye（with someone / on something）
11. back to square one（整組使用）
12. pull one's weight（注意 one's 必須對應主詞）
13. think outside the box（整組使用）
14. up in the air（整組使用）
15. call the shots（不需介係詞）
16. step out of one's comfort zone（注意 out of + one's）
17. the bigger picture（整組使用）
18. take something with a grain of salt（注意完整結構）
19. turn over a new leaf（整組使用）
20. broaden one's horizons（注意 one's 必須對應主詞）

批改規則（非常重要，必須嚴格遵守）：
1. 片語必須完整使用，缺少介係詞（如 on the fence 少了 about）= 用法有誤
2. 代名詞 one's 必須正確對應主詞（如主詞是 I，要用 my）= 否則用法有誤
3. 判斷結果（✅ 或 ⚠️）必須和後面的分析完全一致，絕不能說「正確」但又指出錯誤

回覆格式（用繁體中文 + 英文混合）：

📝 你的句子：[複述學生原句]

[根據上述規則嚴格判斷，只能選一個]
✅ 片語用法正確！
⚠️ 片語用法有誤

📖 片語解析：[說明該片語的正確用法，特別標出必要的介係詞或搭配]

📝 文法批改：[指出所有文法錯誤並修正；沒有錯誤就說「文法正確！」]

✨ 正確寫法：[給出修正後的完整句子]

💡 小提醒：[一句鼓勵的話]

其他注意事項：
- 如果學生的句子沒有用到以上任何片語，友善地提醒他使用課程中教的片語來造句
- 如果學生寫的不是英文句子（例如中文閒聊），友善地引導他回到造句練習
- 語氣親切但判斷要準確，不要怕指出錯誤
- 回覆保持簡潔`;

  try {
    const result = await model.generateContent({
      contents: [
        { role: 'user', parts: [{ text: systemPrompt + '\n\n學生的句子：' + sentence }] }
      ],
    });
    const reply = result.response.text();

    return client.replyMessage({
      replyToken,
      messages: [{ type: 'text', text: reply }],
    });
  } catch (err) {
    console.error('[AI grading error]', err.message);

    if (err.status === 429) {
      return client.replyMessage({
        replyToken,
        messages: [{ type: 'text', text: '目前批改的人比較多，請稍後再試一次 ☺️' }],
      });
    }

    return client.replyMessage({
      replyToken,
      messages: [{ type: 'text', text: '批改功能暫時無法使用，請稍後再試 🙏' }],
    });
  }
}

function getToday() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Steph's English Lab bot is running on port ${PORT}`);
  console.log(`Scheduled broadcasts:`);
  schedule.forEach(s => {
    if (s.type === 'card') {
      console.log(`  ${s.date} (${s.day}) 07:30 → Day ${s.dayNum}: ${s.image}`);
    } else {
      console.log(`  ${s.date} (${s.day}) 10:00 → Week ${s.week} Quiz (5 questions)`);
    }
  });
});
