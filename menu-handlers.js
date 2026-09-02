// 圖文選單六格的處理邏輯
const { schedule, weekCards } = require('./schedule-data');
const { gameLabel } = require('./game-data');
const { sheet } = require('./sheet');

// 造句批改頁（自架在本服務上，不依賴任何第三方帳號或 Gem）
function writeUrl() {
  return `${baseUrl()}/write.html`;
}

function getToday() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Taipei' });
}

// 依今天日期算出「最近一組已上完的雙週」，例如今天在 W18 → 回傳 "15-16"
function inferCurrentGame() {
  const today = getToday();
  const done = schedule
    .filter(s => s.type === 'quiz' && s.date <= today && s.week % 2 === 0)
    .map(s => s.week)
    .sort((a, b) => b - a);
  const w = done[0] || 2;
  return `${w - 1}-${w}`;
}

// 目前開放的複習遊戲（格式 "5-6"）
// 優先序：手動設定 > 環境變數 > 依日期自動推算
let manualGame = process.env.CURRENT_GAME || null;

function setCurrentGame(id) { manualGame = id; }
function getCurrentGame() { return manualGame || inferCurrentGame(); }

function baseUrl() {
  return process.env.BASE_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;
}

function imageUrl(filename) {
  return `${baseUrl()}/cards/${encodeURIComponent(filename)}`;
}

// 課程全部上完後的循環複習：每天輪播一張舊圖卡，讓每日習慣不中斷
function reviewCard(userId, dailyIdioms) {
  const cards = schedule.filter(s => s.type === 'card');
  if (!cards.length) {
    return [{ type: 'text', text: '目前沒有可複習的圖卡 🌿' }];
  }

  const lastDate = cards[cards.length - 1].date;
  const daysSince = Math.round(
    (Date.parse(getToday() + 'T00:00:00Z') - Date.parse(lastDate + 'T00:00:00Z')) / 86400000
  );
  const n = cards.length;
  const idx = (((daysSince - 1) % n) + n) % n;
  const pick = cards[idx];
  const idiom = dailyIdioms[pick.dayNum - 1] || '';

  if (sheet.enabled()) {
    sheet.checkin(userId, pick.dayNum, idiom).catch(() => {});
  }

  return [
    {
      type: 'image',
      originalContentUrl: imageUrl(pick.image),
      previewImageUrl: imageUrl(pick.image),
    },
    {
      type: 'text',
      text: `🔄 複習日｜Day ${pick.dayNum}：「${idiom}」

第一輪 ${n} 天已經全部跑完了，現在進入複習循環——每天一張，重新溫習一次 🌿

還記得怎麼用嗎？造個句子丟給小助教 👇
${writeUrl()}`,
    },
  ];
}

// ==========================================
// 📖 今日片語
// ==========================================
async function handleToday(userId, dailyIdioms) {
  const today = getToday();
  const entry = schedule.find(s => s.date === today && s.type === 'card');

  if (!entry) {
    const quiz = schedule.find(s => s.date === today && s.type === 'quiz');
    if (quiz) {
      return [{
        type: 'text',
        text: `今天是週六，沒有新片語 ☺️\n\n是複習日！點下方「🎮 複習遊戲」測驗一下這兩週學的內容吧 💪`,
      }];
    }
    const nextCard = schedule.find(s => s.type === 'card' && s.date > today);
    if (nextCard) {
      return [{
        type: 'text',
        text: `今天休息，好好充電 🌿

下一張圖卡會在 ${nextCard.date} 出現。
想複習的話，點下方「📚 補看圖卡」隨時都能看 ☺️`,
      }];
    }
    // 整輪課程已上完 → 進入循環複習模式
    return reviewCard(userId, dailyIdioms);
  }

  const idiom = dailyIdioms[entry.dayNum - 1] || '';

  // 記錄簽到（失敗不影響回覆）
  if (sheet.enabled()) {
    sheet.checkin(userId, entry.dayNum, idiom).catch(() => {});
  }

  return [
    {
      type: 'image',
      originalContentUrl: imageUrl(entry.image),
      previewImageUrl: imageUrl(entry.image),
    },
    {
      type: 'text',
      text: `✏️ Day ${entry.dayNum}｜今天的片語是「${idiom}」\n\n試著造一個英文句子，丟給「造句小助教」批改 👇\n${writeUrl()}\n\n（點下方「✏️ 造句批改」隨時都能找到這個連結）`,
    },
  ];
}

