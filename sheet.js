// Google Sheet 後台串接（透過 Apps Script Web App）
// 設定方式：在 Render 環境變數加上 SHEET_WEBHOOK_URL

const SHEET_URL = process.env.SHEET_WEBHOOK_URL || '';

async function callSheet(payload, timeoutMs = 6000) {
  if (!SHEET_URL) return { ok: false, error: 'SHEET_WEBHOOK_URL not set' };

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
    return await res.json();
  } catch (err) {
    console.error('[sheet]', payload.action, err.message);
    return { ok: false, error: err.message };
  } finally {
    clearTimeout(timer);
  }
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
