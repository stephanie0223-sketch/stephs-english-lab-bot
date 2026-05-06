// 所有測驗題目的正確答案和回覆內容
// 格式：關鍵字 → { correct: boolean, reply: 回覆文字 }

const quizReplies = {
  // ===== Week 1: speak volumes / on the fence / a blessing in disguise / cut to the chase / go the extra mile =====

  // Q1 - 正確答案: B (speak volumes)
  '1A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 speak volumes（意義重大；充分說明）\n\n他的表情已經「說明了一切」。\n\n例句：Her silence speaks volumes about how she feels.\n\n💡 go the extra mile 是「加倍努力」的意思喔！' },
  '1B': { correct: true,  reply: '✅ 答對了！\n👉 speak volumes = 充分說明、不言而喻\n\n他什麼都沒說，但表情已經「說明了一切」。\n\n例句：Her silence speaks volumes about how she feels.\n\n👏 繼續下一題！' },
  '1C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 speak volumes（意義重大；充分說明）\n\n他的表情已經「說明了一切」。\n\n例句：Her silence speaks volumes about how she feels.\n\n💡 cut to the chase 是「直接講重點」的意思喔！' },
  '1D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 speak volumes（意義重大；充分說明）\n\n他的表情已經「說明了一切」。\n\n例句：Her silence speaks volumes about how she feels.\n\n💡 on the fence 是「猶豫不決」的意思喔！' },

  // Q2 - 正確答案: C (on the fence)
  '2A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 on the fence（猶豫不決）\n\n「還沒決定要不要去東京」就是在 fence 上搖擺不定。\n\n例句：Are you still on the fence about the trip?\n\n💡 a blessing in disguise 是「因禍得福」的意思喔！' },
  '2B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 on the fence（猶豫不決）\n\n「還沒決定要不要去東京」就是在 fence 上搖擺不定。\n\n例句：Are you still on the fence about the trip?\n\n💡 cut to the chase 是「直接講重點」的意思喔！' },
  '2C': { correct: true,  reply: '✅ 答對了！\n👉 on the fence = 猶豫不決、還沒做決定\n\n想像自己坐在圍欄上，兩邊都沒跳下去。\n\n例句：Are you still on the fence about the trip?\n\n👏 繼續下一題！' },
  '2D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 on the fence（猶豫不決）\n\n「還沒決定要不要去東京」就是在 fence 上搖擺不定。\n\n例句：Are you still on the fence about the trip?\n\n💡 go the extra mile 是「加倍努力」的意思喔！' },

  // Q3 - 正確答案: D (a blessing in disguise)
  '3A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 a blessing in disguise（因禍得福）\n\n錯過班機看似倒霉，結果反而認識了最好的朋友！\n\n例句：Losing that job was a blessing in disguise — I found a much better one.\n\n💡 go the extra mile 是「加倍努力」的意思喔！' },
  '3B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 a blessing in disguise（因禍得福）\n\n錯過班機看似倒霉，結果反而認識了最好的朋友！\n\n例句：Losing that job was a blessing in disguise — I found a much better one.\n\n💡 speak volumes 是「充分說明」的意思喔！' },
  '3C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 a blessing in disguise（因禍得福）\n\n錯過班機看似倒霉，結果反而認識了最好的朋友！\n\n例句：Losing that job was a blessing in disguise — I found a much better one.\n\n💡 cut to the chase 是「直接講重點」的意思喔！' },
  '3D': { correct: true,  reply: '✅ 答對了！\n👉 a blessing in disguise = 因禍得福、塞翁失馬焉知非福\n\n看起來是壞事，結果反而是好事！\n\n例句：Losing that job was a blessing in disguise — I found a much better one.\n\n👏 繼續下一題！' },

  // Q4 - 正確答案: D (cut to the chase)
  '4A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 cut to the chase（直接講重點）\n\n會議只剩 5 分鐘，「別繞圈子了，直說吧！」\n\n例句：I don\'t have much time, so let me cut to the chase.\n\n💡 go the extra mile 是「加倍努力」的意思喔！' },
  '4B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 cut to the chase（直接講重點）\n\n會議只剩 5 分鐘，「別繞圈子了，直說吧！」\n\n例句：I don\'t have much time, so let me cut to the chase.\n\n💡 speak volumes 是「充分說明」的意思喔！' },
  '4C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 cut to the chase（直接講重點）\n\n會議只剩 5 分鐘，「別繞圈子了，直說吧！」\n\n例句：I don\'t have much time, so let me cut to the chase.\n\n💡 on the fence 是「猶豫不決」的意思喔！' },
  '4D': { correct: true,  reply: '✅ 答對了！\n👉 cut to the chase = 直接講重點、別繞圈子\n\n這個片語來自早期電影——快轉到追逐場面，跳過無聊的部分！\n\n例句：I don\'t have much time, so let me cut to the chase.\n\n👏 繼續下一題！' },

  // Q5 - 正確答案: B (go the extra mile)
  '5A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 go the extra mile（加倍努力、多做一步）\n\n老師週末還額外錄影片，就是在「多走一哩路」幫學生。\n\n例句：She always goes the extra mile to make her students feel welcome.\n\n💡 on the fence 是「猶豫不決」的意思喔！' },
  '5B': { correct: true,  reply: '✅ 答對了！\n👉 go the extra mile = 加倍努力、多做一步\n\n老師週末還額外錄影片，真的是在「多走一哩路」！\n\n例句：She always goes the extra mile to make her students feel welcome.\n\n🎉 Week 1 測驗完成！答得好棒！' },
  '5C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 go the extra mile（加倍努力、多做一步）\n\n老師週末還額外錄影片，就是在「多走一哩路」幫學生。\n\n例句：She always goes the extra mile to make her students feel welcome.\n\n💡 speak volumes 是「充分說明」的意思喔！' },
  '5D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 go the extra mile（加倍努力、多做一步）\n\n老師週末還額外錄影片，就是在「多走一哩路」幫學生。\n\n例句：She always goes the extra mile to make her students feel welcome.\n\n💡 a blessing in disguise 是「因禍得福」的意思喔！' },

  // ===== Week 2: get something off one's chest / hit it off / keep someone in the loop / rub someone the wrong way / see eye to eye =====

  // Q6 - 正確答案: C (get it off my chest)
  '6A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 get something off one\'s chest（把心裡話說出來）\n\n憋了好幾週的事，終於想「一吐為快」。\n\n例句：I need to get this off my chest — I\'ve been stressed about it for days.\n\n💡 keep someone in the loop 是「讓某人保持消息同步」的意思喔！' },
  '6B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 get something off one\'s chest（把心裡話說出來）\n\n憋了好幾週的事，終於想「一吐為快」。\n\n例句：I need to get this off my chest — I\'ve been stressed about it for days.\n\n💡 see eye to eye 是「意見一致」的意思喔！' },
  '6C': { correct: true,  reply: '✅ 答對了！\n👉 get something off one\'s chest = 把心裡話說出來、一吐為快\n\n想像把壓在胸口的重物拿下來，是不是輕鬆多了？\n\n例句：I need to get this off my chest — I\'ve been stressed about it for days.\n\n👏 繼續下一題！' },
  '6D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 get something off one\'s chest（把心裡話說出來）\n\n憋了好幾週的事，終於想「一吐為快」。\n\n例句：I need to get this off my chest — I\'ve been stressed about it for days.\n\n💡 hit it off 是「一見如故」的意思喔！' },

  // Q7 - 正確答案: D (hit it off)
  '7A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 hit it off（一拍即合、一見如故）\n\n在派對認識就聊了三小時，超合得來！\n\n例句：We hit it off immediately and have been good friends ever since.\n\n💡 rub someone the wrong way 是「惹人反感」，完全相反喔！' },
  '7B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 hit it off（一拍即合、一見如故）\n\n在派對認識就聊了三小時，超合得來！\n\n例句：We hit it off immediately and have been good friends ever since.\n\n💡 see eye to eye 是「意見一致」，通常用在討論觀點時喔！' },
  '7C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 hit it off（一拍即合、一見如故）\n\n在派對認識就聊了三小時，超合得來！\n\n例句：We hit it off immediately and have been good friends ever since.\n\n💡 keep someone in the loop 是「讓某人保持消息同步」的意思喔！' },
  '7D': { correct: true,  reply: '✅ 答對了！\n👉 hit it off = 一拍即合、一見如故\n\n剛認識就聊了三小時，這就是 hit it off 的完美情境！\n\n例句：We hit it off immediately and have been good friends ever since.\n\n👏 繼續下一題！' },

  // Q8 - 正確答案: C (keep me in the loop)
  '8A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 keep someone in the loop（讓某人保持消息同步）\n\n專案截止日有變動的話，「讓我知道最新狀況」。\n\n例句：Please keep me in the loop if there are any updates.\n\n💡 get something off one\'s chest 是「把心裡話說出來」的意思喔！' },
  '8B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 keep someone in the loop（讓某人保持消息同步）\n\n專案截止日有變動的話，「讓我知道最新狀況」。\n\n例句：Please keep me in the loop if there are any updates.\n\n💡 rub someone the wrong way 是「惹人反感」的意思喔！' },
  '8C': { correct: true,  reply: '✅ 答對了！\n👉 keep someone in the loop = 讓某人保持消息同步、隨時更新\n\nloop 就像一個資訊圈，你在圈裡就不會漏掉消息！\n\n例句：Please keep me in the loop if there are any updates.\n\n👏 繼續下一題！' },
  '8D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 keep someone in the loop（讓某人保持消息同步）\n\n專案截止日有變動的話，「讓我知道最新狀況」。\n\n例句：Please keep me in the loop if there are any updates.\n\n💡 hit it off 是「一拍即合」的意思喔！' },

  // Q9 - 正確答案: B (rubs me the wrong way)
  '9A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 rub someone the wrong way（讓人反感、惹毛某人）\n\n他的態度就是讓人不舒服，說不上來為什麼。\n\n例句：His arrogant tone really rubs me the wrong way.\n\n💡 keep someone in the loop 是「讓某人保持消息同步」的意思喔！' },
  '9B': { correct: true,  reply: '✅ 答對了！\n👉 rub someone the wrong way = 讓人反感、讓人不舒服\n\n想像逆著貓毛摸，貓一定不開心！\n\n例句：His arrogant tone really rubs me the wrong way.\n\n👏 繼續下一題！' },
  '9C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 rub someone the wrong way（讓人反感、惹毛某人）\n\n他的態度就是讓人不舒服，說不上來為什麼。\n\n例句：His arrogant tone really rubs me the wrong way.\n\n💡 get something off one\'s chest 是「把心裡話說出來」的意思喔！' },
  '9D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 rub someone the wrong way（讓人反感、惹毛某人）\n\n他的態度就是讓人不舒服，說不上來為什麼。\n\n例句：His arrogant tone really rubs me the wrong way.\n\n💡 hit it off 是「一拍即合」的意思喔！' },

  // Q10 - 正確答案: D (see eye to eye)
  '10A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 see eye to eye（意見一致、看法相同）\n\n和爸媽在政治議題上「不見得總是看法一致」。\n\n例句：We don\'t always see eye to eye, but we still get along well.\n\n💡 hit it off 是「一拍即合」，通常用在剛認識的人喔！' },
  '10B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 see eye to eye（意見一致、看法相同）\n\n和爸媽在政治議題上「不見得總是看法一致」。\n\n例句：We don\'t always see eye to eye, but we still get along well.\n\n💡 get something off one\'s chest 是「把心裡話說出來」的意思喔！' },
  '10C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 see eye to eye（意見一致、看法相同）\n\n和爸媽在政治議題上「不見得總是看法一致」。\n\n例句：We don\'t always see eye to eye, but we still get along well.\n\n💡 rub someone the wrong way 是「惹人反感」的意思喔！' },
  '10D': { correct: true,  reply: '✅ 答對了！\n👉 see eye to eye = 意見一致、看法相同\n\n想像兩個人眼對眼，看的方向一模一樣！\n\n例句：We don\'t always see eye to eye, but we still get along well.\n\n🎉 Week 2 測驗完成！你越來越厲害了！' },

  // ===== Week 3: Phone Addiction — doomscrolling / phubbing / FOMO / digital detox / nomophobia =====

  // Q11 - 正確答案: C (doomscrolling)
  '11A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 doomscrolling = 無止盡地滑手機看負面消息\n\nFOMO 是「錯失恐懼症」，怕錯過什麼。doomscrolling 是停不下來一直看負面新聞。\n\n例句：I was doomscrolling until 2 AM last night.' },
  '11B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 doomscrolling = 無止盡地滑手機看負面消息\n\nnomophobia 是「沒手機就焦慮」，而 doomscrolling 是「停不下來一直看壞消息」。\n\n例句：I was doomscrolling until 2 AM last night.' },
  '11C': { correct: true,  reply: '✅ 答對了！\n👉 doomscrolling = 無止盡地滑手機看負面消息\n\ndoom（末日）+ scrolling（滑動），明知越看越焦慮卻停不下來！\n\n例句：I was doomscrolling until 2 AM last night.\n\n👏 繼續下一題！' },
  '11D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 doomscrolling = 無止盡地滑手機看負面消息\n\ndigital detox 是「數位排毒」，主動不用手機。doomscrolling 相反，是停不下來！\n\n例句：I was doomscrolling until 2 AM last night.' },

  // Q12 - 正確答案: B (phubbing)
  '12A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 phubbing = 滑手機冷落對方（phone + snubbing）\n\ndoomscrolling 是「一直滑負面新聞停不下來」，phubbing 是「跟人在一起卻一直滑手機」。\n\n例句：Stop phubbing me! I\'m trying to talk to you.' },
  '12B': { correct: true,  reply: '✅ 答對了！\n👉 phubbing = 滑手機冷落對方（phone + snubbing）\n\n跟朋友吃飯卻一直滑手機，就是 phubbing！這個字是 phone 和 snubbing（冷落）的合體。\n\n例句：Stop phubbing me! I\'m trying to talk to you.\n\n👏 繼續下一題！' },
  '12C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 phubbing = 滑手機冷落對方（phone + snubbing）\n\nleave on read 是「已讀不回」，phubbing 是「當面滑手機冷落人」。\n\n例句：Stop phubbing me! I\'m trying to talk to you.' },
  '12D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 phubbing = 滑手機冷落對方（phone + snubbing）\n\nnomophobia 是「沒手機就恐慌」，phubbing 是「跟人在一起卻一直看手機」。\n\n例句：Stop phubbing me! I\'m trying to talk to you.' },

  // Q13 - 正確答案: B (FOMO)
  '13A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 FOMO = Fear of Missing Out（錯失恐懼症）\n\nnomophobia 是「沒手機就恐慌」，FOMO 是「怕錯過別人在做的事」。\n\n例句：I have serious FOMO whenever I see my friends\' vacation photos.' },
  '13B': { correct: true,  reply: '✅ 答對了！\n👉 FOMO = Fear of Missing Out（錯失恐懼症）\n\n怕錯過別人正在經歷的有趣事物！相反詞是 JOMO（Joy of Missing Out）— 享受不參與的快樂。\n\n例句：I have serious FOMO whenever I see my friends\' vacation photos.\n\n👏 繼續下一題！' },
  '13C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 FOMO = Fear of Missing Out（錯失恐懼症）\n\nscreen time 是「螢幕使用時間」，FOMO 才是「怕錯過」的焦慮。\n\n例句：I have serious FOMO whenever I see my friends\' vacation photos.' },
  '13D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 FOMO = Fear of Missing Out（錯失恐懼症）\n\ndigital detox 是「數位排毒」，FOMO 是「怕錯過」的焦慮感。\n\n例句：I have serious FOMO whenever I see my friends\' vacation photos.' },

  // Q14 - 正確答案: D (digital detox)
  '14A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 digital detox = 數位排毒\n\ndoomscrolling 是「一直滑負面新聞」，digital detox 是「主動放下手機休息」。\n\n例句：I\'m going on a digital detox this weekend.' },
  '14B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 digital detox = 數位排毒\n\nFOMO 是「怕錯過」的焦慮，digital detox 是「主動不碰電子產品」來放鬆。\n\n例句：I\'m going on a digital detox this weekend.' },
  '14C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 digital detox = 數位排毒\n\nnomophobia 是「沒手機就恐慌」，digital detox 是「主動放下手機」。\n\n例句：I\'m going on a digital detox this weekend.' },
  '14D': { correct: true,  reply: '✅ 答對了！\n👉 digital detox = 數位排毒\n\n主動放下手機和電腦，讓自己休息！也可以說 phone detox 或 social media detox。\n\n例句：I\'m going on a digital detox this weekend.\n\n👏 最後一題！' },

  // Q15 - 正確答案: D (nomophobia)
  '15A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 nomophobia = 無手機恐懼症\n\ndoomscrolling 是「停不下來滑負面新聞」，nomophobia 是「沒手機就恐慌」。\n\n例句：I think I have nomophobia — I can\'t go anywhere without my phone.' },
  '15B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 nomophobia = 無手機恐懼症\n\ndigital detox 是「主動不用手機」，nomophobia 是「沒手機就焦慮」。\n\n例句：I think I have nomophobia — I can\'t go anywhere without my phone.' },
  '15C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 nomophobia = 無手機恐懼症\n\nFOMO 是「怕錯過」，nomophobia 是「沒有手機本身就感到恐懼」。\n\n例句：I think I have nomophobia — I can\'t go anywhere without my phone.' },
  '15D': { correct: true,  reply: '✅ 答對了！\n👉 nomophobia = 無手機恐懼症\n\nno + mo(bile) + phobia = nomophobia！出門忘帶手機就焦慮不安的你，可能就有 nomophobia！\n\n例句：I think I have nomophobia — I can\'t go anywhere without my phone.\n\n🎉 Week 3 測驗完成！你已經是 phone addiction 詞彙達人了！' },

  // ===== Week 4: Meeting People — ambivert / break the ice / come out of one's shell / culture shock / social butterfly =====

  // Q16 - 正確答案: C (ambivert)
  '16A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 ambivert = 中間型人格，既內向又外向\n\nextrovert 是完全外向的人，ambivert 是介於內向和外向之間。\n\n例句：I think I\'m an ambivert — I love parties but also need my alone time.' },
  '16B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 ambivert = 中間型人格，既內向又外向\n\nintrovert 是內向的人，ambivert 是兩種特質都有。\n\n例句：I think I\'m an ambivert — I love parties but also need my alone time.' },
  '16C': { correct: true,  reply: '✅ 答對了！\n👉 ambivert = 中間型人格，既內向又外向\n\nambi- 是拉丁字根，意思是「兩邊都」。大部分人其實都是 ambivert！\n\n例句：I think I\'m an ambivert — I love parties but also need my alone time.\n\n👏 繼續下一題！' },
  '16D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 ambivert = 中間型人格，既內向又外向\n\nwallflower 是「社交場合中安靜不引人注意的人」，跟 ambivert 不一樣喔。\n\n例句：I think I\'m an ambivert — I love parties but also need my alone time.' },

  // Q17 - 正確答案: B (break the ice)
  '17A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 break the ice = 打破僵局、破冰\n\nwarm up to someone 是「慢慢熟悉」，break the ice 是「主動打破尷尬」。\n\n例句：Let\'s play a game to break the ice!' },
  '17B': { correct: true,  reply: '✅ 答對了！\n👉 break the ice = 打破僵局、破冰\n\n在尷尬的場合講個笑話或帶個活動，就是 break the ice！\n\n例句：Let\'s play a game to break the ice!\n\n👏 繼續下一題！' },
  '17C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 break the ice = 打破僵局、破冰\n\nfind common ground 是「找到共同點」，break the ice 是「打破社交場合的尷尬」。\n\n例句：Let\'s play a game to break the ice!' },
  '17D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 break the ice = 打破僵局、破冰\n\ncome out of one\'s shell 是「不再害羞」，break the ice 是「主動讓大家放鬆」。\n\n例句：Let\'s play a game to break the ice!' },

  // Q18 - 正確答案: C (came out of his shell)
  '18A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 come out of one\'s shell = 敞開心房、不再害羞\n\nbreak the ice 是「打破僵局」，come out of one\'s shell 是「個人變得不再害羞」。\n\n例句：He came out of his shell after joining the drama club.' },
  '18B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 come out of one\'s shell = 敞開心房、不再害羞\n\nstep out of one\'s comfort zone 是「挑戰不熟悉的事」，come out of one\'s shell 更強調「從害羞變開朗」。\n\n例句：He came out of his shell after joining the drama club.' },
  '18C': { correct: true,  reply: '✅ 答對了！\n👉 come out of one\'s shell = 敞開心房、不再害羞\n\n想像一隻烏龜從殼裡探出頭來，就是這個片語的畫面！\n\n例句：He came out of his shell after joining the drama club.\n\n👏 繼續下一題！' },
  '18D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 come out of one\'s shell = 敞開心房、不再害羞\n\nfind common ground 是「找到共同點」，come out of one\'s shell 是「不再害羞退縮」。\n\n例句：He came out of his shell after joining the drama club.' },

  // Q19 - 正確答案: B (culture shock)
  '19A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 culture shock = 文化衝擊\n\ncommon ground 是「共同點」，culture shock 是「接觸不同文化時的震驚感」。\n\n例句：I experienced serious culture shock when I first moved to Japan.' },
  '19B': { correct: true,  reply: '✅ 答對了！\n👉 culture shock = 文化衝擊\n\n到一個全新的文化環境，感到困惑或焦慮，就是 culture shock！\n\n例句：I experienced serious culture shock when I first moved to Japan.\n\n👏 繼續下一題！' },
  '19C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 culture shock = 文化衝擊\n\nwallflower 是「社交場合中安靜的人」，culture shock 是「文化差異帶來的衝擊」。\n\n例句：I experienced serious culture shock when I first moved to Japan.' },
  '19D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 culture shock = 文化衝擊\n\ncomfort zone 是「舒適圈」，culture shock 是「體驗不同文化時的震驚感」。\n\n例句：I experienced serious culture shock when I first moved to Japan.' },

  // Q20 - 正確答案: D (social butterfly)
  '20A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 social butterfly = 社交達人\n\nwallflower 是相反的意思——安靜待在角落的人。social butterfly 像蝴蝶一樣在人群中飛來飛去！\n\n例句：Lisa is such a social butterfly — she knows everyone at school!' },
  '20B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 social butterfly = 社交達人\n\nintrovert 是「內向的人」，social butterfly 是超級愛社交的人！\n\n例句：Lisa is such a social butterfly — she knows everyone at school!' },
  '20C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 social butterfly = 社交達人\n\nambivert 是「中間型人格」，social butterfly 是「到處社交、認識所有人」的人！\n\n例句：Lisa is such a social butterfly — she knows everyone at school!' },
  '20D': { correct: true,  reply: '✅ 答對了！\n👉 social butterfly = 社交達人\n\n像蝴蝶一樣在人群中飛來飛去，到處跟人聊天！\n\n例句：Lisa is such a social butterfly — she knows everyone at school!\n\n🎉 Week 4 測驗完成！你已經是 meeting people 詞彙達人了！' },

  // ===== Week 5: Gym & Fitness — work out / sets & reps / No pain no gain / gym rat / get in shape =====

  // Q21 - 正確答案: C (work out)
  '21A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 work out = 運動、健身\n\nhit the gym 是「去健身房」，work out 泛指任何運動（在家也可以）。\n\n例句：I work out at home with YouTube videos.' },
  '21B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 work out = 運動、健身\n\ncool down 是「收操」，work out 才是「運動」。\n\n例句：I work out at home with YouTube videos.' },
  '21C': { correct: true,  reply: '✅ 答對了！\n👉 work out = 運動、健身\n\nwork out 泛指任何形式的運動，不一定要去健身房！\n\n例句：I work out at home with YouTube videos.\n\n👏 繼續下一題！' },
  '21D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 work out = 運動、健身\n\nskip leg day 是「跳過練腿日」，work out 才是「運動」。\n\n例句：I work out at home with YouTube videos.' },

  // Q22 - 正確答案: B (sets / reps)
  '22A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 Do 3 sets of 12 reps = 做 3 組，每組 12 下\n\n注意順序：先說幾「組」(sets)，再說每組幾「下」(reps)。\n\n例句：Try 3 sets of 10 reps with a 30-second rest.' },
  '22B': { correct: true,  reply: '✅ 答對了！\n👉 sets = 組數，reps = 次數\n\n健身房標準句型：Do 3 sets of 12 reps.（做 3 組，每組 12 下）\n\n例句：Try 3 sets of 10 reps with a 30-second rest.\n\n👏 繼續下一題！' },
  '22C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 Do 3 sets of 12 reps = 做 3 組，每組 12 下\n\nwarm-up / cool-down 是暖身和收操，不是這裡的意思。\n\n例句：Try 3 sets of 10 reps with a 30-second rest.' },
  '22D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 Do 3 sets of 12 reps = 做 3 組，每組 12 下\n\nrep 是 repetition（重複一次動作），set 是一組 reps。\n\n例句：Try 3 sets of 10 reps with a 30-second rest.' },

  // Q23 - 正確答案: C (No pain, no gain)
  '23A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 No pain, no gain = 沒有痛苦，就沒有收穫\n\nSkip leg day 是「跳過練腿日」，不是激勵語！\n\n例句：My legs are sore, but no pain, no gain!' },
  '23B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 No pain, no gain = 沒有痛苦，就沒有收穫\n\nLet yourself go 是「放任自己」，跟激勵完全相反！\n\n例句：My legs are sore, but no pain, no gain!' },
  '23C': { correct: true,  reply: '✅ 答對了！\n👉 No pain, no gain = 沒有痛苦，就沒有收穫\n\n健身房最經典的激勵語！不只用在運動，準備考試也很適合。\n\n例句：My legs are sore, but no pain, no gain!\n\n👏 繼續下一題！' },
  '23D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 No pain, no gain = 沒有痛苦，就沒有收穫\n\nCool down 是「收操」，不是激勵語。\n\n例句：My legs are sore, but no pain, no gain!' },

  // Q24 - 正確答案: B (gym rat)
  '24A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 gym rat = 健身狂、泡在健身房的人\n\nwallflower 是「社交場合安靜的人」，gym rat 是「健身房常客」。\n\n例句：He\'s a total gym rat — he goes to the gym six days a week!' },
  '24B': { correct: true,  reply: '✅ 答對了！\n👉 gym rat = 健身狂、泡在健身房的人\n\n像老鼠一樣天天窩在健身房，就是 gym rat！\n\n例句：He\'s a total gym rat — he goes to the gym six days a week!\n\n👏 繼續下一題！' },
  '24C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 gym rat = 健身狂、泡在健身房的人\n\nambivert 是「中間型人格」，gym rat 是「健身迷」。\n\n例句：He\'s a total gym rat — he goes to the gym six days a week!' },
  '24D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 gym rat = 健身狂、泡在健身房的人\n\nsocial butterfly 是「社交達人」，gym rat 是「健身房常客」。\n\n例句：He\'s a total gym rat — he goes to the gym six days a week!' },

  // Q25 - 正確答案: D (get in shape)
  '25A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 get in shape = 開始健身、讓身體變好\n\nlet myself go 是相反的意思——「放任自己不運動」。\n\n例句：I need to get in shape before summer!' },
  '25B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 get in shape = 開始健身、讓身體變好\n\nskip leg day 是「不練腿」，get in shape 是「開始鍛鍊身體」。\n\n例句：I need to get in shape before summer!' },
  '25C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 get in shape = 開始健身、讓身體變好\n\ncool down 是運動後的「收操」，get in shape 是「開始健身」。\n\n例句：I need to get in shape before summer!' },
  '25D': { correct: true,  reply: '✅ 答對了！\n👉 get in shape = 開始健身、讓身體變好\n\n暑假吃太多不運動，就需要 get in shape！跟 let oneself go 完全相反。\n\n例句：I need to get in shape before summer!\n\n🎉 Week 5 測驗完成！你已經是 gym & fitness 詞彙達人了！' },

  // ===== Week 6: Love Part 1 — have a crush on / shoot your shot / friend-zone / love at first sight / head over heels =====

  // Q26 - 正確答案: B (has a crush on)
  '26A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 have a crush on someone = 暗戀某人\n\n她從大一就喜歡他，卻從來沒說出口，就是在「暗戀」。\n\n例句：She\'s had a crush on him since freshman year.\n\n💡 love at first sight 是「一見鍾情」，但暗戀了好幾年不算一見鍾情喔！' },
  '26B': { correct: true,  reply: '✅ 答對了！\n👉 have a crush on someone = 暗戀某人\n\n從大一就默默喜歡卻不敢告白，這就是 have a crush on！crush 也可以當名詞用，例如 He\'s my crush.（他是我暗戀的對象）\n\n例句：She\'s had a crush on him since freshman year.\n\n👏 繼續下一題！' },
  '26C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 have a crush on someone = 暗戀某人\n\n她從大一就喜歡他，卻從來沒說出口，就是在「暗戀」。\n\n例句：She\'s had a crush on him since freshman year.\n\n💡 head over heels 是「深深愛上、神魂顛倒」，程度比 crush 更強喔！' },
  '26D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 have a crush on someone = 暗戀某人\n\n她從大一就喜歡他，卻從來沒說出口，就是在「暗戀」。\n\n例句：She\'s had a crush on him since freshman year.\n\n💡 shoot your shot 是「勇敢告白、放手一試」的意思喔！' },

  // Q27 - 正確答案: D (shoot your shot)
  '27A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 shoot your shot = 勇敢告白、放手一試\n\n「不試試看你永遠不會知道」，就是鼓勵你 shoot your shot！\n\n例句：Just shoot your shot — the worst she can say is no.\n\n💡 have a crush on 是「暗戀」，還沒有行動的階段喔！' },
  '27B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 shoot your shot = 勇敢告白、放手一試\n\n「不試試看你永遠不會知道」，就是鼓勵你 shoot your shot！\n\n例句：Just shoot your shot — the worst she can say is no.\n\n💡 friend-zone 是「被發好人卡」，是告白失敗的結果喔！' },
  '27C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 shoot your shot = 勇敢告白、放手一試\n\n「不試試看你永遠不會知道」，就是鼓勵你 shoot your shot！\n\n例句：Just shoot your shot — the worst she can say is no.\n\n💡 head over heels 是「深深愛上」的意思喔！' },
  '27D': { correct: true,  reply: '✅ 答對了！\n👉 shoot your shot = 勇敢告白、放手一試\n\n這個片語來自籃球——不投籃就永遠不會進球！用在感情上就是「勇敢去告白」。\n\n例句：Just shoot your shot — the worst she can say is no.\n\n👏 繼續下一題！' },

  // Q28 - 正確答案: C (friend-zoned)
  '28A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 friend-zone = 被發好人卡\n\n她說「你就像我的哥哥一樣」，就是被 friend-zoned 了！\n\n例句：I asked her out but she friend-zoned me.\n\n💡 have a crush on 是「暗戀」，還沒到告白被拒的階段喔！' },
  '28B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 friend-zone = 被發好人卡\n\n她說「你就像我的哥哥一樣」，就是被 friend-zoned 了！\n\n例句：I asked her out but she friend-zoned me.\n\n💡 shoot your shot 是「勇敢告白」，而 friend-zone 是告白後被拒的結果！' },
  '28C': { correct: true,  reply: '✅ 答對了！\n👉 friend-zone = 被發好人卡\n\n當對方說「你就像我哥哥」或「我們當朋友就好」，你就被 friend-zoned 了！friend-zone 也可以當動詞用。\n\n例句：I asked her out but she friend-zoned me.\n\n👏 繼續下一題！' },
  '28D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 friend-zone = 被發好人卡\n\n她說「你就像我的哥哥一樣」，就是被 friend-zoned 了！\n\n例句：I asked her out but she friend-zoned me.\n\n💡 love at first sight 是「一見鍾情」，跟被發好人卡完全不同喔！' },

  // Q29 - 正確答案: C (love at first sight)
  '29A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 love at first sight = 一見鍾情\n\n爺爺奶奶在舞會上認識，馬上就墜入愛河，這就是一見鍾情！\n\n例句：My grandparents say it was love at first sight.\n\n💡 have a crush on 是「暗戀」，通常需要一段時間的喜歡喔！' },
  '29B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 love at first sight = 一見鍾情\n\n爺爺奶奶在舞會上認識，馬上就墜入愛河，這就是一見鍾情！\n\n例句：My grandparents say it was love at first sight.\n\n💡 head over heels 是「深深愛上」，但不一定是第一次見面就愛上喔！' },
  '29C': { correct: true,  reply: '✅ 答對了！\n👉 love at first sight = 一見鍾情\n\n在舞會上一眼就愛上，這就是 love at first sight 的浪漫故事！\n\n例句：My grandparents say it was love at first sight.\n\n👏 繼續下一題！' },
  '29D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 love at first sight = 一見鍾情\n\n爺爺奶奶在舞會上認識，馬上就墜入愛河，這就是一見鍾情！\n\n例句：My grandparents say it was love at first sight.\n\n💡 shoot your shot 是「勇敢告白」，不是描述墜入愛河的感覺喔！' },

  // Q30 - 正確答案: C (head over heels)
  '30A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 head over heels = 深深愛上、神魂顛倒\n\n整天想著她、完全無法專心，就是 head over heels！\n\n例句：He\'s head over heels in love with her.\n\n💡 have a crush on 是「暗戀」，程度沒有 head over heels 那麼強烈喔！' },
  '30B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 head over heels = 深深愛上、神魂顛倒\n\n整天想著她、完全無法專心，就是 head over heels！\n\n例句：He\'s head over heels in love with her.\n\n💡 love at first sight 是「一見鍾情」，head over heels 強調的是愛得很深的狀態！' },
  '30C': { correct: true,  reply: '✅ 答對了！\n👉 head over heels = 深深愛上、神魂顛倒\n\n想像一個人愛到頭下腳上、天旋地轉的感覺！整天想著對方，就是 head over heels in love。\n\n例句：He\'s head over heels in love with her.\n\n🎉 Week 6 測驗完成！你已經是 love 詞彙達人了！' },
  '30D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 head over heels = 深深愛上、神魂顛倒\n\n整天想著她、完全無法專心，就是 head over heels！\n\n例句：He\'s head over heels in love with her.\n\n💡 friend-zone 是「被發好人卡」，跟深深愛上完全不同喔！' },

  // ===== Week 7: Love Part 2 — going steady / give the cold shoulder / red flag / two-timing / tie the knot =====

  // Q31 - 正確答案: B (going steady)
  '31A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 going steady = 穩定交往中\n\n交往兩年了，就是在 going steady！\n\n例句：They\'ve been going steady for two years now.\n\n💡 tie the knot 是「結婚」，going steady 是交往但還沒結婚喔！' },
  '31B': { correct: true,  reply: '✅ 答對了！\n👉 going steady = 穩定交往中\n\n兩個人穩定交往、專一地在一起，就是 going steady。雖然有點復古，但現在還是很常用！\n\n例句：They\'ve been going steady for two years now.\n\n👏 繼續下一題！' },
  '31C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 going steady = 穩定交往中\n\n交往兩年了，就是在 going steady！\n\n例句：They\'ve been going steady for two years now.\n\n💡 two-timing 是「劈腿、腳踏兩條船」，跟穩定交往完全相反喔！' },
  '31D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 going steady = 穩定交往中\n\n交往兩年了，就是在 going steady！\n\n例句：They\'ve been going steady for two years now.\n\n💡 give the cold shoulder 是「冷落某人」，不是在描述交往狀態喔！' },

  // Q32 - 正確答案: C (giving him the cold shoulder)
  '32A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 give someone the cold shoulder = 冷落某人、不理某人\n\n吵架後三天不說話，就是在 giving him the cold shoulder！\n\n例句：She\'s been giving him the cold shoulder since their fight.\n\n💡 red flag 是「危險警訊」，cold shoulder 是「冷戰、不理人」喔！' },
  '32B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 give someone the cold shoulder = 冷落某人、不理某人\n\n吵架後三天不說話，就是在 giving him the cold shoulder！\n\n例句：She\'s been giving him the cold shoulder since their fight.\n\n💡 two-timing 是「劈腿」，cold shoulder 是「故意不理人」喔！' },
  '32C': { correct: true,  reply: '✅ 答對了！\n👉 give someone the cold shoulder = 冷落某人、不理某人\n\n想像別人只給你看冰冷的肩膀，不正面面對你——就是故意不理你的意思！\n\n例句：She\'s been giving him the cold shoulder since their fight.\n\n👏 繼續下一題！' },
  '32D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 give someone the cold shoulder = 冷落某人、不理某人\n\n吵架後三天不說話，就是在 giving him the cold shoulder！\n\n例句：She\'s been giving him the cold shoulder since their fight.\n\n💡 going steady 是「穩定交往」，cold shoulder 是吵架後「冷戰」喔！' },

  // Q33 - 正確答案: C (red flag)
  '33A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 red flag = 危險警訊、警告信號\n\n每天檢查對方手機還會生氣，這就是感情中的 red flag！\n\n例句：Checking your partner\'s phone every day is a major red flag.\n\n💡 give the cold shoulder 是「冷落某人」，red flag 是「危險警訊」喔！' },
  '33B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 red flag = 危險警訊、警告信號\n\n每天檢查對方手機還會生氣，這就是感情中的 red flag！\n\n例句：Checking your partner\'s phone every day is a major red flag.\n\n💡 two-timing 是「劈腿」，red flag 是用來描述「不健康的警訊」喔！' },
  '33C': { correct: true,  reply: '✅ 答對了！\n👉 red flag = 危險警訊、警告信號\n\n紅旗在賽車中代表「危險！停下來！」。在感情中，red flag 就是「這段關係有問題」的警訊。\n\n例句：Checking your partner\'s phone every day is a major red flag.\n\n👏 繼續下一題！' },
  '33D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 red flag = 危險警訊、警告信號\n\n每天檢查對方手機還會生氣，這就是感情中的 red flag！\n\n例句：Checking your partner\'s phone every day is a major red flag.\n\n💡 tie the knot 是「結婚」，跟危險警訊完全不同喔！' },

  // Q34 - 正確答案: D (two-timing)
  '34A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 two-timing = 劈腿、腳踏兩條船\n\n偷偷跟另一個女生交往，就是在 two-timing！\n\n例句：She found out he was two-timing her with another girl.\n\n💡 going steady 是「穩定交往」，two-timing 是「不忠、劈腿」喔！' },
  '34B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 two-timing = 劈腿、腳踏兩條船\n\n偷偷跟另一個女生交往，就是在 two-timing！\n\n例句：She found out he was two-timing her with another girl.\n\n💡 red flag 是「危險警訊」，two-timing 是具體的「劈腿行為」喔！' },
  '34C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 two-timing = 劈腿、腳踏兩條船\n\n偷偷跟另一個女生交往，就是在 two-timing！\n\n例句：She found out he was two-timing her with another girl.\n\n💡 give the cold shoulder 是「冷落某人」，two-timing 是「同時跟兩個人交往」喔！' },
  '34D': { correct: true,  reply: '✅ 答對了！\n👉 two-timing = 劈腿、腳踏兩條船\n\ntwo-timing 就是同時跟兩個人交往，背著另一半偷吃！也可以說 cheat on someone。\n\n例句：She found out he was two-timing her with another girl.\n\n👏 繼續最後一題！' },

  // Q35 - 正確答案: C (tied the knot)
  '35A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 tie the knot = 結婚\n\n交往五年後終於結婚了，就是 tied the knot！\n\n例句：After dating for five years, they finally tied the knot.\n\n💡 going steady 是「穩定交往」，tie the knot 是正式「結婚」喔！' },
  '35B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 tie the knot = 結婚\n\n交往五年後終於結婚了，就是 tied the knot！\n\n例句：After dating for five years, they finally tied the knot.\n\n💡 head over heels 是「深深愛上」，tie the knot 是「結婚」喔！' },
  '35C': { correct: true,  reply: '✅ 答對了！\n👉 tie the knot = 結婚\n\n這個片語來自古代婚禮中「打結」的儀式，象徵兩人緊緊結合在一起！\n\n例句：After dating for five years, they finally tied the knot.\n\n🎉 Week 7 測驗完成！你已經是 love 詞彙達人了！' },
  '35D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 tie the knot = 結婚\n\n交往五年後終於結婚了，就是 tied the knot！\n\n例句：After dating for five years, they finally tied the knot.\n\n💡 two-timing 是「劈腿」，跟結婚完全不同喔！' },

  // ===== Week 8: Work & Problem Solving — back to square one / pull one's weight / think outside the box / up in the air / call the shots =====

  // Q36 - 正確答案: C (back to square one)
  '36A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 back to square one = 回到原點、從頭再來\n\n實驗失敗了，只能「從頭開始」。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '36B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 back to square one = 回到原點、從頭再來\n\n實驗失敗了，只能「從頭開始」。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },
  '36C': { correct: true,  reply: '✅ 答對了！\n👉 back to square one = 回到原點、從頭再來\n\n像桌遊被退回起點一樣！實驗失敗了，只能重新來過。\n\n例句：The experiment failed, so we\'re back to square one.\n\n👏 繼續下一題！' },
  '36D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 back to square one = 回到原點、從頭再來\n\n實驗失敗了，只能「從頭開始」。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 up in the air 是「懸而未決」的意思喔！' },

  // Q37 - 正確答案: B (pulling his weight)
  '37A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 pull one\'s weight = 盡自己的本分、分擔責任\n\n大家都在努力，只有 Tom 沒在做事，就是沒有 pulling his weight。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },
  '37B': { correct: true,  reply: '✅ 答對了！\n👉 pull one\'s weight = 盡自己的本分、分擔責任\n\n想像一起拉繩子，每個人都要出力！大家都在努力，只有 Tom 沒盡到本分。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n👏 繼續下一題！' },
  '37C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 pull one\'s weight = 盡自己的本分、分擔責任\n\n大家都在努力，只有 Tom 沒在做事，就是沒有 pulling his weight。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '37D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 pull one\'s weight = 盡自己的本分、分擔責任\n\n大家都在努力，只有 Tom 沒在做事，就是沒有 pulling his weight。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 back to square one 是「回到原點」的意思喔！' },

  // Q38 - 正確答案: C (think outside the box)
  '38A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box = 跳脫框架思考、創意思考\n\n需要有創意的解決方案，就是要 think outside the box！\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '38B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box = 跳脫框架思考、創意思考\n\n需要有創意的解決方案，就是要 think outside the box！\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 back to square one 是「回到原點」的意思喔！' },
  '38C': { correct: true,  reply: '✅ 答對了！\n👉 think outside the box = 跳脫框架思考、創意思考\n\n跳出那個「盒子」，才能看到新的可能性！需要創意解法的時候就用這個片語。\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n👏 繼續下一題！' },
  '38D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box = 跳脫框架思考、創意思考\n\n需要有創意的解決方案，就是要 think outside the box！\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },

  // Q39 - 正確答案: D (up in the air)
  '39A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 up in the air = 懸而未決、還沒確定\n\n校外教學還沒決定要不要辦，就是 up in the air！\n\n例句：My travel plans are still up in the air.\n\n💡 back to square one 是「回到原點」，是已經確定失敗了喔！' },
  '39B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 up in the air = 懸而未決、還沒確定\n\n校外教學還沒決定要不要辦，就是 up in the air！\n\n例句：My travel plans are still up in the air.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '39C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 up in the air = 懸而未決、還沒確定\n\n校外教學還沒決定要不要辦，就是 up in the air！\n\n例句：My travel plans are still up in the air.\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },
  '39D': { correct: true,  reply: '✅ 答對了！\n👉 up in the air = 懸而未決、還沒確定\n\n想像事情還「飄在空中」，沒有落地定下來。校外教學辦不辦還不知道！\n\n例句：My travel plans are still up in the air.\n\n👏 繼續最後一題！' },

  // Q40 - 正確答案: B (calls the shots)
  '40A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call the shots = 做主、發號施令\n\n隊長決定戰術策略，就是在 calling the shots！\n\n例句：Who calls the shots around here?\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },
  '40B': { correct: true,  reply: '✅ 答對了！\n👉 call the shots = 做主、發號施令、拍板定案\n\n這個片語源自射擊運動，由一個人「喊靶」決定打哪裡！隊長決定戰術，就是在 calling the shots。\n\n例句：Who calls the shots around here?\n\n🎉 Week 8 測驗完成！你已經是 work & problem solving 詞彙達人了！' },
  '40C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call the shots = 做主、發號施令\n\n隊長決定戰術策略，就是在 calling the shots！\n\n例句：Who calls the shots around here?\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },
  '40D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call the shots = 做主、發號施令\n\n隊長決定戰術策略，就是在 calling the shots！\n\n例句：Who calls the shots around here?\n\n💡 up in the air 是「懸而未決」的意思喔！' },

  // ===== Week 9: Growth & Mindset — step out of comfort zone / the bigger picture / take with a grain of salt / turn over a new leaf / broaden one's horizons =====

  // Q41 - 正確答案: B (step out of comfort zone)
  '41A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone = 跨出舒適圈\n\n雖然很怕上台演講，但還是報名了比賽，就是在「跨出舒適圈」！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 turn over a new leaf 是「重新開始、改過自新」的意思喔！' },
  '41B': { correct: true,  reply: '✅ 答對了！\n👉 step out of one\'s comfort zone = 跨出舒適圈\n\n成長往往在不舒服的地方發生！怕上台演講卻勇敢報名比賽，就是最好的例子。\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n👏 繼續下一題！' },
  '41C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone = 跨出舒適圈\n\n雖然很怕上台演講，但還是報名了比賽，就是在「跨出舒適圈」！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 the bigger picture 是「大局、全貌」的意思喔！' },
  '41D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone = 跨出舒適圈\n\n雖然很怕上台演講，但還是報名了比賽，就是在「跨出舒適圈」！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },

  // Q42 - 正確答案: A (the bigger picture)
  '42A': { correct: true,  reply: '✅ 答對了！\n👉 the bigger picture = 大局、全貌\n\n一次考差沒關係，「看大局」的話，這學期進步超多！不要因為一次小失敗就灰心。\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n👏 繼續下一題！' },
  '42B': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture = 大局、全貌\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },
  '42C': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture = 大局、全貌\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！' },
  '42D': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture = 大局、全貌\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 step out of one\'s comfort zone 是「跨出舒適圈」的意思喔！' },

  // Q43 - 正確答案: C (take with a grain of salt)
  '43A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt = 半信半疑、聽聽就好\n\n他說自己 100 公尺跑 10 秒，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 broaden one\'s horizons 是「拓展視野」的意思喔！' },
  '43B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt = 半信半疑、聽聽就好\n\n他說自己 100 公尺跑 10 秒，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！' },
  '43C': { correct: true,  reply: '✅ 答對了！\n👉 take something with a grain of salt = 半信半疑、聽聽就好\n\n想像在食物上只撒一小粒鹽——只接受一點點就好！他說 100 公尺跑 10 秒？嗯⋯聽聽就好。\n\n例句：Online reviews should be taken with a grain of salt.\n\n👏 繼續下一題！' },
  '43D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt = 半信半疑、聽聽就好\n\n他說自己 100 公尺跑 10 秒，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 step out of one\'s comfort zone 是「跨出舒適圈」的意思喔！' },

  // Q44 - 正確答案: C (turn over a new leaf)
  '44A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 turn over a new leaf = 翻開新的一頁、重新開始\n\n之前惹了麻煩，現在保證要好好念書，就是「重新做人」！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },
  '44B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 turn over a new leaf = 翻開新的一頁、重新開始\n\n之前惹了麻煩，現在保證要好好念書，就是「重新做人」！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 the bigger picture 是「大局、全貌」的意思喔！' },
  '44C': { correct: true,  reply: '✅ 答對了！\n👉 turn over a new leaf = 翻開新的一頁、重新開始\n\n這裡的 leaf 指的是書頁，翻到新的一頁，全新的開始！之前惹了麻煩，現在決定好好念書。\n\n例句：New Year is a great time to turn over a new leaf.\n\n👏 繼續最後一題！' },
  '44D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 turn over a new leaf = 翻開新的一頁、重新開始\n\n之前惹了麻煩，現在保證要好好念書，就是「重新做人」！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 broaden one\'s horizons 是「拓展視野」的意思喔！' },

  // Q45 - 正確答案: D (broaden her horizons)
  '45A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 broaden one\'s horizons = 拓展視野\n\n出國旅行讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！' },
  '45B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 broaden one\'s horizons = 拓展視野\n\n出國旅行讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 the bigger picture 是「大局、全貌」的意思喔！' },
  '45C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 broaden one\'s horizons = 拓展視野\n\n出國旅行讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },
  '45D': { correct: true,  reply: '✅ 答對了！\n👉 broaden one\'s horizons = 拓展視野\n\n出國旅行讓你看到不同的世界，視野變得更開闊！\n\n例句：Reading books from different countries can broaden your horizons.\n\n🎉 Week 9 測驗完成！你已經是 growth & mindset 詞彙達人了！' },

  // ===== Week 10: Travel & Culture =====

  // Q46 - 正確答案: B (jet lag)
  '46A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 jet lag = 時差（疲倦感）\n\n剛從東京回來累爆，就是「時差還沒調過來」。\n\n例句：I always have jet lag for a few days after a long flight.\n\n💡 wanderlust 是「渴望旅行」的意思喔！' },
  '46B': { correct: true,  reply: '✅ 答對了！\n👉 jet lag = 時差導致的疲倦感\n\n長途飛行後身體還沒調整時區，就是 jet lag。\n\n例句：I always have jet lag for a few days after a long flight.\n\n👏 繼續下一題！' },
  '46C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 jet lag = 時差（疲倦感）\n\n剛從東京回來累爆，就是「時差還沒調過來」。\n\n例句：I always have jet lag for a few days after a long flight.\n\n💡 itchy feet 是「想出去走走」的意思喔！' },
  '46D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 jet lag = 時差（疲倦感）\n\n剛從東京回來累爆，就是「時差還沒調過來」。\n\n例句：I always have jet lag for a few days after a long flight.\n\n💡 tourist trap 是「坑觀光客的地方」的意思喔！' },

  // Q47 - 正確答案: C (off the beaten path)
  '47A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 off the beaten path = 人煙稀少的地方、私房景點\n\n避開觀光人潮，找到一間安靜的小咖啡店。\n\n例句：The best restaurants are often off the beaten path.\n\n💡 when in Rome 是「入境隨俗」的意思喔！' },
  '47B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 off the beaten path = 人煙稀少的地方、私房景點\n\n避開觀光人潮，找到一間安靜的小咖啡店。\n\n例句：The best restaurants are often off the beaten path.\n\n💡 tourist trap 剛好相反，是「坑觀光客的景點」喔！' },
  '47C': { correct: true,  reply: '✅ 答對了！\n👉 off the beaten path = 人煙稀少、私房景點\n\nbeaten path 是「被踩過的路」（觀光客都走的路），off 就是「離開」那條路！\n\n例句：The best restaurants are often off the beaten path.\n\n👏 繼續下一題！' },
  '47D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 off the beaten path = 人煙稀少的地方、私房景點\n\n避開觀光人潮，找到一間安靜的小咖啡店。\n\n例句：The best restaurants are often off the beaten path.\n\n💡 itchy feet 是「想出去走走」的意思喔！' },

  // Q48 - 正確答案: B (when in Rome)
  '48A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 when in Rome = 入境隨俗\n\n通常不吃蝸牛，但既然來法國就試試看，「入境隨俗嘛」！\n\n例句：I don\'t usually drink coffee, but when in Rome!\n\n💡 miss the boat 是「錯失良機」的意思喔！' },
  '48B': { correct: true,  reply: '✅ 答對了！\n👉 when in Rome = 入境隨俗\n\n完整版是 "When in Rome, do as the Romans do."（在羅馬就要學羅馬人）。出國嘗試當地特色就用這句！\n\n例句：I don\'t usually drink coffee, but when in Rome!\n\n👏 繼續下一題！' },
  '48C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 when in Rome = 入境隨俗\n\n通常不吃蝸牛，但既然來法國就試試看，「入境隨俗嘛」！\n\n例句：I don\'t usually drink coffee, but when in Rome!\n\n💡 tourist trap 是「坑觀光客的景點」的意思喔！' },
  '48D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 when in Rome = 入境隨俗\n\n通常不吃蝸牛，但既然來法國就試試看，「入境隨俗嘛」！\n\n例句：I don\'t usually drink coffee, but when in Rome!\n\n💡 itchy feet 是「想出去走走」的意思喔！' },

  // Q49 - 正確答案: D (missed the boat)
  '49A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 miss the boat = 錯失良機\n\n早鳥優惠昨天就結束了，等太久就「錯過了」！\n\n例句：If you don\'t apply now, you\'ll miss the boat.\n\n💡 catch a flight 是「趕上飛機」的意思喔！' },
  '49B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 miss the boat = 錯失良機\n\n早鳥優惠昨天就結束了，等太久就「錯過了」！\n\n例句：If you don\'t apply now, you\'ll miss the boat.\n\n💡 book a flight 是「訂機票」的意思喔！' },
  '49C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 miss the boat = 錯失良機\n\n早鳥優惠昨天就結束了，等太久就「錯過了」！\n\n例句：If you don\'t apply now, you\'ll miss the boat.\n\n💡 jet lag 是「時差疲倦」的意思喔！' },
  '49D': { correct: true,  reply: '✅ 答對了！\n👉 miss the boat = 錯失良機\n\n字面是「錯過船」，比喻「錯過機會」。等太久優惠就沒了！\n\n例句：If you don\'t apply now, you\'ll miss the boat.\n\n👏 繼續下一題！' },

  // Q50 - 正確答案: C (itchy feet)
  '50A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 itchy feet = 想出去走走、坐不住\n\n在同一家公司待十年，就會「腳癢」想去外面闖闖！\n\n例句：After five years here, I\'m getting itchy feet.\n\n💡 jet lag 是「時差疲倦」的意思喔！' },
  '50B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 itchy feet = 想出去走走、坐不住\n\n在同一家公司待十年，就會「腳癢」想去外面闖闖！\n\n例句：After five years here, I\'m getting itchy feet.\n\n💡 tourist trap 是「坑觀光客的景點」的意思喔！' },
  '50C': { correct: true,  reply: '✅ 答對了！\n👉 itchy feet = 想出去走走、想換環境\n\n字面是「腳癢」，畫面感超強——癢到坐不住，想往外跑！\n\n例句：After five years here, I\'m getting itchy feet.\n\n🎉 Week 10 測驗完成！恭喜你又學會 5 個旅行片語！' },
  '50D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 itchy feet = 想出去走走、坐不住\n\n在同一家公司待十年，就會「腳癢」想去外面闖闖！\n\n例句：After five years here, I\'m getting itchy feet.\n\n💡 off the beaten path 是「人煙稀少的地方」的意思喔！' },

  // ===== Week 11: Job Interview & Career =====

  // Q51 - 正確答案: B (landed a job)
  '51A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 land a job = 成功找到工作\n\n面試了好幾個月，終於拿到頂尖科技公司的 offer！\n\n例句：She finally landed a job at Google after 20 interviews.\n\n💡 burn out 是「過勞」的意思喔！' },
  '51B': { correct: true,  reply: '✅ 答對了！\n👉 land a job = 成功找到工作\n\nland 當動詞有「成功獲得」的意思，比 get 更有「努力後拿到」的感覺！\n\n例句：She finally landed a job at Google after 20 interviews.\n\n👏 繼續下一題！' },
  '51C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 land a job = 成功找到工作\n\n面試了好幾個月，終於拿到頂尖科技公司的 offer！\n\n例句：She finally landed a job at Google after 20 interviews.\n\n💡 call it a day 是「今天收工」的意思喔！' },
  '51D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 land a job = 成功找到工作\n\n面試了好幾個月，終於拿到頂尖科技公司的 offer！\n\n例句：She finally landed a job at Google after 20 interviews.\n\n💡 climb the ladder 是「步步高升」的意思喔！' },

  // Q52 - 正確答案: B (on the same page)
  '52A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on the same page = 想法一致、達成共識\n\n會議前確認大家「想法一致」最重要！\n\n例句：Let\'s make sure we\'re on the same page before the meeting.\n\n💡 in the loop 是「掌握最新消息」，強調資訊同步喔！' },
  '52B': { correct: true,  reply: '✅ 答對了！\n👉 on the same page = 想法一致、達成共識\n\n字面是「在同一頁」，比喻「在同一個理解上」。職場超常用！\n\n例句：Let\'s make sure we\'re on the same page before the meeting.\n\n👏 繼續下一題！' },
  '52C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on the same page = 想法一致、達成共識\n\n會議前確認大家「想法一致」最重要！\n\n例句：Let\'s make sure we\'re on the same page before the meeting.\n\n💡 above and beyond 是「超越本分」的意思喔！' },
  '52D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on the same page = 想法一致、達成共識\n\n會議前確認大家「想法一致」最重要！\n\n例句：Let\'s make sure we\'re on the same page before the meeting.\n\n💡 take initiative 是「主動出擊」的意思喔！' },

  // Q53 - 正確答案: C (took initiative)
  '53A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take initiative = 主動採取行動\n\n不等指示就自己動手解決，就是「主動出擊」！\n\n例句：Good employees take initiative without being told.\n\n💡 burn out 是「過勞」的意思喔！' },
  '53B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take initiative = 主動採取行動\n\n不等指示就自己動手解決，就是「主動出擊」！\n\n例句：Good employees take initiative without being told.\n\n💡 call it a day 是「今天收工」的意思喔！' },
  '53C': { correct: true,  reply: '✅ 答對了！\n👉 take initiative = 主動採取行動\n\ninitiative 是「主動性、主動權」，take initiative 就是「自己想到就去做」。面試超加分！\n\n例句：Good employees take initiative without being told.\n\n👏 繼續下一題！' },
  '53D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take initiative = 主動採取行動\n\n不等指示就自己動手解決，就是「主動出擊」！\n\n例句：Good employees take initiative without being told.\n\n💡 fall behind 是「進度落後」的意思喔！' },

  // Q54 - 正確答案: D (climbed the corporate ladder)
  '54A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 climb the corporate ladder = 步步高升\n\n從實習生爬到 CEO，就是經典的「在公司爬升」！\n\n例句：He spent 20 years climbing the corporate ladder.\n\n💡 burn out 是「過勞」的意思喔！' },
  '54B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 climb the corporate ladder = 步步高升\n\n從實習生爬到 CEO，就是經典的「在公司爬升」！\n\n例句：He spent 20 years climbing the corporate ladder.\n\n💡 call it a day 是「今天收工」的意思喔！' },
  '54C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 climb the corporate ladder = 步步高升\n\n從實習生爬到 CEO，就是經典的「在公司爬升」！\n\n例句：He spent 20 years climbing the corporate ladder.\n\n💡 lose one\'s cool 是「失控發脾氣」的意思喔！' },
  '54D': { correct: true,  reply: '✅ 答對了！\n👉 climb the corporate ladder = 步步高升\n\ncorporate ladder 是「公司的梯子」，比喻職場層級。一階一階往上爬！\n\n例句：He spent 20 years climbing the corporate ladder.\n\n👏 繼續下一題！' },

  // Q55 - 正確答案: B (call it a day)
  '55A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call it a day = 今天就到這裡、收工\n\n從早上 8 點工作到晚上 8 點，是時候「收工」了！\n\n例句：It\'s getting late — let\'s call it a day.\n\n💡 take initiative 是「主動出擊」的意思喔！' },
  '55B': { correct: true,  reply: '✅ 答對了！\n👉 call it a day = 今天就到這裡、收工\n\n字面是「把今天叫做一天」（夠了），意思是「今天就工作到這吧」。晚上的話可以說 call it a night。\n\n例句：It\'s getting late — let\'s call it a day.\n\n🎉 Week 11 測驗完成！職場英文你已經很熟啦！' },
  '55C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call it a day = 今天就到這裡、收工\n\n從早上 8 點工作到晚上 8 點，是時候「收工」了！\n\n例句：It\'s getting late — let\'s call it a day.\n\n💡 land a job 是「成功找到工作」的意思喔！' },
  '55D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 call it a day = 今天就到這裡、收工\n\n從早上 8 點工作到晚上 8 點，是時候「收工」了！\n\n例句：It\'s getting late — let\'s call it a day.\n\n💡 go above and beyond 是「超越本分」的意思喔！' },

  // ===== Week 12: Food & Eating =====

  // Q56 - 正確答案: B (a piece of cake)
  '56A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a piece of cake = 小菜一碟、非常容易\n\n對你這種人來說，這個簡報「超簡單」啦！\n\n例句：The math test was a piece of cake.\n\n💡 a tough cookie 是「堅強的人、不好對付的人」的意思喔！' },
  '56B': { correct: true,  reply: '✅ 答對了！\n👉 a piece of cake = 小菜一碟、非常容易\n\n蛋糕軟好咬→簡單，畫面感超強！\n\n例句：The math test was a piece of cake.\n\n👏 繼續下一題！' },
  '56C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a piece of cake = 小菜一碟、非常容易\n\n對你這種人來說，這個簡報「超簡單」啦！\n\n例句：The math test was a piece of cake.\n\n💡 food coma 是「吃飽想睡」的意思喔！' },
  '56D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a piece of cake = 小菜一碟、非常容易\n\n對你這種人來說，這個簡報「超簡單」啦！\n\n例句：The math test was a piece of cake.\n\n💡 spill the beans 是「洩漏祕密」的意思喔！' },

  // Q57 - 正確答案: C (food coma)
  '57A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 food coma = 吃飽想睡、飯後昏沉\n\n吃了三盤義大利麵，馬上「飯後昏沉」倒在沙發上！\n\n例句：After Thanksgiving dinner, I went into a food coma.\n\n💡 a piece of cake 是「小菜一碟」的意思喔！' },
  '57B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 food coma = 吃飽想睡、飯後昏沉\n\n吃了三盤義大利麵，馬上「飯後昏沉」倒在沙發上！\n\n例句：After Thanksgiving dinner, I went into a food coma.\n\n💡 a tough cookie 是「堅強的人」的意思喔！' },
  '57C': { correct: true,  reply: '✅ 答對了！\n👉 food coma = 吃飽想睡、飯後昏沉\n\ncoma 原意「昏迷」，food coma 是用誇飾法形容「飯後超想睡」！\n\n例句：After Thanksgiving dinner, I went into a food coma.\n\n👏 繼續下一題！' },
  '57D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 food coma = 吃飽想睡、飯後昏沉\n\n吃了三盤義大利麵，馬上「飯後昏沉」倒在沙發上！\n\n例句：After Thanksgiving dinner, I went into a food coma.\n\n💡 in a nutshell 是「簡單來說」的意思喔！' },

  // Q58 - 正確答案: B (eats like a horse)
  '58A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 eat like a horse = 食量很大\n\n午餐吃三個漢堡，這就是「食量很大」！\n\n例句：He\'s skinny but eats like a horse.\n\n💡 eat like a bird 剛好相反，是「食量很小」喔！' },
  '58B': { correct: true,  reply: '✅ 答對了！\n👉 eat like a horse = 食量很大、超會吃\n\n馬大、鳥小，這個比喻超直覺！注意要用 LIKE，不能省略。\n\n例句：He\'s skinny but eats like a horse.\n\n👏 繼續下一題！' },
  '58C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 eat like a horse = 食量很大\n\n午餐吃三個漢堡，這就是「食量很大」！\n\n例句：He\'s skinny but eats like a horse.\n\n💡 stuffed 是「吃太飽」（一次性的狀態），題目說「正常情況」喔！' },
  '58D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 eat like a horse = 食量很大\n\n午餐吃三個漢堡，這就是「食量很大」！\n\n例句：He\'s skinny but eats like a horse.\n\n💡 a tough cookie 是「堅強的人」的意思喔！' },

  // Q59 - 正確答案: B (brings home the bacon)
  '59A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 bring home the bacon = 賺錢養家\n\n先生出意外後，她變成唯一「賺錢養家」的人。\n\n例句：My mom brings home the bacon while my dad takes care of us.\n\n💡 eat like a horse 是「食量很大」的意思喔！' },
  '59B': { correct: true,  reply: '✅ 答對了！\n👉 bring home the bacon = 賺錢養家\n\n以前 bacon 是珍貴的肉，能把它帶回家就是養家！類似的還有 breadwinner（家中經濟支柱）。\n\n例句：My mom brings home the bacon while my dad takes care of us.\n\n👏 繼續下一題！' },
  '59C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 bring home the bacon = 賺錢養家\n\n先生出意外後，她變成唯一「賺錢養家」的人。\n\n例句：My mom brings home the bacon while my dad takes care of us.\n\n💡 spill the beans 是「洩漏祕密」的意思喔！' },
  '59D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 bring home the bacon = 賺錢養家\n\n先生出意外後，她變成唯一「賺錢養家」的人。\n\n例句：My mom brings home the bacon while my dad takes care of us.\n\n💡 a piece of cake 是「小菜一碟」的意思喔！' },

  // Q60 - 正確答案: B (spill the beans)
  '60A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 spill the beans = 洩漏祕密、爆料\n\n驚喜派對的事「不要說出去」喔！\n\n例句：Don\'t spill the beans about the surprise party!\n\n💡 eat like a bird 是「食量很小」的意思喔！' },
  '60B': { correct: true,  reply: '✅ 答對了！\n👉 spill the beans = 洩漏祕密、爆料\n\n字面是「打翻豆子」，比喻「不小心說出秘密」。畫面感超強！\n\n例句：Don\'t spill the beans about the surprise party!\n\n👏 繼續下一題！' },
  '60C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 spill the beans = 洩漏祕密、爆料\n\n驚喜派對的事「不要說出去」喔！\n\n例句：Don\'t spill the beans about the surprise party!\n\n💡 break the bank 是「花光積蓄」的意思喔！' },
  '60D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 spill the beans = 洩漏祕密、爆料\n\n驚喜派對的事「不要說出去」喔！\n\n例句：Don\'t spill the beans about the surprise party!\n\n🎉 Week 12 測驗完成！food idioms 你已經是達人了！' },

  // ===== Week 13: Emotions & Reactions =====

  // Q61 - 正確答案: B (on cloud nine)
  '61A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on cloud nine = 飛上天、超開心\n\n剛訂婚，當然「開心到飛起來」！\n\n例句：She\'s been on cloud nine since her engagement.\n\n💡 fed up 是「受夠了」的意思喔！' },
  '61B': { correct: true,  reply: '✅ 答對了！\n👉 on cloud nine = 超開心、開心到飛起來\n\n想像自己飛到第九朵雲上——超興奮的畫面！類似的還有 over the moon。\n\n例句：She\'s been on cloud nine since her engagement.\n\n👏 繼續下一題！' },
  '61C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on cloud nine = 飛上天、超開心\n\n剛訂婚，當然「開心到飛起來」！\n\n例句：She\'s been on cloud nine since her engagement.\n\n💡 under the weather 是「身體不舒服」的意思喔！' },
  '61D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on cloud nine = 飛上天、超開心\n\n剛訂婚，當然「開心到飛起來」！\n\n例句：She\'s been on cloud nine since her engagement.\n\n💡 lose one\'s cool 是「失控發脾氣」的意思喔！' },

  // Q62 - 正確答案: D (had it up to here)
  '62A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 have had it up to here = 忍無可忍、受夠了\n\n室友老是亂丟碗盤，受夠了要搬走！\n\n例句：I\'ve had it up to here with his lies.\n\n💡 take it easy 是「放輕鬆」的意思喔！' },
  '62B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 have had it up to here = 忍無可忍、受夠了\n\n室友老是亂丟碗盤，受夠了要搬走！\n\n例句：I\'ve had it up to here with his lies.\n\n💡 chill out 是「放鬆」的意思喔！' },
  '62C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 have had it up to here = 忍無可忍、受夠了\n\n室友老是亂丟碗盤，受夠了要搬走！\n\n例句：I\'ve had it up to here with his lies.\n\n💡 on cloud nine 是「超開心」的意思喔！' },
  '62D': { correct: true,  reply: '✅ 答對了！\n👉 have had it up to here = 忍無可忍、受夠了\n\n通常會配上「手比到下巴」的動作——忍耐已經滿到喉嚨了！\n\n例句：I\'ve had it up to here with his lies.\n\n👏 繼續下一題！' },

  // Q63 - 正確答案: C (under the weather)
  '63A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 under the weather = 身體不舒服\n\n感覺要感冒了，身體有點「不太對勁」。\n\n例句：I\'m feeling under the weather today.\n\n💡 on cloud nine 是「超開心」的意思喔！' },
  '63B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 under the weather = 身體不舒服\n\n感覺要感冒了，身體有點「不太對勁」。\n\n例句：I\'m feeling under the weather today.\n\n💡 over the moon 是「超開心」的意思喔！' },
  '63C': { correct: true,  reply: '✅ 答對了！\n👉 under the weather = 身體不舒服\n\n輕微感冒不想直接說 I\'m sick 時超好用！比較委婉。\n\n例句：I\'m feeling under the weather today.\n\n👏 繼續下一題！' },
  '63D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 under the weather = 身體不舒服\n\n感覺要感冒了，身體有點「不太對勁」。\n\n例句：I\'m feeling under the weather today.\n\n💡 fed up 是「受夠了」的意思喔！' },

  // Q64 - 正確答案: B (lost her cool)
  '64A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 lose one\'s cool = 失控、發脾氣\n\n被老闆無理罵後，在會議上「失控」了！\n\n例句：He lost his cool and started shouting.\n\n💡 chill out 剛好相反，是「冷靜」的意思喔！' },
  '64B': { correct: true,  reply: '✅ 答對了！\n👉 lose one\'s cool = 失控、發脾氣\n\ncool 是「冷靜」，lose your cool 就是「失去冷靜」。相反詞 keep your cool！\n\n例句：He lost his cool and started shouting.\n\n👏 繼續下一題！' },
  '64C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 lose one\'s cool = 失控、發脾氣\n\n被老闆無理罵後，在會議上「失控」了！\n\n例句：He lost his cool and started shouting.\n\n💡 take it easy 是「放輕鬆」的意思喔！' },
  '64D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 lose one\'s cool = 失控、發脾氣\n\n被老闆無理罵後，在會議上「失控」了！\n\n例句：He lost his cool and started shouting.\n\n💡 over the moon 是「超開心」的意思喔！' },

  // Q65 - 正確答案: C (Take it easy)
  '65A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take it easy = 放輕鬆、別緊張\n\n別擔心考試啦，「放輕鬆」就好！\n\n例句：Take it easy — you\'ve studied hard.\n\n💡 freak out 剛好相反，是「抓狂」的意思喔！' },
  '65B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take it easy = 放輕鬆、別緊張\n\n別擔心考試啦，「放輕鬆」就好！\n\n例句：Take it easy — you\'ve studied hard.\n\n💡 fed up 是「受夠了」的意思喔！' },
  '65C': { correct: true,  reply: '✅ 答對了！\n👉 take it easy = 放輕鬆、別太緊繃\n\n也可以當再見的告別語：See you later, take it easy!（回去放輕鬆喔！）\n\n例句：Take it easy — you\'ve studied hard.\n\n🎉 Week 13 測驗完成！情緒英文你掌握得很好！' },
  '65D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take it easy = 放輕鬆、別緊張\n\n別擔心考試啦，「放輕鬆」就好！\n\n例句：Take it easy — you\'ve studied hard.\n\n💡 lose your cool 是「失控發脾氣」的意思喔！' },

  // ===== Week 14: Money & Shopping =====

  // Q66 - 正確答案: B (on a tight budget)
  '66A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on a tight budget = 預算很緊\n\n吃不起高級餐廳，因為這個月「預算很緊」。\n\n例句：I\'m on a tight budget this month.\n\n💡 splurge 剛好相反，是「大手筆花錢」的意思喔！' },
  '66B': { correct: true,  reply: '✅ 答對了！\n👉 on a tight budget = 預算很緊、手頭不寬裕\n\ntight 是「緊」，預算緊就是錢不多！\n\n例句：I\'m on a tight budget this month.\n\n👏 繼續下一題！' },
  '66C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on a tight budget = 預算很緊\n\n吃不起高級餐廳，因為這個月「預算很緊」。\n\n例句：I\'m on a tight budget this month.\n\n💡 break the bank 是「花光積蓄」的意思喔！' },
  '66D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 on a tight budget = 預算很緊\n\n吃不起高級餐廳，因為這個月「預算很緊」。\n\n例句：I\'m on a tight budget this month.\n\n💡 live paycheck to paycheck 是「月光族」，題目強調「這個月」喔！' },

  // Q67 - 正確答案: C (splurge)
  '67A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 splurge = 大手筆花錢、犒賞自己\n\n生日決定「大手筆」吃頓好的！\n\n例句：I splurged on a designer bag for my birthday.\n\n💡 pinch pennies 剛好相反，是「省吃儉用」的意思喔！' },
  '67B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 splurge = 大手筆花錢、犒賞自己\n\n生日決定「大手筆」吃頓好的！\n\n例句：I splurged on a designer bag for my birthday.\n\n💡 break the bank 是「花光積蓄」（負面），但 splurge 比較正面，是「偶爾犒賞自己」喔！' },
  '67C': { correct: true,  reply: '✅ 答對了！\n👉 splurge = 大手筆花錢、犒賞自己\n\n後面常接 on：splurge on a watch / a meal. 這是「偶爾犒賞自己」，比較正面！\n\n例句：I splurged on a designer bag for my birthday.\n\n👏 繼續下一題！' },
  '67D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 splurge = 大手筆花錢、犒賞自己\n\n生日決定「大手筆」吃頓好的！\n\n例句：I splurged on a designer bag for my birthday.\n\n💡 put aside 是「把錢留下來」的意思喔！' },

  // Q68 - 正確答案: B (a steal)
  '68A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a steal = 超划算、便宜到像偷的\n\n名牌外套只要 30 美元，「超划算」！\n\n例句：This jacket was only $20 — what a steal!\n\n💡 a rip-off 剛好相反，是「坑人」的意思喔！' },
  '68B': { correct: true,  reply: '✅ 答對了！\n👉 a steal = 超划算、便宜到像偷的\n\n字面雖然是「偷」，但口語就是「便宜到像偷來的」，是稱讚！\n\n例句：This jacket was only $20 — what a steal!\n\n👏 繼續下一題！' },
  '68C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a steal = 超划算、便宜到像偷的\n\n名牌外套只要 30 美元，「超划算」！\n\n例句：This jacket was only $20 — what a steal!\n\n💡 a tight budget 是「預算緊」的意思喔！' },
  '68D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 a steal = 超划算、便宜到像偷的\n\n名牌外套只要 30 美元，「超划算」！\n\n例句：This jacket was only $20 — what a steal!\n\n💡 breadwinner 是「家中經濟支柱」的意思喔！' },

  // Q69 - 正確答案: C (put aside)
  '69A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 put aside = 把錢留下來、存一筆\n\n每個月「存」300 美元為了未來買房子。\n\n例句：She puts aside $200 every month for emergencies.\n\n💡 splurge 剛好相反，是「大手筆花錢」的意思喔！' },
  '69B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 put aside = 把錢留下來、存一筆\n\n每個月「存」300 美元為了未來買房子。\n\n例句：She puts aside $200 every month for emergencies.\n\n💡 break the bank 是「花光積蓄」的意思喔！' },
  '69C': { correct: true,  reply: '✅ 答對了！\n👉 put aside = 把錢留下來、存一筆\n\n字面是「放到旁邊」，意思是「先把錢挪出來存起來」。也可以用在時間上！\n\n例句：She puts aside $200 every month for emergencies.\n\n👏 繼續下一題！' },
  '69D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 put aside = 把錢留下來、存一筆\n\n每個月「存」300 美元為了未來買房子。\n\n例句：She puts aside $200 every month for emergencies.\n\n💡 rip off 是「敲竹槓」的意思喔！' },

  // Q70 - 正確答案: C (living paycheck to paycheck)
  '70A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 live paycheck to paycheck = 月光族、領多少花多少\n\n房租高、學貸多，很多年輕人都是「月光族」。\n\n例句：Many young people live paycheck to paycheck.\n\n💡 splurge 是「大手筆花錢」的意思喔！' },
  '70B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 live paycheck to paycheck = 月光族、領多少花多少\n\n房租高、學貸多，很多年輕人都是「月光族」。\n\n例句：Many young people live paycheck to paycheck.\n\n💡 break the bank 是「一次性花光積蓄」，題目說「持續狀態」喔！' },
  '70C': { correct: true,  reply: '✅ 答對了！\n👉 live paycheck to paycheck = 月光族\n\npaycheck 是薪水支票，字面是「靠每張薪水支票過活」——下個月薪水進來才能繼續過。就是月光族！\n\n例句：Many young people live paycheck to paycheck.\n\n🎉 Week 14 測驗完成！理財英文你掌握得很好！' },
  '70D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 live paycheck to paycheck = 月光族、領多少花多少\n\n房租高、學貸多，很多年輕人都是「月光族」。\n\n例句：Many young people live paycheck to paycheck.\n\n💡 save up 是「存錢」，剛好相反喔！' },

  // ===== Week 15: Goals & Productivity =====

  // Q71 - 正確答案: B (set the bar high)
  '71A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 set the bar high = 設定高標準\n\n姊姊是榜首，「把標準設得很高」，弟弟妹妹壓力山大！\n\n例句：Her first novel set the bar high for her next book.\n\n💡 drop the ball 是「出包」的意思喔！' },
  '71B': { correct: true,  reply: '✅ 答對了！\n👉 set the bar high = 設定高標準\n\nbar 是跳高比賽的橫桿，把橫桿設高就是「設定高標準」！\n\n例句：Her first novel set the bar high for her next book.\n\n👏 繼續下一題！' },
  '71C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 set the bar high = 設定高標準\n\n姊姊是榜首，「把標準設得很高」，弟弟妹妹壓力山大！\n\n例句：Her first novel set the bar high for her next book.\n\n💡 fall behind 是「進度落後」的意思喔！' },
  '71D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 set the bar high = 設定高標準\n\n姊姊是榜首，「把標準設得很高」，弟弟妹妹壓力山大！\n\n例句：Her first novel set the bar high for her next book.\n\n💡 bite off more than one can chew 是「逞強」的意思喔！' },

  // Q72 - 正確答案: C (hit the ground running)
  '72A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the ground running = 一上手就全力衝刺\n\n第一天上班就成交兩筆，「快速進入狀況」！\n\n例句：She hit the ground running in her new job.\n\n💡 drop the ball 剛好相反，是「出包」的意思喔！' },
  '72B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the ground running = 一上手就全力衝刺\n\n第一天上班就成交兩筆，「快速進入狀況」！\n\n例句：She hit the ground running in her new job.\n\n💡 fall behind 剛好相反，是「進度落後」喔！' },
  '72C': { correct: true,  reply: '✅ 答對了！\n👉 hit the ground running = 一上手就全力衝刺\n\n想像跳傘落地後馬上跑起來，不能停！面試自我介紹超加分。\n\n例句：She hit the ground running in her new job.\n\n👏 繼續下一題！' },
  '72D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the ground running = 一上手就全力衝刺\n\n第一天上班就成交兩筆，「快速進入狀況」！\n\n例句：She hit the ground running in her new job.\n\n💡 bite off more than one can chew 是「逞強」的意思喔！' },

  // Q73 - 正確答案: C (dropped the ball)
  '73A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 drop the ball = 出包、犯下重大失誤\n\n忘了寄信給客戶，案子飛了，這就是「出包」！\n\n例句：I really dropped the ball on this project.\n\n💡 set the bar high 是「設定高標準」的意思喔！' },
  '73B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 drop the ball = 出包、犯下重大失誤\n\n忘了寄信給客戶，案子飛了，這就是「出包」！\n\n例句：I really dropped the ball on this project.\n\n💡 aim high 是「志向遠大」的意思喔！' },
  '73C': { correct: true,  reply: '✅ 答對了！\n👉 drop the ball = 出包、犯下重大失誤\n\n來自運動，球掉了就是失誤！職場常用，誠實承認錯誤的好說法。\n\n例句：I really dropped the ball on this project.\n\n👏 繼續下一題！' },
  '73D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 drop the ball = 出包、犯下重大失誤\n\n忘了寄信給客戶，案子飛了，這就是「出包」！\n\n例句：I really dropped the ball on this project.\n\n💡 hit the ground running 是「快速進入狀況」的意思喔！' },

  // Q74 - 正確答案: D (biting off more than you can chew)
  '74A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 bite off more than one can chew = 逞強、做超出能力的事\n\n五個社團、三堂課還打工，根本「攬太多」啦！\n\n例句：Don\'t bite off more than you can chew.\n\n💡 on track 是「進度正常」的意思喔！' },
  '74B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 bite off more than one can chew = 逞強、做超出能力的事\n\n五個社團、三堂課還打工，根本「攬太多」啦！\n\n例句：Don\'t bite off more than you can chew.\n\n💡 set the bar high 是「設高標準」，比較正面喔！' },
  '74C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 bite off more than one can chew = 逞強、做超出能力的事\n\n五個社團、三堂課還打工，根本「攬太多」啦！\n\n例句：Don\'t bite off more than you can chew.\n\n💡 hit the ground running 是「快速進入狀況」（正面）的意思喔！' },
  '74D': { correct: true,  reply: '✅ 答對了！\n👉 bite off more than one can chew = 逞強、攬太多事\n\n字面是「咬下比能咀嚼還多的食物」——畫面超清楚！one\'s 要根據主詞變化。\n\n例句：Don\'t bite off more than you can chew.\n\n👏 繼續下一題！' },

  // Q75 - 正確答案: B (behind schedule)
  '75A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 behind schedule = 進度落後\n\n本來 5 月要完工，現在晚了三週，就是「落後進度」！\n\n例句：The project is behind schedule.\n\n💡 on track 是「進度正常」，剛好相反喔！' },
  '75B': { correct: true,  reply: '✅ 答對了！\n👉 behind schedule = 進度落後\n\n相反詞 ahead of schedule（超前）；on schedule 是「準時」。\n\n例句：The project is behind schedule.\n\n👏 繼續下一題！' },
  '75C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 behind schedule = 進度落後\n\n本來 5 月要完工，現在晚了三週，就是「落後進度」！\n\n例句：The project is behind schedule.\n\n💡 ahead of schedule 是「超前進度」，剛好相反喔！' },
  '75D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 behind schedule = 進度落後\n\n本來 5 月要完工，現在晚了三週，就是「落後進度」！\n\n例句：The project is behind schedule.\n\n💡 above and beyond 是「超越本分」的意思喔！' },

  // ===== Week 16: School & Studying =====

  // Q76 - 正確答案: C (cram)
  '76A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 cram = 臨時抱佛腳、惡補\n\n整個月沒讀書，今晚只能「臨時抱佛腳」！\n\n例句：I crammed all night for the test.\n\n💡 ace the test 是「考超高分」（結果），題目問的是「動作」喔！' },
  '76B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 cram = 臨時抱佛腳、惡補\n\n整個月沒讀書，今晚只能「臨時抱佛腳」！\n\n例句：I crammed all night for the test.\n\n💡 flunk 是「考不及格」的意思喔！' },
  '76C': { correct: true,  reply: '✅ 答對了！\n👉 cram = 臨時抱佛腳、惡補\n\n字面是「塞」資訊進腦袋，補習班就叫 cram school！\n\n例句：I crammed all night for the test.\n\n👏 繼續下一題！' },
  '76D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 cram = 臨時抱佛腳、惡補\n\n整個月沒讀書，今晚只能「臨時抱佛腳」！\n\n例句：I crammed all night for the test.\n\n💡 blank out 是「腦袋一片空白」的意思喔！' },

  // Q77 - 正確答案: D (aced the test)
  '77A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 ace a test = 考超高分\n\n讀了兩週，得了 99 分，這就是「考超棒」！\n\n例句：She aced the math test.\n\n💡 flunk 剛好相反，是「考不及格」喔！' },
  '77B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 ace a test = 考超高分\n\n讀了兩週，得了 99 分，這就是「考超棒」！\n\n例句：She aced the math test.\n\n💡 barely scrape by 是「勉強過關」（剛好及格），不是高分喔！' },
  '77C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 ace a test = 考超高分\n\n讀了兩週，得了 99 分，這就是「考超棒」！\n\n例句：She aced the math test.\n\n💡 blank out 是「腦袋一片空白」的意思喔！' },
  '77D': { correct: true,  reply: '✅ 答對了！\n👉 ace a test = 考超高分、表現超棒\n\nace 當動詞超實用：ace an interview / ace a presentation 都行！\n\n例句：She aced the math test.\n\n👏 繼續下一題！' },

  // Q78 - 正確答案: B (barely scraped by)
  '78A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 barely scrape by = 勉強過關、低空飛過\n\n60 分剛好及格，「低空飛過」啊！\n\n例句：I barely scraped by on the final.\n\n💡 ace it 是「考超好」，60 分不算高喔！' },
  '78B': { correct: true,  reply: '✅ 答對了！\n👉 barely scrape by = 勉強過關、低空飛過\n\nscrape 是「擦過」，barely 是「勉強」。也可以用在錢上：scrape by on a small income.\n\n例句：I barely scraped by on the final.\n\n👏 繼續下一題！' },
  '78C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 barely scrape by = 勉強過關、低空飛過\n\n60 分剛好及格，「低空飛過」啊！\n\n例句：I barely scraped by on the final.\n\n💡 pass with flying colors 是「高分通過」，60 分不算高喔！' },
  '78D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 barely scrape by = 勉強過關、低空飛過\n\n60 分剛好及格，「低空飛過」啊！\n\n例句：I barely scraped by on the final.\n\n💡 hit the books 是「開始用功」（動作），題目問的是「結果」喔！' },

  // Q79 - 正確答案: C (hit the books)
  '79A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the books = 開始用功讀書\n\n期末考下週，不能再看 Netflix 了，要「開始用功」！\n\n例句：I really need to hit the books before finals.\n\n💡 pull an all-nighter 是「熬夜通宵」（特定一晚），題目說「停止 Netflix 開始讀」，意思是長期投入喔！' },
  '79B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the books = 開始用功讀書\n\n期末考下週，不能再看 Netflix 了，要「開始用功」！\n\n例句：I really need to hit the books before finals.\n\n💡 blank out 是「腦袋一片空白」的意思喔！' },
  '79C': { correct: true,  reply: '✅ 答對了！\n👉 hit the books = 開始用功讀書\n\nhit 不是「打」，是「開始投入」！類似的有 hit the gym（去健身）、hit the road（上路）。\n\n例句：I really need to hit the books before finals.\n\n👏 繼續最後一題！' },
  '79D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 hit the books = 開始用功讀書\n\n期末考下週，不能再看 Netflix 了，要「開始用功」！\n\n例句：I really need to hit the books before finals.\n\n💡 flunk 是「考不及格」的意思喔！' },

  // Q80 - 正確答案: B (blanked out)
  '80A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 blank out = 腦袋一片空白\n\n明明會的答案，被叫到時「腦袋空白」想不起來！\n\n例句：I blanked out during the presentation.\n\n💡 ace it 是「考超好」，題目情境是想不起來喔！' },
  '80B': { correct: true,  reply: '✅ 答對了！\n👉 blank out = 腦袋一片空白\n\n字面是「變空白」，常用在考試、上台緊張時——突然什麼都想不起來。類似的有 brain fart！\n\n例句：I blanked out during the presentation.\n\n🎉 Week 16 測驗完成！恭喜你完成 80 天的英文片語挑戰！你超棒！💪' },
  '80C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 blank out = 腦袋一片空白\n\n明明會的答案，被叫到時「腦袋空白」想不起來！\n\n例句：I blanked out during the presentation.\n\n💡 cram 是「臨時抱佛腳」（事前），題目情境是當下想不起來喔！' },
  '80D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 blank out = 腦袋一片空白\n\n明明會的答案，被叫到時「腦袋空白」想不起來！\n\n例句：I blanked out during the presentation.\n\n💡 hit the books 是「開始用功讀書」的意思喔！' },
};

// 其他關鍵字回覆
const otherReplies = {
  '測驗': '🎯 每週六早上會推播本週小測驗！回覆你的答案（如 1A、2C），我會告訴你結果 ☺️',
  'quiz': '🎯 每週六早上會推播本週小測驗！回覆你的答案（如 1A、2C），我會告訴你結果 ☺️',
  '課程': '🎓 想更有系統地提升英文嗎？歡迎參考我的線上課程！',
  'course': '🎓 想更有系統地提升英文嗎？歡迎參考我的線上課程！',
  '你好': '嗨！歡迎來到 Steph\'s English Lab ☺️ 有任何問題都可以直接留言！',
  'hi': '嗨！歡迎來到 Steph\'s English Lab ☺️ 有任何問題都可以直接留言！',
  'hello': '嗨！歡迎來到 Steph\'s English Lab ☺️ 有任何問題都可以直接留言！',
  '教材': '👩‍🏫 如果你是英文老師，歡迎參考我的教學活動包！',
  'teacher': '👩‍🏫 如果你是英文老師，歡迎參考我的教學活動包！',
};

module.exports = { quizReplies, otherReplies };