// ==========================================
// 🎮 複習遊戲
// ==========================================
function handleGame() {
  const gameId = getCurrentGame();
  const info = gameLabel(gameId);
  const url = `${baseUrl()}/game.html?g=${encodeURIComponent(gameId)}`;

  return [{
    type: 'text',
    text: `🎮 本期複習遊戲：${info.label}\n📚 範圍：${info.themes}\n\n共 10 題，每題 20 秒 ⏱️\n答錯會告訴你錯在哪，答對也有補充說明——測驗也是學習 📖\n完成後可以看 🏆 全班排行榜 TOP 10！\n\n👉 ${url}\n\n第一次玩要先輸入學號和姓名喔 ☺️`,
  }];
}

// ==========================================
// 📚 補看圖卡
// ==========================================
function handleArchive() {
  const weeks = Object.keys(weekCards).map(Number).sort((a, b) => a - b);
  const max = weeks[weeks.length - 1];

  return [{
    type: 'text',
    text: `📚 想複習哪一週？\n\n直接輸入 W1 ～ W${max} 就會收到那週的 5 張圖卡 ☺️\n\n例如輸入「W5」→ 健身主題\n輸入「W12」→ 飲食主題\n\n（一次會傳 5 張圖，慢慢看不用急 🌿）`,
  }];
}

// ==========================================
// ✏️ 造句批改
// ==========================================
function handleFeedback() {
  return [{
    type: 'text',
    text: `✏️ 造句小助教

把你寫的英文句子貼進去，選一個 AI，馬上得到：
✅ idiom 用得對不對
📝 文法和用字批改
✨ Native speaker 會怎麼說

👉 ${writeUrl()}

ChatGPT、Claude、Gemini 都可以用，指令會自動幫你帶好 💡`,
  }];
}

// ==========================================
// 📊 我的進度
// ==========================================
async function handleProgress(userId) {
  if (!sheet.enabled()) {
    return [{ type: 'text', text: '進度功能正在準備中，敬請期待 🌿' }];
  }

  const res = await sheet.progress(userId);

  if (!res.ok) {
    return [{ type: 'text', text: '進度查詢暫時無法使用，請稍後再試 🙏' }];
  }

  if (!res.bound) {
    return [{
      type: 'text',
      text: `還沒有你的學習紀錄喔 📊\n\n先去玩一次「🎮 複習遊戲」並輸入學號姓名，之後就能看到自己的進度了 ☺️`,
    }];
  }

  const games = res.games || [];
  const totalScore = games.reduce((sum, g) => sum + Number(g.score || 0), 0);
  const totalQ = games.reduce((sum, g) => sum + Number(g.total || 0), 0);
  const acc = totalQ ? Math.round(totalScore / totalQ * 100) : 0;

  let text = `📊 ${res.name}（${res.studentId}）的學習紀錄\n\n`;
  text += `📖 累計簽到：${res.checkinCount} 天\n`;
  if (res.lastCheckin) text += `🕐 最近簽到：${String(res.lastCheckin).slice(0, 10)}\n`;
  text += `🎮 完成遊戲：${games.length} 次\n`;
  if (games.length) text += `🎯 平均正確率：${acc}%\n`;

  if (games.length) {
    text += `\n最近成績：\n`;
    games.slice(-3).reverse().forEach(g => {
      text += `　${g.gameId}　${g.score}/${g.total} 題　${g.seconds}秒\n`;
    });
  }

  text += `\n${res.checkinCount >= 10 ? '持續得很棒，繼續保持 🌿' : '每天點一下「今日片語」就會累積喔 ☺️'}`;

  return [{ type: 'text', text }];
}

// ==========================================
// 🌿 關於老師
// ==========================================
function handleAbout() {
  return [{
    type: 'text',
    text: `🌿 Steph's English Lab\n\n嗨，我是 Stephanie，一位相信「英文是通往世界的橋樑」的高中英文老師。\n\n這裡不教死背，只想陪你每天累積一點點——\n📖 週一到週五｜每天一組實用片語\n🎮 每兩週｜複習遊戲挑戰\n✏️ 隨時｜AI 造句批改\n\n學英文不是為了考試，\n是為了有一天你能用它，跟世界對話。\n\nEnglish for Connection.\nDriven by Purpose. Mastered by Perseverance. ✨\n\n🔗 教材與課程：\nhttps://www.stephanies-english-lab.com/`,
  }];
}

// ==========================================
// 分派
// ==========================================
async function handleMenu(action, userId, dailyIdioms) {
  switch (action) {
    case 'today':    return handleToday(userId, dailyIdioms);
    case 'game':     return handleGame();
    case 'archive':  return handleArchive();
    case 'feedback': return handleFeedback();
    case 'progress': return handleProgress(userId);
    case 'about':    return handleAbout();
    default:         return null;
  }
}

module.exports = { handleMenu, setCurrentGame, getCurrentGame, writeUrl };
