const express = require('express');
const path = require('path');
const cron = require('node-cron');
const { messagingApi, middleware } = require('@line/bot-sdk');
const { MessagingApiClient } = messagingApi;
const { quizReplies, otherReplies } = require('./quiz-data');
const { schedule, weekCards } = require('./schedule-data');

// 每天的片語（index 0 = Day 1），用於造句練習提示和 AI 批改參考
const dailyIdioms = [
  // Week 1: Everyday Idioms (Day 1-5)
  'speak volumes',                            // Day 1
  'on the fence',                             // Day 2
  'a blessing in disguise',                   // Day 3
  'cut to the chase',                         // Day 4
  'go the extra mile',                        // Day 5
  // Week 2: Relationships & Communication (Day 6-10)
  'get something off one\'s chest',           // Day 6
  'hit it off',                               // Day 7
  'keep someone in the loop',                 // Day 8
  'rub someone the wrong way',                // Day 9
  'see eye to eye',                           // Day 10
  // Week 3: Phone Addiction (Day 11-15)
  'doomscrolling / scroll hole',              // Day 11
  'phubbing / be left on read',               // Day 12
  'FOMO',                                     // Day 13
  'digital detox',                            // Day 14
  'nomophobia',                               // Day 15
  // Week 4: Meeting People (Day 16-20)
  'introvert / extrovert / ambivert',         // Day 16
  'break the ice / warm up to someone',       // Day 17
  'come out of one\'s shell / step out of one\'s comfort zone', // Day 18
  'culture shock / find common ground',       // Day 19
  'social butterfly / wallflower',            // Day 20
  // Week 5: Gym & Fitness (Day 21-25)
  'work out / hit the gym',                   // Day 21
  'warm up / cool down / reps / sets',        // Day 22
  'no pain no gain / push one\'s limits / go hard or go home', // Day 23
  'gym rat / skip leg day',                   // Day 24
  'get in shape / let oneself go',            // Day 25
  // Week 6: Love Part 1 (Day 26-30)
  'have a crush on / butterflies in one\'s stomach', // Day 26
  'shoot one\'s shot / make the first move',  // Day 27
  'play hard to get / friend zone',           // Day 28
  'fall for someone / love at first sight',   // Day 29
  'head over heels / sweep someone off their feet', // Day 30
  // Week 7: Love Part 2 (Day 31-35)
  'go steady / PDA',                          // Day 31
  'on the rocks / give someone the cold shoulder', // Day 32
  'red flag / toxic relationship',            // Day 33
  'cheat on someone / two-time someone',      // Day 34
  'break up / tie the knot',                  // Day 35
  // Week 8: Work & Problem Solving (Day 36-40)
  'back to square one',                       // Day 36
  'pull one\'s weight',                       // Day 37
  'think outside the box',                    // Day 38
  'up in the air',                            // Day 39
  'call the shots',                           // Day 40
  // Week 9: Growth & Mindset (Day 41-45)
  'step out of one\'s comfort zone',          // Day 41
  'the bigger picture',                       // Day 42
  'take something with a grain of salt',      // Day 43
  'turn over a new leaf',                     // Day 44
  'broaden one\'s horizons',                  // Day 45
  // Week 10: Travel & Culture (Day 46-50)
  'jet lag / book a flight',                  // Day 46
  'off the beaten path / tourist trap',       // Day 47
  'when in Rome',                             // Day 48
  'catch a flight / miss the boat',           // Day 49
  'wanderlust / itchy feet',                  // Day 50
  // Week 11: Job Interview & Career (Day 51-55)
  'land a job / get one\'s foot in the door', // Day 51
  'on the same page / in the loop',           // Day 52
  'take initiative / go above and beyond',    // Day 53
  'climb the corporate ladder',               // Day 54
  'burn out / call it a day',                 // Day 55
  // Week 12: Food & Eating (Day 56-60)
  'a piece of cake / a tough cookie',         // Day 56
  'food coma / stuffed',                      // Day 57
  'eat like a horse / eat like a bird',       // Day 58
  'bring home the bacon / breadwinner',       // Day 59
  'spill the beans / in a nutshell',          // Day 60
  // Week 13: Emotions & Reactions (Day 61-65)
  'on cloud nine / over the moon',            // Day 61
  'fed up / had it up to here',               // Day 62
  'down in the dumps / under the weather',    // Day 63
  'freak out / lose one\'s cool',             // Day 64
  'chill out / take it easy',                 // Day 65
  // Week 14: Money & Shopping (Day 66-70)
  'on a tight budget / pinch pennies',        // Day 66
  'splurge / break the bank',                 // Day 67
  'a steal / rip-off',                        // Day 68
  'save up / put aside',                      // Day 69
  'live paycheck to paycheck',                // Day 70
  // Week 15: Goals & Productivity (Day 71-75)
  'set the bar high / aim high',              // Day 71
  'hit the ground running',                   // Day 72
  'drop the ball / fall behind',              // Day 73
  'bite off more than one can chew',          // Day 74
  'on track / behind schedule',               // Day 75
  // Week 16: School & Studying (Day 76-80)
  'cram / pull an all-nighter',               // Day 76
  'ace a test / pass with flying colors',     // Day 77
  'flunk / barely scrape by',                 // Day 78
  'hit the books / bookworm',                 // Day 79
  'brain fart / blank out',                   // Day 80
];

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

  const todayIdiom = dailyIdioms[entry.dayNum - 1] || '';
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
          text: `✏️ 造句練習時間！\n\n試著用今天學的「${todayIdiom}」造一個英文句子吧！\n\n寫好後可以丟給 ChatGPT 或 Claude 批改，問他們：「請幫我批改這句英文，idiom 有用對嗎？」就會得到完整回饋 💡`,
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

  const quizCount = entry.quizTexts ? entry.quizTexts.length : 0;
  const firstQ = (entry.week - 1) * 5 + 1;
  console.log(`[${today}] 推播 Week ${entry.week} 測驗（${quizCount} 題）`);
  try {
    // 只推播公告 + 第一題，後續題目在學生回答後自動出現
    const messages = [
      {
        type: 'text',
        text: `📝 Week ${entry.week} Quiz Time!\n\n共 ${quizCount} 題，測試你這週學的內容！\n回覆答案（如 ${firstQ}A），答對答錯都會自動出下一題 ☺️`,
      },
    ];
    if (entry.quizTexts && entry.quizTexts.length > 0) {
      messages.push({ type: 'text', text: entry.quizTexts[0].q });
    }
    await client.broadcast({ messages });
    console.log(`[${today}] 測驗推播成功（公告 + 第 1 題）！`);
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

  const firstQ = (entry.week - 1) * 5 + 1;
  const quizCount = entry.quizTexts ? entry.quizTexts.length : 0;
  try {
    // 只推播公告 + 第一題
    const messages = [
      {
        type: 'text',
        text: `📝 Week ${entry.week} Quiz Time!\n\n共 ${quizCount} 題，測試你這週學的內容！\n回覆答案（如 ${firstQ}A），答對答錯都會自動出下一題 ☺️`,
      },
    ];
    if (entry.quizTexts && entry.quizTexts.length > 0) {
      messages.push({ type: 'text', text: entry.quizTexts[0].q });
    }
    await client.broadcast({ messages });
    res.send(`Week ${week} quiz sent (announcement + Q1)!`);
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
    const messages = [{ type: 'text', text: quizReplies[upperText].reply }];

    // 自動出下一題：從答案編號算出目前題號和下一題（獨立一則訊息）
    const qMatch = upperText.match(/^(\d+)[A-D]$/);
    if (qMatch) {
      const qNum = parseInt(qMatch[1]);
      const week = Math.ceil(qNum / 5);
      const posInWeek = (qNum - 1) % 5; // 0-4
      const weekEntry = schedule.find(s => s.type === 'quiz' && s.week === week);
      if (weekEntry && weekEntry.quizTexts && posInWeek < weekEntry.quizTexts.length - 1) {
        // 還有下一題，獨立一則訊息
        messages.push({ type: 'text', text: weekEntry.quizTexts[posInWeek + 1].q });
      }
    }

    return client.replyMessage({
      replyToken: event.replyToken,
      messages,
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

  // 看起來像英文句子（長度 >= 10 且含英文字母）→ 推薦使用其他 AI 工具批改
  if (userText.length >= 10 && /[a-zA-Z]/.test(userText)) {
    return client.replyMessage({
      replyToken: event.replyToken,
      messages: [{
        type: 'text',
        text: `看起來你想練習造句 ✏️\n\n推薦你用 ChatGPT 或 Claude 幫你批改！只要這樣問：\n\n「請幫我批改這句英文，看 idiom 用得對不對、文法有沒有錯，並示範 native speaker 會怎麼說：\n[你的句子]」\n\n他們會給你很棒的回饋 💡\n\n🔗 ChatGPT：chat.openai.com\n🔗 Claude：claude.ai\n\n練習完歡迎在 IG 私訊跟我分享你寫的句子 ☺️`,
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
