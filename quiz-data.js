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
