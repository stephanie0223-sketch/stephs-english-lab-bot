// 圖文選單設定（2500 × 1686，3 欄 × 2 列）
// 每格 833 × 843

const W = 833;
const H = 843;

function cell(col, row) {
  return {
    x: col === 2 ? 1667 : col * W,
    y: row * H,
    width: col === 1 ? 834 : W,
    height: H,
  };
}

const richMenuConfig = {
  size: { width: 2500, height: 1686 },
  selected: true,
  name: "Steph's English Lab Main Menu",
  chatBarText: '打開學習選單 🌿',
  areas: [
    { bounds: cell(0, 0), action: { type: 'postback', data: 'menu=today',    displayText: '📖 今日片語' } },
    { bounds: cell(1, 0), action: { type: 'postback', data: 'menu=game',     displayText: '🎮 複習遊戲' } },
    { bounds: cell(2, 0), action: { type: 'postback', data: 'menu=archive',  displayText: '📚 補看圖卡' } },
    { bounds: cell(0, 1), action: { type: 'postback', data: 'menu=feedback', displayText: '✏️ 造句批改' } },
    { bounds: cell(1, 1), action: { type: 'postback', data: 'menu=progress', displayText: '📊 我的進度' } },
    { bounds: cell(2, 1), action: { type: 'postback', data: 'menu=about',    displayText: '🌿 關於老師' } },
  ],
};

module.exports = { richMenuConfig };
