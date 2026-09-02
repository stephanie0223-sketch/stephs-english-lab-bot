const express = require('express');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');
const { messagingApi, middleware } = require('@line/bot-sdk');
const { MessagingApiClient, MessagingApiBlobClient } = messagingApi;
const { quizReplies, otherReplies } = require('./quiz-data');
const { schedule, weekCards } = require('./schedule-data');
const { buildGame, gameLabel } = require('./game-data');
const { richMenuConfig } = require('./richmenu');
const { handleMenu, setCurrentGame, getCurrentGame, writeUrl } = require('./menu-handlers');
const { sheet } = require('./sheet');

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
  // Week 17: Environment & Sustainability (Day 81-85)
  'carbon footprint / go green',              // Day 81
  'throwaway culture / single-use',           // Day 82
  'eco-friendly / reduce, reuse, recycle',    // Day 83
  'a drop in the ocean / every little helps', // Day 84
  'greenwashing / jump on the bandwagon',     // Day 85
  // Week 18: Technology & AI (Day 86-90)
  'cutting-edge / state-of-the-art',          // Day 86
  'a game changer / take it to the next level', // Day 87
  'tech-savvy / digital native',              // Day 88
  'the tip of the iceberg / behind the scenes', // Day 89
  'keep up with the times / fall behind the curve', // Day 90
  // Week 19: Health & Sleep (Day 91-95)
  'burn the midnight oil / hit the hay',      // Day 91
  'catch some Z\'s / sleep like a log',       // Day 92
  'come down with something / run-down',      // Day 93
  'recharge one\'s batteries / take a breather', // Day 94
  'you are what you eat / as fit as a fiddle', // Day 95
  // Week 20: Conflict & Communication (Day 96-100)
  'agree to disagree / meet halfway',         // Day 96
  'bury the hatchet / clear the air',         // Day 97
  'walk on eggshells / tiptoe around',        // Day 98
  'speak one\'s mind / call someone out',     // Day 99
  'let bygones be bygones / turn the other cheek', // Day 100
  // Week 21: Music & Entertainment (Day 101-105)
  'binge-watch / on repeat',                  // Day 101
  'catchy / stuck in one\'s head',            // Day 102
  'steal the show / bring the house down',    // Day 103
  'spoiler alert / give away the ending',     // Day 104
  'a must-watch / a tear-jerker',             // Day 105
  // Week 22: Sports & Competition (Day 106-110)
  'a game plan / give it your all',           // Day 106
  'neck and neck / the home stretch',         // Day 107
  'throw in the towel / hang in there',       // Day 108
  'the underdog / a level playing field',     // Day 109
  'call it a draw / a good sport',            // Day 110
  // Week 23: Creativity & Expression (Day 111-115)
  'from scratch / a stroke of genius',        // Day 111
  'back to the drawing board / put a spin on something', // Day 112
  'out of the blue / on a whim',              // Day 113
  'paint a picture / food for thought',       // Day 114
  'think on one\'s feet / get one\'s creative juices flowing', // Day 115
  // Week 24: Personality & Character (Day 116-120)
  'down-to-earth / easygoing',                // Day 116
  'a people person / a go-getter',            // Day 117
  'two-faced / talk behind someone\'s back',  // Day 118
  'a tough nut to crack / hard to read',      // Day 119
  'wear one\'s heart on one\'s sleeve / an open book', // Day 120
  // Week 25: Global Views & News (Day 121-125)
  'make headlines / in the spotlight',        // Day 121
  'a hot topic / spark a debate',             // Day 122
  'a double-edged sword / the other side of the coin', // Day 123
  'take a stand / raise awareness',           // Day 124
  'a global citizen / keep an open mind',     // Day 125
  // Week 26: Future & Choices (Day 126-130)
  'at a crossroads / weigh one\'s options',   // Day 126
  'keep one\'s options open / play it by ear', // Day 127
  'a leap of faith / take the plunge',        // Day 128
  'follow one\'s heart / the sky\'s the limit', // Day 129
  'chart one\'s own course / one step at a time', // Day 130
];

// LINE Messaging API 設定
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

