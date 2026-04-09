const express = require('express');
const path = require('path');
const cron = require('node-cron');
const { Client, middleware } = require('@line/bot-sdk');
const { quizReplies, otherReplies } = require('./quiz-data');
const { schedule, weekCards } = require('./schedule-data');

// LINE Messaging API 設定
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new Client(config);
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

// 每天早上 07:30 (台灣時間 = UTC-8, 所以 UTC 23:30 前一天)
// Render 伺服器用 UTC，台灣 07:30 = UTC 23:30 (前一天)
// 用環境變數 TZ=Asia/Taipei 讓 cron 用台灣時間
cron.schedule('30 7 * * 1-5', async () => {
  // 平日 07:30 推播每日圖卡
  const today = getToday();
  const entry = schedule.find(s => s.date === today && s.type === 'card');
  if (!entry) {
    console.log(`[${today}] 今天沒有排定的圖卡推播`);
    return;
  }

  console.log(`[${today}] 推播 Day ${entry.dayNum}: ${entry.image}`);
  try {
    await client.broadcast({
      type: 'image',
      originalContentUrl: getImageUrl(entry.image),
      previewImageUrl: getImageUrl(entry.image),
    });
    console.log(`[${today}] 推播成功！`);
  } catch (err) {
    console.error(`[${today}] 推播失敗:`, err.message);
  }
}, { timezone: 'Asia/Taipei' });

// 每週六 10:00 推播測驗卡（5 張）
cron.schedule('0 10 * * 6', async () => {
  const today = getToday();
  const entry = schedule.find(s => s.date === today && s.type === 'quiz');
  if (!entry) {
    console.log(`[${today}] 今天沒有排定的測驗推播`);
    return;
  }

  console.log(`[${today}] 推播 Week ${entry.week} 測驗（${entry.quizImages.length} 題）`);
  try {
    // 先發一則文字提示
    await client.broadcast({
      type: 'text',
      text: `📝 Week ${entry.week} Quiz Time!\n\n以下有 5 題，測試你這週學的片語！\n每題回覆對應的編號（如 ${entry.week === 1 ? '1A' : entry.week === 2 ? '6A' : entry.week === 3 ? '11A' : '16A'}），馬上告訴你對不對 ☺️`,
    });

    // 依序發送 5 張測驗卡（每張間隔一點時間避免順序錯亂）
    for (const quizImg of entry.quizImages) {
      await client.broadcast({
        type: 'image',
        originalContentUrl: getImageUrl(quizImg),
        previewImageUrl: getImageUrl(quizImg),
      });
      // 短暫延遲確保順序
      await sleep(500);
    }
    console.log(`[${today}] 測驗推播成功！`);
  } catch (err) {
    console.error(`[${today}] 測驗推播失敗:`, err.message);
  }
}, { timezone: 'Asia/Taipei' });

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

// Health check
app.get('/', (req, res) => {
  res.send("Steph's English Lab LINE Bot is running! 🌿");
});

// 手動觸發推播（測試用）
app.get('/test-broadcast/:date', async (req, res) => {
  const testDate = req.params.date;
  const entry = schedule.find(s => s.date === testDate);
  if (!entry) return res.send(`No schedule for ${testDate}`);

  res.send(`Found: ${JSON.stringify(entry)}. Check LINE for the message.`);

  if (entry.type === 'card') {
    await client.broadcast({
      type: 'image',
      originalContentUrl: getImageUrl(entry.image),
      previewImageUrl: getImageUrl(entry.image),
    });
  }
});

// 處理每個事件
async function handleEvent(event) {
  // 處理加好友事件 → 發送歡迎訊息
  if (event.type === 'follow') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: `嗨！歡迎加入 Steph's English Lab 🌿\n\n我是 Stephanie，一位相信「英文是通往世界的橋樑」的高中英文老師。\n\n在這裡，你會收到：\n📍 週一到週五｜每日一組實用英文片語 + 情境例句\n📍 週六｜每週小測驗，測試你這週學了多少\n\n不用死背，不用壓力——\n每天花 30 秒看一張圖卡，慢慢累積就好。\n\n📖 中途加入也沒關係！輸入 W1、W2... 就能補看之前的圖卡\n\n一起用英文拓展視野吧！\nEnglish for Connection ✨`,
    });
  }

  // 只處理文字訊息
  if (event.type !== 'message' || event.message.type !== 'text') {
    return null;
  }

  const userText = event.message.text.trim();
  const upperText = userText.toUpperCase();
  const lowerText = userText.toLowerCase();

  // 1. 檢查是否為測驗答案 (1A, 1B, ..., 20D)
  if (quizReplies[upperText]) {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: quizReplies[upperText].reply,
    });
  }

  // 2. 檢查是否為補看指令 (W1, W2, W3, W4, Week 1, Week 2...)
  const weekMatch = lowerText.match(/^(?:w|week\s?)(\d)$/);
  if (weekMatch) {
    const weekNum = parseInt(weekMatch[1]);
    if (weekCards[weekNum]) {
      const images = weekCards[weekNum].map(img => ({
        type: 'image',
        originalContentUrl: getImageUrl(img),
        previewImageUrl: getImageUrl(img),
      }));
      return client.replyMessage(event.replyToken, images);
    }
  }

  // 3. 檢查其他關鍵字
  const otherKey = Object.keys(otherReplies).find(
    (key) => lowerText === key.toLowerCase()
  );
  if (otherKey) {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: otherReplies[otherKey],
    });
  }

  // 4. 不匹配任何關鍵字 → 不回覆
  return null;
}

// ==========================================
// 工具函數
// ==========================================

function getToday() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// 啟動伺服器
// ==========================================

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
