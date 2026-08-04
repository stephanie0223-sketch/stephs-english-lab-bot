// 把 schedule-data 的 quizTexts + quiz-data 的答案，組成遊戲用的題目物件
const { schedule } = require('./schedule-data');
const { quizReplies } = require('./quiz-data');

const KEYS = ['A', 'B', 'C', 'D'];

// 每週主題（給遊戲標題用）
const weekThemes = {
  1: '日常片語', 2: '人際溝通', 3: '手機成癮', 4: '認識新朋友', 5: '健身',
  6: '戀愛 Part 1', 7: '戀愛 Part 2', 8: '職場解題', 9: '成長心態',
  10: '旅遊文化', 11: '求職職涯', 12: '飲食', 13: '情緒反應',
  14: '金錢消費', 15: '目標效率', 16: '學業考試',
  17: '環境永續', 18: '科技與 AI', 19: '健康睡眠', 20: '衝突溝通',
};

/**
 * 解析一則 quizText，取出題目與四個選項
 * 格式：'Q21. 題目...\n\nA. xxx\nB. xxx\nC. xxx\nD. xxx\n\n回覆 21A / ...'
 */
function parseQuizText(raw) {
  const numMatch = raw.match(/^Q(\d+)\./);
  if (!numMatch) return null;
  const qNum = parseInt(numMatch[1], 10);

  // 去掉「回覆 ...」那一段
  const body = raw.split(/\n\n回覆/)[0];

  // 拆成題目 + 選項區
  const parts = body.split(/\n\nA\./);
  if (parts.length < 2) return null;

  const question = parts[0].replace(/^Q\d+\.\s*/, '').trim();
  const optBlock = 'A.' + parts[1];

  const options = [];
  KEYS.forEach((k, i) => {
    const next = KEYS[i + 1];
    const re = next
      ? new RegExp(k + '\\.\\s*([\\s\\S]*?)\\n' + next + '\\.')
      : new RegExp(k + '\\.\\s*([\\s\\S]*)$');
    const m = optBlock.match(re);
    options.push(m ? m[1].trim() : '');
  });

  // 從 quiz-data 找出正解
  let answer = -1;
  KEYS.forEach((k, i) => {
    const entry = quizReplies[`${qNum}${k}`];
    if (entry && entry.correct) answer = i;
  });

  if (answer === -1 || options.some(o => !o)) return null;

  return { qNum, question, options, answer };
}

/**
 * 取得某幾週的所有題目
 * @param {number[]} weeks 例如 [5, 6]
 */
function getQuestions(weeks) {
  const out = [];
  weeks.forEach(w => {
    const entry = schedule.find(s => s.type === 'quiz' && s.week === w);
    if (!entry || !entry.quizTexts) return;
    entry.quizTexts.forEach(qt => {
      const parsed = parseQuizText(qt.q);
      if (parsed) out.push(parsed);
    });
  });
  return out;
}

/**
 * gameId 格式："5-6"（第 5、6 週）或 "5"（單週）
 */
function parseGameId(gameId) {
  const weeks = String(gameId || '')
    .split('-')
    .map(n => parseInt(n, 10))
    .filter(n => !isNaN(n) && n >= 1 && n <= 60);
  return weeks.length ? weeks : null;
}

function buildGame(gameId) {
  const weeks = parseGameId(gameId);
  if (!weeks) return { ok: false, error: 'invalid game id' };

  const questions = getQuestions(weeks);
  if (!questions.length) return { ok: false, error: 'no questions found' };

  // 選項順序打亂（答案索引跟著移動）
  questions.forEach(q => {
    const paired = q.options.map((text, i) => ({ text, correct: i === q.answer }));
    for (let i = paired.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [paired[i], paired[j]] = [paired[j], paired[i]];
    }
    q.options = paired.map(p => p.text);
    q.answer = paired.findIndex(p => p.correct);
  });

  const themes = weeks.map(w => weekThemes[w] || `第 ${w} 週`).join(' × ');
  const label = weeks.length > 1 ? `W${weeks[0]}-W${weeks[weeks.length - 1]}` : `W${weeks[0]}`;

  return {
    ok: true,
    title: `${label} 複習挑戰`,
    subtitle: themes,
    questions,
  };
}

/** 給推播用：產生遊戲的標題文字 */
function gameLabel(gameId) {
  const weeks = parseGameId(gameId);
  if (!weeks) return '';
  const themes = weeks.map(w => weekThemes[w] || `第 ${w} 週`).join('、');
  const label = weeks.length > 1 ? `W${weeks[0]}-W${weeks[weeks.length - 1]}` : `W${weeks[0]}`;
  return { label, themes };
}

module.exports = { buildGame, gameLabel, weekThemes, parseGameId };
