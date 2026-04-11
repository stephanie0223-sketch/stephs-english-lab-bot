const express = require('express');
const path = require('path');
const cron = require('node-cron');
const { messagingApi, middleware } = require('@line/bot-sdk');
const { MessagingApiClient } = messagingApi;
const { quizReplies, otherReplies } = require('./quiz-data');
const { schedule, weekCards } = require('./schedule-data');

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

  console.log(`[${today}] 推播 Day ${entry.dayNum}: ${entry.image}`);
  try {
    await client.broadcast({
      messages: [{
        type: 'image',
        originalContentUrl: getImageUrl(entry.image),
        previewImageUrl: getImageUrl(entry.image),
      }],
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

  return null;
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
