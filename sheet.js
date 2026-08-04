// Google Sheet 後台串接（透過 Apps Script Web App）
// 設定方式：在 Render 環境變數加上 SHEET_WEBHOOK_URL

const SHEET_URL = process.env.SHEET_WEBHOOK_URL || '';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Apps Script 偶爾會回傳 HTML 錯誤頁（短時間內請求過多），此時重試一次
async function callOnce(payload, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: 'follow',
    });
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { ok: false, retryable: true, error: 'non-JSON response' };
    }
  } catch (err) {
    return { ok: false, retryable: true, error: err.message };
  } finally {
    clearTimeout(timer);
  }
}

async function callSheet(payload, timeoutMs = 7000) {
  if (!SHEET_URL) return { ok: false, error: 'SHEET_WEBHOOK_URL not set' };

  let result = await callOnce(payload, timeoutMs);
  if (result.retryable) {
    await sleep(700);
    result = await callOnce(payload, timeoutMs);
  }

  if (!result.ok) console.error('[sheet]', payload.action, result.error);
  return result;
}

const sheet = {
  bind:     (userId, studentId, name) => callSheet({ action: 'bind', userId, studentId, name }),
  whoami:   (userId)                  => callSheet({ action: 'whoami', userId }),
  checkin:  (userId, day, idiom)      => callSheet({ action: 'checkin', userId, day, idiom }),
  progress: (userId)                  => callSheet({ action: 'progress', userId }),
  score:    (data)                    => callSheet(Object.assign({ action: 'score' }, data)),
  leaderboard: (gameId, limit = 10)   => callSheet({ action: 'leaderboard', gameId, limit }),
  enabled:  () => Boolean(SHEET_URL),
};

module.exports = { sheet };