const client = new MessagingApiClient({ channelAccessToken: config.channelAccessToken });
const blobClient = new MessagingApiBlobClient({ channelAccessToken: config.channelAccessToken });
const app = express();

// 提供靜態檔案（圖卡、遊戲頁、選單圖）
app.use('/cards', express.static(path.join(__dirname, 'public', 'cards')));
app.use(express.static(path.join(__dirname, 'public')));

// 取得圖片的完整 URL
function getImageUrl(filename) {
  const baseUrl = process.env.BASE_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
  return `${baseUrl}/cards/${encodeURIComponent(filename)}`;
}

// ==========================================
// 推播策略（省訊息額度）
// ------------------------------------------
// LINE 免費方案每月 200 則，且只有「主動推播」計費，
// 「回覆訊息」完全免費。因此：
//   ❌ 不再每日推播圖卡（改由圖文選單「今日片語」拉取）
//   ❌ 不再每週推播測驗（改為每兩週一次的複習遊戲）
//   ✅ 只在每兩週的週日晚上推一則遊戲通知
// ==========================================

// 產生遊戲推播排程：每偶數週的測驗日隔天（週日）晚上 20:00
function buildGameSchedule() {
  const out = [];
  const quizWeeks = schedule
    .filter(s => s.type === 'quiz')
    .map(s => s.week)
    .sort((a, b) => a - b);

  quizWeeks.forEach(w => {
    if (w % 2 !== 0) return; // 只在雙週結束後推
    const quiz = schedule.find(s => s.type === 'quiz' && s.week === w);
    if (!quiz) return;
    const d = new Date(quiz.date + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() + 1); // 測驗日（週六）+ 1 = 週日
    out.push({ date: d.toISOString().slice(0, 10), gameId: `${w - 1}-${w}` });
  });
  return out;
}

const gameSchedule = buildGameSchedule();

