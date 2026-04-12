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
  const systemPrompt = `你是 Steph's English Lab 的 AI 英文助教。學生會用英文 idiom 造句，請幫他們批改。

批改重點：idiom 是否正確使用、文法、用字，並示範 native speaker 會怎麼說。
語氣：親切鼓勵，像溫暖的英文老師。
語言：繁體中文 + 英文混合。
如果學生沒有用到任何 idiom 或不是英文句子，友善引導他造句。
判定 ✅ 或 ⚠️ 必須跟後面的分析一致，不能矛盾。

回覆格式：
📝 你的句子：[複述原句]
✅ 片語用法正確！ 或 ⚠️ 片語用法有誤
📖 片語解析：[這個 idiom 的意思和用法]
📝 文法批改：[有錯指出，沒錯寫「文法正確！」]
✨ Native 說法：[native speaker 最自然的寫法]
💡 小提醒：[鼓勵或補充小知識]`;

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
