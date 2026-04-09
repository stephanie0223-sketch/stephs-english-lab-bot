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

  // ===== Week 3: back to square one / pull one's weight / think outside the box / up in the air / call the shots =====

  // Q11 - 正確答案: B (back to square one)
  '11A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 back to square one（回到原點）\n\n提案被全部打回票，只能「從頭再來」了。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '11B': { correct: true,  reply: '✅ 答對了！\n👉 back to square one = 回到原點、從頭再來\n\n像桌遊被退回起點一樣！\n\n例句：The experiment failed, so we\'re back to square one.\n\n👏 繼續下一題！' },
  '11C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 back to square one（回到原點）\n\n提案被全部打回票，只能「從頭再來」了。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },
  '11D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 back to square one（回到原點）\n\n提案被全部打回票，只能「從頭再來」了。\n\n例句：The experiment failed, so we\'re back to square one.\n\n💡 up in the air 是「懸而未決」的意思喔！' },

  // Q12 - 正確答案: C (pull their weight)
  '12A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 pull one\'s weight（盡自己的本分、分擔責任）\n\n小組報告每個人都要「盡自己該做的」才公平。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },
  '12B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 pull one\'s weight（盡自己的本分、分擔責任）\n\n小組報告每個人都要「盡自己該做的」才公平。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '12C': { correct: true,  reply: '✅ 答對了！\n👉 pull one\'s weight = 盡自己的本分、分擔責任\n\n想像一起拉繩子，每個人都要出力！\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n👏 繼續下一題！' },
  '12D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 pull one\'s weight（盡自己的本分、分擔責任）\n\n小組報告每個人都要「盡自己該做的」才公平。\n\n例句：If you don\'t pull your weight, the whole team suffers.\n\n💡 back to square one 是「回到原點」的意思喔！' },

  // Q13 - 正確答案: C (think outside the box)
  '13A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box（跳脫框架思考）\n\n傳統方法行不通，需要「用不同的角度想」。\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '13B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box（跳脫框架思考）\n\n傳統方法行不通，需要「用不同的角度想」。\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 back to square one 是「回到原點」的意思喔！' },
  '13C': { correct: true,  reply: '✅ 答對了！\n👉 think outside the box = 跳脫框架思考、創意思考\n\n跳出那個「盒子」，才能看到新的可能性！\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n👏 繼續下一題！' },
  '13D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 think outside the box（跳脫框架思考）\n\n傳統方法行不通，需要「用不同的角度想」。\n\n例句：To find a solution, we\'ll need to think outside the box.\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },

  // Q14 - 正確答案: A (up in the air)
  '14A': { correct: true,  reply: '✅ 答對了！\n👉 up in the air = 懸而未決、還沒確定\n\n音樂節辦不辦還「飄在空中」，沒有定下來。\n\n例句：My travel plans are still up in the air.\n\n👏 繼續下一題！' },
  '14B': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 up in the air（懸而未決）\n\n音樂節辦不辦還「飄在空中」，沒有定下來。\n\n例句：My travel plans are still up in the air.\n\n💡 back to square one 是「回到原點」，是已經確定失敗了喔！' },
  '14C': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 up in the air（懸而未決）\n\n音樂節辦不辦還「飄在空中」，沒有定下來。\n\n例句：My travel plans are still up in the air.\n\n💡 call the shots 是「做主、發號施令」的意思喔！' },
  '14D': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 up in the air（懸而未決）\n\n音樂節辦不辦還「飄在空中」，沒有定下來。\n\n例句：My travel plans are still up in the air.\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },

  // Q15 - 正確答案: D (call the shots)
  '15A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 call the shots（做主、發號施令）\n\n身為 team leader，所有重大決定都是她「說了算」。\n\n例句：Who calls the shots around here?\n\n💡 pull one\'s weight 是「盡自己本分」的意思喔！' },
  '15B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 call the shots（做主、發號施令）\n\n身為 team leader，所有重大決定都是她「說了算」。\n\n例句：Who calls the shots around here?\n\n💡 up in the air 是「懸而未決」的意思喔！' },
  '15C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 call the shots（做主、發號施令）\n\n身為 team leader，所有重大決定都是她「說了算」。\n\n例句：Who calls the shots around here?\n\n💡 think outside the box 是「跳脫框架思考」的意思喔！' },
  '15D': { correct: true,  reply: '✅ 答對了！\n👉 call the shots = 做主、發號施令、拍板定案\n\n這個片語源自射擊運動，由一個人「喊靶」決定打哪裡！\n\n例句：Who calls the shots around here?\n\n🎉 Week 3 測驗完成！你的 idiom 實力越來越強了！' },

  // ===== Week 4: step out of one's comfort zone / the bigger picture / take something with a grain of salt / turn over a new leaf / broaden one's horizons =====

  // Q16 - 正確答案: B (step out of your comfort zone)
  '16A': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone（跨出舒適圈）\n\n雖然上台演講很可怕，但有時候就是要「走出舒適圈」才能成長！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 turn over a new leaf 是「重新開始、改過自新」的意思喔！' },
  '16B': { correct: true,  reply: '✅ 答對了！\n👉 step out of one\'s comfort zone = 跨出舒適圈\n\n成長往往在不舒服的地方發生！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n👏 繼續下一題！' },
  '16C': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone（跨出舒適圈）\n\n雖然上台演講很可怕，但有時候就是要「走出舒適圈」才能成長！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 the bigger picture 是「大局、全貌」的意思喔！' },
  '16D': { correct: false, reply: '❌ 不對喔！正確答案是 B\n👉 step out of one\'s comfort zone（跨出舒適圈）\n\n雖然上台演講很可怕，但有時候就是要「走出舒適圈」才能成長！\n\n例句：Traveling alone really forced me to step out of my comfort zone.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },

  // Q17 - 正確答案: A (the bigger picture)
  '17A': { correct: true,  reply: '✅ 答對了！\n👉 the bigger picture = 大局、全貌\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n👏 繼續下一題！' },
  '17B': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture（大局、全貌）\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },
  '17C': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture（大局、全貌）\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！' },
  '17D': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 the bigger picture（大局、全貌）\n\n一次考差沒關係，「看大局」的話，這學期進步超多！\n\n例句：Sometimes you need to step back and look at the bigger picture.\n\n💡 comfort zone 是「舒適圈」的意思喔！' },

  // Q18 - 正確答案: C (take that with a grain of salt)
  '18A': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt（半信半疑、保留態度）\n\n有人說自己精通六國語言，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 broaden one\'s horizons 是「拓展視野」的意思喔！' },
  '18B': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt（半信半疑、保留態度）\n\n有人說自己精通六國語言，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！' },
  '18C': { correct: true,  reply: '✅ 答對了！\n👉 take something with a grain of salt = 半信半疑、聽聽就好\n\n想像在食物上只撒一小粒鹽——只接受一點點就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n👏 繼續下一題！' },
  '18D': { correct: false, reply: '❌ 不對喔！正確答案是 C\n👉 take something with a grain of salt（半信半疑、保留態度）\n\n有人說自己精通六國語言，嗯⋯聽聽就好！\n\n例句：Online reviews should be taken with a grain of salt.\n\n💡 step out of one\'s comfort zone 是「跨出舒適圈」的意思喔！' },

  // Q19 - 正確答案: D (turn over a new leaf)
  '19A': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 turn over a new leaf（翻開新的一頁、重新開始）\n\n壞習慣好幾年，終於決定「重新做人」開始運動了！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！' },
  '19B': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 turn over a new leaf（翻開新的一頁、重新開始）\n\n壞習慣好幾年，終於決定「重新做人」開始運動了！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 the bigger picture 是「大局、全貌」的意思喔！' },
  '19C': { correct: false, reply: '❌ 不對喔！正確答案是 D\n👉 turn over a new leaf（翻開新的一頁、重新開始）\n\n壞習慣好幾年，終於決定「重新做人」開始運動了！\n\n例句：New Year is a great time to turn over a new leaf.\n\n💡 broaden one\'s horizons 是「拓展視野」的意思喔！' },
  '19D': { correct: true,  reply: '✅ 答對了！\n👉 turn over a new leaf = 翻開新的一頁、重新開始\n\n這裡的 leaf 指的是書頁，翻到新的一頁，全新的開始！\n\n例句：New Year is a great time to turn over a new leaf.\n\n👏 繼續最後一題！' },

  // Q20 - 正確答案: A (broaden your horizons)
  '20A': { correct: true,  reply: '✅ 答對了！\n👉 broaden one\'s horizons = 拓展視野\n\n出國留學讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n🎉🎉🎉 恭喜你完成全部四週的測驗！你已經學會了 20 個超實用的英文片語，太厲害了！Keep going! 🌟' },
  '20B': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 broaden one\'s horizons（拓展視野）\n\n出國留學讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 turn over a new leaf 是「重新開始」的意思喔！\n\n🎉 四週測驗全部結束！繼續加油！' },
  '20C': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 broaden one\'s horizons（拓展視野）\n\n出國留學讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 call the shots 是「做主、發號施令」的意思喔！\n\n🎉 四週測驗全部結束！繼續加油！' },
  '20D': { correct: false, reply: '❌ 不對喔！正確答案是 A\n👉 broaden one\'s horizons（拓展視野）\n\n出國留學讓你「看得更遠、更廣」！\n\n例句：Reading books from different countries can broaden your horizons.\n\n💡 take something with a grain of salt 是「半信半疑」的意思喔！\n\n🎉 四週測驗全部結束！繼續加油！' },
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