// 每週日 20:00 檢查是否有排定的複習遊戲
cron.schedule('0 20 * * 0', async () => {
  const today = getToday();
  const entry = gameSchedule.find(g => g.date === today);
  if (!entry) {
    console.log(`[${today}] 今天沒有排定的複習遊戲推播`);
    return;
  }

  setCurrentGame(entry.gameId);
  const info = gameLabel(entry.gameId);
  const url = `${process.env.BASE_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`}/game.html?g=${entry.gameId}`;

  console.log(`[${today}] 推播複習遊戲 ${entry.gameId}`);
  try {
    await client.broadcast({
      messages: [{
        type: 'text',
        text: `🎮 ${info.label} 複習遊戲上線了！\n\n📚 範圍：${info.themes}\n⏱️ 10 題，每題 20 秒\n📖 答錯會告訴你錯在哪，測驗也是學習\n🏆 完成後看看你排全班第幾名\n\n看看你這兩週記住多少 👇\n${url}\n\n這次的成績老師看得到，加油 ☺️`,
      }],
    });
    console.log(`[${today}] 複習遊戲推播成功！`);
  } catch (err) {
    console.error(`[${today}] 複習遊戲推播失敗:`, err.message);
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
// 遊戲 API（給 game.html 用，同源不需 CORS）
// ==========================================
app.get('/api/quiz', (req, res) => {
  const game = buildGame(req.query.g || getCurrentGame());
  res.json(game);
});

app.get('/api/leaderboard', async (req, res) => {
  const gameId = req.query.g || getCurrentGame();
  const result = await sheet.leaderboard(gameId, 10);
  res.json(result);
});

app.post('/api/score', express.json(), async (req, res) => {
  const { studentId, name, gameId, score, total, seconds } = req.body || {};
  if (!studentId || !name) return res.json({ ok: false, error: 'missing student' });

  const result = await sheet.score({ studentId, name, gameId, score, total, seconds });
  console.log(`[score] ${studentId} ${name} ${gameId} ${score}/${total} ${seconds}s → ${result.ok ? 'ok' : result.error}`);
  res.json(result);
});

// ==========================================
// 圖文選單設定（部署後打開一次即可）
// ==========================================
app.get('/setup-richmenu', async (req, res) => {
  try {
    // 先刪掉舊的選單，避免累積
    const existing = await client.getRichMenuList();
    for (const menu of existing.richmenus || []) {
      await client.deleteRichMenu(menu.richMenuId);
      console.log(`[richmenu] deleted ${menu.richMenuId}`);
    }

    const created = await client.createRichMenu(richMenuConfig);
    const richMenuId = created.richMenuId;

    const imgPath = path.join(__dirname, 'public', 'richmenu.png');
    const buffer = fs.readFileSync(imgPath);
    await blobClient.setRichMenuImage(richMenuId, new Blob([buffer], { type: 'image/png' }));

    await client.setDefaultRichMenu(richMenuId);

    console.log(`[richmenu] created and set as default: ${richMenuId}`);
    res.send(`✅ 圖文選單設定完成！\nrichMenuId: ${richMenuId}\n\n打開 LINE 聊天室就會看到選單（可能要重開 App）。`);
  } catch (err) {
    console.error('[richmenu] setup failed:', err);
    res.status(500).send(`❌ 設定失敗：${err.message}\n\n${JSON.stringify(err.originalError?.response?.data || {}, null, 2)}`);
  }
});

// 手動切換目前開放的複習遊戲，例如 /set-game/5-6
app.get('/set-game/:id', (req, res) => {
  setCurrentGame(req.params.id);
  const info = gameLabel(req.params.id);
  res.send(`✅ 目前遊戲已切換為 ${req.params.id}（${info.themes || '?'}）`);
});

// ==========================================
// 手動觸發推播（補發用）
// ==========================================
app.get('/trigger-card/:day', async (req, res) => {
  const dayNum = parseInt(req.params.day);
  const entry = schedule.find(s => s.type === 'card' && s.dayNum === dayNum);
  if (!entry) return res.status(404).send(`Day ${dayNum} card not found`);

  const todayIdiom = dailyIdioms[entry.dayNum - 1] || '';
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
          text: `✏️ 造句練習時間！\n\n試著用今天學的「${todayIdiom}」造一個英文句子吧！\n\n寫好後丟給「Steph's 造句小助教」幫你批改 👇\n${writeUrl()}\n\n打開就已經幫你填好指令，直接按送出 💡`,
        },
      ],
    });
    res.send(`Day ${dayNum} card sent: ${entry.image}`);
  } catch (err) {
    console.error('Manual card trigger error:', err.message);
    res.status(500).send(err.message);
  }
});

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
        text: `嗨！歡迎加入 Steph's English Lab 🌿\n\n我是 Stephanie，一位相信「英文是通往世界的橋樑」的高中英文老師。\n\n看到下面的選單了嗎？六個功能都在那裡 👇\n\n📖 今日片語｜每天點一下，收今天的圖卡\n🎮 複習遊戲｜每兩週一次的計時挑戰\n📚 補看圖卡｜輸入 W1、W2... 隨時回顧\n✏️ 造句批改｜AI 幫你改英文句子\n📊 我的進度｜看自己累積了多少\n🌿 關於老師｜認識我\n\n不用死背，不用壓力——\n每天花 30 秒，慢慢累積就好。\n\n先點「📖 今日片語」開始吧！\nEnglish for Connection ✨`,
      }],
    });
  }

  // 圖文選單（postback）
  if (event.type === 'postback') {
    const params = new URLSearchParams(event.postback.data || '');
    const action = params.get('menu');
    const messages = await handleMenu(action, event.source.userId, dailyIdioms);
    if (!messages) return null;
    return client.replyMessage({ replyToken: event.replyToken, messages });
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

  const weekMatch = lowerText.match(/^(?:w|week\s?)(\d{1,2})$/);
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
        text: `看起來你想練習造句 ✏️\n\n把句子貼到「造句小助教」，選一個 AI 就會幫你批改 💡\n\n🌿 Steph's 造句小助教：\n${writeUrl()}\n\n他會幫你檢查：\n✅ idiom 用得對不對\n📝 文法和用字\n✨ Native speaker 會怎麼說`,
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
