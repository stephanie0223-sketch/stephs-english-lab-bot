// 每日推播排程（已調整：Day 1-5 已手動發送，程式從 4/11 Week 1 Quiz 開始）
// type: 'card' = 每日片語圖卡, 'quiz' = 週六測驗圖卡
// 排序：W1 Everyday Idioms → W2 Relationships → W3 Phone Addiction → W4 Meeting People
//       → W5 Gym & Fitness → W6 Love Part 1 → W7 Love Part 2 → W8 Work → W9 Growth

const schedule = [
  // ===== Week 1 Quiz（Day 1-5 已手動發送，只需發測驗）=====
  { date: '2026-04-11', day: 'Sat', type: 'quiz', week: 1, quizTexts: [
    { q: 'Q1. He didn\'t say a word, but his facial expression ______.\n\nA. went the extra mile\nB. spoke volumes\nC. cut to the chase\nD. was on the fence\n\n回覆 1A / 1B / 1C / 1D' },
    { q: 'Q2. "I still haven\'t decided whether to go to Tokyo or not — I\'m still ______."\n\nA. a blessing in disguise\nB. cutting to the chase\nC. on the fence\nD. going the extra mile\n\n回覆 2A / 2B / 2C / 2D' },
    { q: 'Q3. Missing the flight seemed terrible, but she ended up meeting her best friend at the airport. It was ______.\n\nA. going the extra mile\nB. speaking volumes\nC. cutting to the chase\nD. a blessing in disguise\n\n回覆 3A / 3B / 3C / 3D' },
    { q: 'Q4. "We only have 5 minutes left in the meeting — let\'s ______."\n\nA. go the extra mile\nB. speak volumes\nC. get on the fence\nD. cut to the chase\n\n回覆 4A / 4B / 4C / 4D' },
    { q: 'Q5. The teacher recorded extra videos on weekends to help her students. She really ______.\n\nA. was on the fence\nB. went the extra mile\nC. spoke volumes\nD. was a blessing in disguise\n\n回覆 5A / 5B / 5C / 5D' },
  ]},

  // ===== Week 2：Relationships & Communication =====
  { date: '2026-04-13', day: 'Mon', type: 'card', image: 'Day06_Get_something_off_ones_chest.png', week: 2, dayNum: 6 },
  { date: '2026-04-14', day: 'Tue', type: 'card', image: 'Day07_Hit_it_off.png',                   week: 2, dayNum: 7 },
  { date: '2026-04-15', day: 'Wed', type: 'card', image: 'Day08_Keep_someone_in_the_loop.png',     week: 2, dayNum: 8 },
  { date: '2026-04-16', day: 'Thu', type: 'card', image: 'Day09_Rub_someone_the_wrong_way.png',    week: 2, dayNum: 9 },
  { date: '2026-04-17', day: 'Fri', type: 'card', image: 'Day10_See_eye_to_eye.png',               week: 2, dayNum: 10 },
  { date: '2026-04-18', day: 'Sat', type: 'quiz', week: 2, quizTexts: [
    { q: 'Q6. "I\'ve been holding this in for weeks. I just need to ______."\n\nA. keep you in the loop\nB. see eye to eye\nC. get it off my chest\nD. hit it off\n\n回覆 6A / 6B / 6C / 6D' },
    { q: 'Q7. They met at a party and talked for three hours straight. They really ______.\n\nA. rubbed each other the wrong way\nB. saw eye to eye\nC. kept each other in the loop\nD. hit it off\n\n回覆 7A / 7B / 7C / 7D' },
    { q: 'Q8. "If the deadline changes, please ______."\n\nA. get it off your chest\nB. rub me the wrong way\nC. keep me in the loop\nD. hit it off\n\n回覆 8A / 8B / 8C / 8D' },
    { q: 'Q9. "I don\'t know why, but something about his attitude just ______."\n\nA. keeps me in the loop\nB. rubs me the wrong way\nC. gets it off my chest\nD. hits it off\n\n回覆 9A / 9B / 9C / 9D' },
    { q: 'Q10. "My parents and I don\'t always ______ on politics, but we still get along."\n\nA. hit it off\nB. get off our chest\nC. rub the wrong way\nD. see eye to eye\n\n回覆 10A / 10B / 10C / 10D' },
  ]},

  // ===== Week 3：Phone Addiction 📱 =====
  { date: '2026-04-20', day: 'Mon', type: 'card', image: 'Day11_Doomscrolling_and_Scroll_hole.png', week: 3, dayNum: 11 },
  { date: '2026-04-21', day: 'Tue', type: 'card', image: 'Day12_Phubbing_and_Left_on_read.png',    week: 3, dayNum: 12 },
  { date: '2026-04-22', day: 'Wed', type: 'card', image: 'Day13_FOMO.png',                          week: 3, dayNum: 13 },
  { date: '2026-04-23', day: 'Thu', type: 'card', image: 'Day14_Digital_detox.png',                  week: 3, dayNum: 14 },
  { date: '2026-04-24', day: 'Fri', type: 'card', image: 'Day15_Nomophobia.png',                    week: 3, dayNum: 15 },
  { date: '2026-04-25', day: 'Sat', type: 'quiz', week: 3, quizTexts: [
    { q: 'Q11. You spent 3 hours reading bad news on your phone before bed, unable to stop. This behavior is called ______.\n\nA. FOMO\nB. nomophobia\nC. doomscrolling\nD. digital detox\n\n回覆 11A / 11B / 11C / 11D' },
    { q: 'Q12. You\'re having dinner with a friend, but she keeps looking at her phone instead of talking to you. She is ______ you.\n\nA. doomscrolling\nB. phubbing\nC. leaving on read\nD. nomophobia\n\n回覆 12A / 12B / 12C / 12D' },
    { q: 'Q13. She always checks social media because she\'s afraid of missing out on what others are doing. She has ______.\n\nA. nomophobia\nB. FOMO\nC. screen time\nD. digital detox\n\n回覆 13A / 13B / 13C / 13D' },
    { q: 'Q14. "This weekend, I\'m putting my phone away and doing a ______."\n\nA. doomscrolling\nB. FOMO\nC. nomophobia\nD. digital detox\n\n回覆 14A / 14B / 14C / 14D' },
    { q: 'Q15. He panics whenever his phone battery dies. He probably suffers from ______.\n\nA. doomscrolling\nB. digital detox\nC. FOMO\nD. nomophobia\n\n回覆 15A / 15B / 15C / 15D' },
  ]},

  // ===== Week 4：Meeting People 🤝 =====
  { date: '2026-04-27', day: 'Mon', type: 'card', image: 'Day16_Introvert_Extrovert_Ambivert.png',  week: 4, dayNum: 16 },
  { date: '2026-04-28', day: 'Tue', type: 'card', image: 'Day17_Break_the_ice_and_Warm_up_to_someone.png', week: 4, dayNum: 17 },
  { date: '2026-04-29', day: 'Wed', type: 'card', image: 'Day18_Come_out_of_ones_shell_and_Step_out_of_comfort_zone.png', week: 4, dayNum: 18 },
  { date: '2026-04-30', day: 'Thu', type: 'card', image: 'Day19_Culture_shock_and_Find_common_ground.png', week: 4, dayNum: 19 },
  { date: '2026-05-01', day: 'Fri', type: 'card', image: 'Day20_Social_butterfly_and_Wallflower.png', week: 4, dayNum: 20 },
  { date: '2026-05-02', day: 'Sat', type: 'quiz', week: 4, quizTexts: [
    { q: 'Q16. Someone who has both introvert and extrovert qualities — they enjoy socializing but also need alone time — is called an ______.\n\nA. extrovert\nB. introvert\nC. ambivert\nD. wallflower\n\n回覆 16A / 16B / 16C / 16D' },
    { q: 'Q17. Everyone at the party looked uncomfortable, so Lisa told a joke to ______.\n\nA. warm up to someone\nB. break the ice\nC. find common ground\nD. come out of her shell\n\n回覆 17A / 17B / 17C / 17D' },
    { q: 'Q18. Tim used to be very shy, but after joining the drama club, he really ______.\n\nA. broke the ice\nB. stepped out of his comfort zone\nC. came out of his shell\nD. found common ground\n\n回覆 18A / 18B / 18C / 18D' },
    { q: 'Q19. When you move to a new country and feel confused by the different customs, you\'re experiencing ______.\n\nA. common ground\nB. culture shock\nC. wallflower\nD. comfort zone\n\n回覆 19A / 19B / 19C / 19D' },
    { q: 'Q20. Lisa knows everyone at school and loves talking to new people. She\'s a real ______.\n\nA. wallflower\nB. introvert\nC. ambivert\nD. social butterfly\n\n回覆 20A / 20B / 20C / 20D' },
  ]},

  // ===== Week 5：Gym & Fitness 💪 =====
  { date: '2026-05-04', day: 'Mon', type: 'card', image: 'Day21_Work_out_and_Hit_the_gym.png',      week: 5, dayNum: 21 },
  { date: '2026-05-05', day: 'Tue', type: 'card', image: 'Day22_Warm_up_Cool_down_Reps_Sets.png',   week: 5, dayNum: 22 },
  { date: '2026-05-06', day: 'Wed', type: 'card', image: 'Day23_No_pain_no_gain_Push_limits_Go_hard.png', week: 5, dayNum: 23 },
  { date: '2026-05-07', day: 'Thu', type: 'card', image: 'Day24_Gym_rat_and_Skip_leg_day.png',      week: 5, dayNum: 24 },
  { date: '2026-05-08', day: 'Fri', type: 'card', image: 'Day25_Get_in_shape_Let_oneself_go_Body_types.png', week: 5, dayNum: 25 },
  { date: '2026-05-09', day: 'Sat', type: 'quiz', week: 5, quizTexts: [
    { q: 'Q21. "I don\'t go to a gym — I just ______ at home with YouTube videos."\n\nA. hit the gym\nB. cool down\nC. work out\nD. skip leg day\n\n回覆 21A / 21B / 21C / 21D' },
    { q: 'Q22. Your coach says: "Do 3 ______ of 12 ______, and rest 30 seconds between each one."\n\nA. reps / sets\nB. sets / reps\nC. warm-ups / cool-downs\nD. workouts / exercises\n\n回覆 22A / 22B / 22C / 22D' },
    { q: 'Q23. Your muscles are sore after yesterday\'s training, but your friend says: "______!" to motivate you.\n\nA. Skip leg day\nB. Let yourself go\nC. No pain, no gain\nD. Cool down\n\n回覆 23A / 23B / 23C / 23D' },
    { q: 'Q24. He goes to the gym six days a week and talks about protein shakes all the time. He\'s a total ______.\n\nA. wallflower\nB. gym rat\nC. ambivert\nD. social butterfly\n\n回覆 24A / 24B / 24C / 24D' },
    { q: 'Q25. "After summer vacation, I really need to ______ — I ate too much and didn\'t exercise at all."\n\nA. let myself go\nB. skip leg day\nC. cool down\nD. get in shape\n\n回覆 25A / 25B / 25C / 25D' },
  ]},

  // ===== Week 6：Love Part 1 💗 =====
  { date: '2026-05-11', day: 'Mon', type: 'card', image: 'Day26_Have_a_crush_on_and_Butterflies.png', week: 6, dayNum: 26 },
  { date: '2026-05-12', day: 'Tue', type: 'card', image: 'Day27_Shoot_ones_shot_and_Make_the_first_move.png', week: 6, dayNum: 27 },
  { date: '2026-05-13', day: 'Wed', type: 'card', image: 'Day28_Play_hard_to_get_and_Friend_zone.png', week: 6, dayNum: 28 },
  { date: '2026-05-14', day: 'Thu', type: 'card', image: 'Day29_Fall_for_someone_and_Love_at_first_sight.png', week: 6, dayNum: 29 },
  { date: '2026-05-15', day: 'Fri', type: 'card', image: 'Day30_Head_over_heels_and_Sweep_off_feet.png', week: 6, dayNum: 30 },
  { date: '2026-05-16', day: 'Sat', type: 'quiz', week: 6, quizTexts: [
    { q: 'Q26. She\'s liked him since freshman year but never told him. She ______ him.\n\nA. fell for\nB. has a crush on\nC. swept off the feet of\nD. is head over heels for\n\n回覆 26A / 26B / 26C / 26D' },
    { q: 'Q27. "You\'ll never know if she likes you unless you ______."\n\nA. play hard to get\nB. make the first move\nC. friend-zone her\nD. shoot your shot\n\n回覆 27A / 27B / 27C / 27D' },
    { q: 'Q28. He told her he liked her, but she said "You\'re like a brother to me." He got ______.\n\nA. swept off his feet\nB. love at first sight\nC. friend-zoned\nD. butterflies\n\n回覆 28A / 28B / 28C / 28D' },
    { q: 'Q29. My grandparents met at a dance and fell in love immediately. It was ______.\n\nA. playing hard to get\nB. friend zone\nC. love at first sight\nD. making the first move\n\n回覆 29A / 29B / 29C / 29D' },
    { q: 'Q30. He can\'t stop thinking about her — he\'s completely ______ for her.\n\nA. friend-zoned\nB. crushing\nC. head over heels\nD. playing hard to get\n\n回覆 30A / 30B / 30C / 30D' },
  ]},

  // ===== Week 7：Love Part 2 💔 =====
  { date: '2026-05-18', day: 'Mon', type: 'card', image: 'Day31_Go_steady_and_PDA.png',             week: 7, dayNum: 31 },
  { date: '2026-05-19', day: 'Tue', type: 'card', image: 'Day32_On_the_rocks_and_Cold_shoulder.png', week: 7, dayNum: 32 },
  { date: '2026-05-20', day: 'Wed', type: 'card', image: 'Day33_Red_flag_and_Toxic_relationship.png', week: 7, dayNum: 33 },
  { date: '2026-05-21', day: 'Thu', type: 'card', image: 'Day34_Cheat_on_and_Two_time.png',         week: 7, dayNum: 34 },
  { date: '2026-05-22', day: 'Fri', type: 'card', image: 'Day35_Two_endings_Break_up_Tie_the_knot.png', week: 7, dayNum: 35 },
  { date: '2026-05-23', day: 'Sat', type: 'quiz', week: 7, quizTexts: [
    { q: 'Q31. They\'ve been dating exclusively for two years. They\'re ______.\n\nA. on the rocks\nB. going steady\nC. tying the knot\nD. showing PDA\n\n回覆 31A / 31B / 31C / 31D' },
    { q: 'Q32. After the big fight, she hasn\'t talked to him for three days. She\'s ______.\n\nA. going steady\nB. tying the knot\nC. giving him the cold shoulder\nD. two-timing him\n\n回覆 32A / 32B / 32C / 32D' },
    { q: 'Q33. He checks her phone every day and gets angry if she talks to other guys. That\'s a huge ______.\n\nA. PDA\nB. cold shoulder\nC. red flag\nD. green flag\n\n回覆 33A / 33B / 33C / 33D' },
    { q: 'Q34. She found out he was secretly dating another girl at the same time. He was ______ her.\n\nA. giving the cold shoulder to\nB. going steady with\nC. sweeping off the feet of\nD. two-timing\n\n回覆 34A / 34B / 34C / 34D' },
    { q: 'Q35. After dating for five years, they finally ______ last summer!\n\nA. broke up\nB. moved on\nC. tied the knot\nD. went on the rocks\n\n回覆 35A / 35B / 35C / 35D' },
  ]},

  // ===== Week 8：Work & Problem Solving =====
  { date: '2026-05-25', day: 'Mon', type: 'card', image: 'Day36_Back_to_square_one.png',            week: 8, dayNum: 36 },
  { date: '2026-05-26', day: 'Tue', type: 'card', image: 'Day37_Pull_ones_weight.png',              week: 8, dayNum: 37 },
  { date: '2026-05-27', day: 'Wed', type: 'card', image: 'Day38_Think_outside_the_box.png',         week: 8, dayNum: 38 },
  { date: '2026-05-28', day: 'Thu', type: 'card', image: 'Day39_Up_in_the_air.png',                 week: 8, dayNum: 39 },
  { date: '2026-05-29', day: 'Fri', type: 'card', image: 'Day40_Call_the_shots.png',                week: 8, dayNum: 40 },
  { date: '2026-05-30', day: 'Sat', type: 'quiz', week: 8, quizTexts: [
    { q: 'Q36. The experiment failed, so the team has to go ______ and start from scratch.\n\nA. up in the air\nB. outside the box\nC. back to square one\nD. call the shots\n\n回覆 36A / 36B / 36C / 36D' },
    { q: 'Q37. Everyone in the group project is working hard except Tom. He\'s not ______.\n\nA. calling the shots\nB. pulling his weight\nC. thinking outside the box\nD. back to square one\n\n回覆 37A / 37B / 37C / 37D' },
    { q: 'Q38. We need a creative solution — let\'s ______.\n\nA. go back to square one\nB. call the shots\nC. think outside the box\nD. pull our weight\n\n回覆 38A / 38B / 38C / 38D' },
    { q: 'Q39. "Are we going on the field trip?" "It\'s still ______ — the teacher hasn\'t decided yet."\n\nA. back to square one\nB. outside the box\nC. calling the shots\nD. up in the air\n\n回覆 39A / 39B / 39C / 39D' },
    { q: 'Q40. The team captain is the one who ______ — she decides the strategy.\n\nA. pulls her weight\nB. calls the shots\nC. goes back to square one\nD. thinks outside the box\n\n回覆 40A / 40B / 40C / 40D' },
  ]},

  // ===== Week 9：Growth & Mindset =====
  { date: '2026-06-01', day: 'Mon', type: 'card', image: 'Day41_Step_out_of_ones_comfort_zone.png', week: 9, dayNum: 41 },
  { date: '2026-06-02', day: 'Tue', type: 'card', image: 'Day42_The_bigger_picture.png',            week: 9, dayNum: 42 },
  { date: '2026-06-03', day: 'Wed', type: 'card', image: 'Day43_Take_with_a_grain_of_salt.png',     week: 9, dayNum: 43 },
  { date: '2026-06-04', day: 'Thu', type: 'card', image: 'Day44_Turn_over_a_new_leaf.png',          week: 9, dayNum: 44 },
  { date: '2026-06-05', day: 'Fri', type: 'card', image: 'Day45_Broaden_ones_horizons.png',         week: 9, dayNum: 45 },
  { date: '2026-06-06', day: 'Sat', type: 'quiz', week: 9, quizTexts: [
    { q: 'Q41. She was afraid of public speaking, but she decided to ______ and join the speech contest.\n\nA. see the bigger picture\nB. step out of her comfort zone\nC. take it with a grain of salt\nD. turn over a new leaf\n\n回覆 41A / 41B / 41C / 41D' },
    { q: 'Q42. "Don\'t get upset about one bad test score. Look at ______ — you\'ve improved a lot this semester."\n\nA. the bigger picture\nB. a grain of salt\nC. a new leaf\nD. your comfort zone\n\n回覆 42A / 42B / 42C / 42D' },
    { q: 'Q43. "He said he can run 100m in 10 seconds? I\'d ______."\n\nA. step out of my comfort zone\nB. see the bigger picture\nC. take that with a grain of salt\nD. broaden my horizons\n\n回覆 43A / 43B / 43C / 43D' },
    { q: 'Q44. After getting in trouble, he promised to ______ and start studying harder.\n\nA. broaden his horizons\nB. call the shots\nC. turn over a new leaf\nD. take it with a grain of salt\n\n回覆 44A / 44B / 44C / 44D' },
    { q: 'Q45. Traveling abroad really helped her ______.\n\nA. turn over a new leaf\nB. step out of her comfort zone\nC. take it with a grain of salt\nD. broaden her horizons\n\n回覆 45A / 45B / 45C / 45D' },
  ]},

  // ===== Week 10：Travel & Culture ✈️ =====
  { date: '2026-06-08', day: 'Mon', type: 'card', image: 'Day46_Jet_lag_and_Book_a_flight.png',          week: 10, dayNum: 46 },
  { date: '2026-06-09', day: 'Tue', type: 'card', image: 'Day47_Off_the_beaten_path_and_Tourist_trap.png', week: 10, dayNum: 47 },
  { date: '2026-06-10', day: 'Wed', type: 'card', image: 'Day48_When_in_Rome.png',                       week: 10, dayNum: 48 },
  { date: '2026-06-11', day: 'Thu', type: 'card', image: 'Day49_Catch_a_flight_and_Miss_the_boat.png',   week: 10, dayNum: 49 },
  { date: '2026-06-12', day: 'Fri', type: 'card', image: 'Day50_Wanderlust_and_Itchy_feet.png',          week: 10, dayNum: 50 },
  { date: '2026-06-13', day: 'Sat', type: 'quiz', week: 10, quizTexts: [
    { q: 'Q46. "I just got back from Tokyo and I\'m totally exhausted — I have terrible ______."\n\nA. wanderlust\nB. jet lag\nC. itchy feet\nD. tourist trap\n\n回覆 46A / 46B / 46C / 46D' },
    { q: 'Q47. We avoided the crowded shopping street and discovered a quiet little café ______.\n\nA. when in Rome\nB. as a tourist trap\nC. off the beaten path\nD. with itchy feet\n\n回覆 47A / 47B / 47C / 47D' },
    { q: 'Q48. "I don\'t usually eat snails, but ______! It\'s a French specialty."\n\nA. miss the boat\nB. when in Rome\nC. tourist trap\nD. itchy feet\n\n回覆 48A / 48B / 48C / 48D' },
    { q: 'Q49. The early-bird flight discount ended yesterday. We waited too long and ______.\n\nA. caught a flight\nB. booked a flight\nC. got jet lag\nD. missed the boat\n\n回覆 49A / 49B / 49C / 49D' },
    { q: 'Q50. After ten years at the same company, she\'s getting ______ and wants to move abroad.\n\nA. jet lag\nB. a tourist trap\nC. itchy feet\nD. off the beaten path\n\n回覆 50A / 50B / 50C / 50D' },
  ]},

  // ===== Week 11：Job Interview & Career 💼 =====
  { date: '2026-06-15', day: 'Mon', type: 'card', image: 'Day51_Land_a_job_and_Get_foot_in_the_door.png',   week: 11, dayNum: 51 },
  { date: '2026-06-16', day: 'Tue', type: 'card', image: 'Day52_On_the_same_page_and_In_the_loop.png',       week: 11, dayNum: 52 },
  { date: '2026-06-17', day: 'Wed', type: 'card', image: 'Day53_Take_initiative_and_Go_above_and_beyond.png', week: 11, dayNum: 53 },
  { date: '2026-06-18', day: 'Thu', type: 'card', image: 'Day54_Climb_the_corporate_ladder.png',             week: 11, dayNum: 54 },
  { date: '2026-06-19', day: 'Fri', type: 'card', image: 'Day55_Burn_out_and_Call_it_a_day.png',             week: 11, dayNum: 55 },
  { date: '2026-06-20', day: 'Sat', type: 'quiz', week: 11, quizTexts: [
    { q: 'Q51. After months of interviews, she finally ______ at a top tech company!\n\nA. burned out\nB. landed a job\nC. called it a day\nD. climbed the ladder\n\n回覆 51A / 51B / 51C / 51D' },
    { q: 'Q52. Before the meeting, let\'s confirm we\'re all ______ about the budget.\n\nA. in the loop\nB. on the same page\nC. above and beyond\nD. taking initiative\n\n回覆 52A / 52B / 52C / 52D' },
    { q: 'Q53. She didn\'t wait for instructions — she ______ and started fixing the problem herself.\n\nA. burned out\nB. called it a day\nC. took initiative\nD. fell behind\n\n回覆 53A / 53B / 53C / 53D' },
    { q: 'Q54. He started as an intern, and after 15 years he\'s now CEO. He really ______.\n\nA. burned out\nB. called it a day\nC. lost his cool\nD. climbed the corporate ladder\n\n回覆 54A / 54B / 54C / 54D' },
    { q: 'Q55. We\'ve been working since 8 a.m. and it\'s now 8 p.m. — let\'s ______.\n\nA. take initiative\nB. call it a day\nC. land a job\nD. go above and beyond\n\n回覆 55A / 55B / 55C / 55D' },
  ]},

  // ===== Week 12：Food & Eating 🍰 =====
  { date: '2026-06-22', day: 'Mon', type: 'card', image: 'Day56_A_piece_of_cake_and_A_tough_cookie.png',   week: 12, dayNum: 56 },
  { date: '2026-06-23', day: 'Tue', type: 'card', image: 'Day57_Food_coma_and_Stuffed.png',                week: 12, dayNum: 57 },
  { date: '2026-06-24', day: 'Wed', type: 'card', image: 'Day58_Eat_like_a_horse_and_Eat_like_a_bird.png', week: 12, dayNum: 58 },
  { date: '2026-06-25', day: 'Thu', type: 'card', image: 'Day59_Bring_home_the_bacon_and_Breadwinner.png', week: 12, dayNum: 59 },
  { date: '2026-06-26', day: 'Fri', type: 'card', image: 'Day60_Spill_the_beans_and_In_a_nutshell.png',    week: 12, dayNum: 60 },
  { date: '2026-06-27', day: 'Sat', type: 'quiz', week: 12, quizTexts: [
    { q: 'Q56. "Don\'t worry about the presentation — for someone like you, it\'s ______."\n\nA. a tough cookie\nB. a piece of cake\nC. food coma\nD. spilling the beans\n\n回覆 56A / 56B / 56C / 56D' },
    { q: 'Q57. After eating three plates of pasta, I went straight into a ______ and fell asleep on the sofa.\n\nA. piece of cake\nB. tough cookie\nC. food coma\nD. nutshell\n\n回覆 57A / 57B / 57C / 57D' },
    { q: 'Q58. He\'s tall and athletic, and he ______ — three burgers for lunch is normal!\n\nA. eats like a bird\nB. eats like a horse\nC. is stuffed\nD. is a tough cookie\n\n回覆 58A / 58B / 58C / 58D' },
    { q: 'Q59. Since her husband\'s accident, she\'s the only one who ______ for the family.\n\nA. eats like a horse\nB. brings home the bacon\nC. spills the beans\nD. is a piece of cake\n\n回覆 59A / 59B / 59C / 59D' },
    { q: 'Q60. "Sarah! Don\'t ______ about the surprise party — Mom can\'t know!"\n\nA. eat like a bird\nB. spill the beans\nC. break the bank\nD. bring home the bacon\n\n回覆 60A / 60B / 60C / 60D' },
  ]},

  // ===== Week 13：Emotions & Reactions 😊 =====
  { date: '2026-06-29', day: 'Mon', type: 'card', image: 'Day61_On_cloud_nine_and_Over_the_moon.png',          week: 13, dayNum: 61 },
  { date: '2026-06-30', day: 'Tue', type: 'card', image: 'Day62_Fed_up_and_Had_it_up_to_here.png',             week: 13, dayNum: 62 },
  { date: '2026-07-01', day: 'Wed', type: 'card', image: 'Day63_Down_in_the_dumps_and_Under_the_weather.png',  week: 13, dayNum: 63 },
  { date: '2026-07-02', day: 'Thu', type: 'card', image: 'Day64_Freak_out_and_Lose_ones_cool.png',             week: 13, dayNum: 64 },
  { date: '2026-07-03', day: 'Fri', type: 'card', image: 'Day65_Chill_out_and_Take_it_easy.png',               week: 13, dayNum: 65 },
  { date: '2026-07-04', day: 'Sat', type: 'quiz', week: 13, quizTexts: [
    { q: 'Q61. She just got engaged to her boyfriend of five years — she\'s totally ______!\n\nA. fed up\nB. on cloud nine\nC. under the weather\nD. losing her cool\n\n回覆 61A / 61B / 61C / 61D' },
    { q: 'Q62. "I\'ve ______ with my roommate leaving dirty dishes everywhere — I\'m moving out!"\n\nA. taken it easy\nB. chilled out\nC. been on cloud nine\nD. had it up to here\n\n回覆 62A / 62B / 62C / 62D' },
    { q: 'Q63. "I\'m feeling a bit ______ today — I think I\'m catching a cold."\n\nA. on cloud nine\nB. over the moon\nC. under the weather\nD. fed up\n\n回覆 63A / 63B / 63C / 63D' },
    { q: 'Q64. Her boss yelled at her for no reason, and she finally ______ in the meeting.\n\nA. chilled out\nB. lost her cool\nC. took it easy\nD. went over the moon\n\n回覆 64A / 64B / 64C / 64D' },
    { q: 'Q65. "Stop worrying about the test! ______ — you\'ve studied hard."\n\nA. Freak out\nB. Be fed up\nC. Take it easy\nD. Lose your cool\n\n回覆 65A / 65B / 65C / 65D' },
  ]},

  // ===== Week 14：Money & Shopping 💰 =====
  { date: '2026-07-06', day: 'Mon', type: 'card', image: 'Day66_Tight_budget_and_Pinch_pennies.png',     week: 14, dayNum: 66 },
  { date: '2026-07-07', day: 'Tue', type: 'card', image: 'Day67_Splurge_and_Break_the_bank.png',         week: 14, dayNum: 67 },
  { date: '2026-07-08', day: 'Wed', type: 'card', image: 'Day68_A_steal_and_Rip_off.png',                week: 14, dayNum: 68 },
  { date: '2026-07-09', day: 'Thu', type: 'card', image: 'Day69_Save_up_and_Put_aside.png',              week: 14, dayNum: 69 },
  { date: '2026-07-10', day: 'Fri', type: 'card', image: 'Day70_Live_paycheck_to_paycheck.png',          week: 14, dayNum: 70 },
  { date: '2026-07-11', day: 'Sat', type: 'quiz', week: 14, quizTexts: [
    { q: 'Q66. "I can\'t afford that fancy restaurant this month — I\'m ______."\n\nA. splurging\nB. on a tight budget\nC. breaking the bank\nD. living paycheck to paycheck\n\n回覆 66A / 66B / 66C / 66D' },
    { q: 'Q67. "It\'s my birthday, so I decided to ______ on a really nice dinner."\n\nA. pinch pennies\nB. break the bank\nC. splurge\nD. put aside\n\n回覆 67A / 67B / 67C / 67D' },
    { q: 'Q68. "This designer jacket was only $30 at the thrift store — what ______!"\n\nA. a rip-off\nB. a steal\nC. a tight budget\nD. a breadwinner\n\n回覆 68A / 68B / 68C / 68D' },
    { q: 'Q69. She tries to ______ $300 every month for her future house.\n\nA. splurge\nB. break the bank\nC. put aside\nD. rip off\n\n回覆 69A / 69B / 69C / 69D' },
    { q: 'Q70. With high rent and student loans, many young people end up ______.\n\nA. splurging\nB. breaking the bank\nC. living paycheck to paycheck\nD. saving up\n\n回覆 70A / 70B / 70C / 70D' },
  ]},

  // ===== Week 15：Goals & Productivity 🎯 =====
  { date: '2026-07-13', day: 'Mon', type: 'card', image: 'Day71_Set_the_bar_high_and_Aim_high.png',          week: 15, dayNum: 71 },
  { date: '2026-07-14', day: 'Tue', type: 'card', image: 'Day72_Hit_the_ground_running.png',                 week: 15, dayNum: 72 },
  { date: '2026-07-15', day: 'Wed', type: 'card', image: 'Day73_Drop_the_ball_and_Fall_behind.png',          week: 15, dayNum: 73 },
  { date: '2026-07-16', day: 'Thu', type: 'card', image: 'Day74_Bite_off_more_than_one_can_chew.png',        week: 15, dayNum: 74 },
  { date: '2026-07-17', day: 'Fri', type: 'card', image: 'Day75_On_track_and_Behind_schedule.png',           week: 15, dayNum: 75 },
  { date: '2026-07-18', day: 'Sat', type: 'quiz', week: 15, quizTexts: [
    { q: 'Q71. Her older sister was the valedictorian, so she really ______ for everyone in the family.\n\nA. dropped the ball\nB. set the bar high\nC. fell behind\nD. bit off more than she could chew\n\n回覆 71A / 71B / 71C / 71D' },
    { q: 'Q72. "On her first day, she ______ — she already closed two deals before lunch!"\n\nA. dropped the ball\nB. fell behind\nC. hit the ground running\nD. bit off more than she could chew\n\n回覆 72A / 72B / 72C / 72D' },
    { q: 'Q73. "I really ______ — I forgot to email the client and we lost the deal."\n\nA. set the bar high\nB. aimed high\nC. dropped the ball\nD. hit the ground running\n\n回覆 73A / 73B / 73C / 73D' },
    { q: 'Q74. Five clubs, three classes, and a part-time job? You\'re ______.\n\nA. on track\nB. setting the bar high\nC. hitting the ground running\nD. biting off more than you can chew\n\n回覆 74A / 74B / 74C / 74D' },
    { q: 'Q75. The construction was supposed to finish in May, but they\'re three weeks ______.\n\nA. on track\nB. behind schedule\nC. ahead of schedule\nD. above and beyond\n\n回覆 75A / 75B / 75C / 75D' },
  ]},

  // ===== Week 16：School & Studying 📚 =====
  { date: '2026-07-20', day: 'Mon', type: 'card', image: 'Day76_Cram_and_Pull_an_all_nighter.png',           week: 16, dayNum: 76 },
  { date: '2026-07-21', day: 'Tue', type: 'card', image: 'Day77_Ace_a_test_and_Pass_with_flying_colors.png', week: 16, dayNum: 77 },
  { date: '2026-07-22', day: 'Wed', type: 'card', image: 'Day78_Flunk_and_Barely_scrape_by.png',             week: 16, dayNum: 78 },
  { date: '2026-07-23', day: 'Thu', type: 'card', image: 'Day79_Hit_the_books_and_Bookworm.png',             week: 16, dayNum: 79 },
  { date: '2026-07-24', day: 'Fri', type: 'card', image: 'Day80_Brain_fart_and_Blank_out.png',               week: 16, dayNum: 80 },
  { date: '2026-07-25', day: 'Sat', type: 'quiz', week: 16, quizTexts: [
    { q: 'Q76. "I haven\'t studied all month, so I\'m going to have to ______ tonight."\n\nA. ace the test\nB. flunk\nC. cram\nD. blank out\n\n回覆 76A / 76B / 76C / 76D' },
    { q: 'Q77. She studied for two weeks and ______ — she got 99 out of 100!\n\nA. flunked\nB. barely scraped by\nC. blanked out\nD. aced the test\n\n回覆 77A / 77B / 77C / 77D' },
    { q: 'Q78. "I got a 60 on the final — I ______, but at least I passed."\n\nA. aced it\nB. barely scraped by\nC. passed with flying colors\nD. hit the books\n\n回覆 78A / 78B / 78C / 78D' },
    { q: 'Q79. "Finals are next week — I really need to stop watching Netflix and ______."\n\nA. pull an all-nighter\nB. blank out\nC. hit the books\nD. flunk\n\n回覆 79A / 79B / 79C / 79D' },
    { q: 'Q80. "I knew the answer perfectly, but when the teacher called on me, I totally ______."\n\nA. aced it\nB. blanked out\nC. crammed\nD. hit the books\n\n回覆 80A / 80B / 80C / 80D' },
  ]},
];

// 補看用的圖卡列表
const weekCards = {
  1: ['Day01_It_speaks_volumes.png', 'Day02_On_the_fence.png', 'Day03_A_blessing_in_disguise.png', 'Day04_Cut_to_the_chase.png', 'Day05_Go_the_extra_mile.png'],
  2: ['Day06_Get_something_off_ones_chest.png', 'Day07_Hit_it_off.png', 'Day08_Keep_someone_in_the_loop.png', 'Day09_Rub_someone_the_wrong_way.png', 'Day10_See_eye_to_eye.png'],
  3: ['Day11_Doomscrolling_and_Scroll_hole.png', 'Day12_Phubbing_and_Left_on_read.png', 'Day13_FOMO.png', 'Day14_Digital_detox.png', 'Day15_Nomophobia.png'],
  4: ['Day16_Introvert_Extrovert_Ambivert.png', 'Day17_Break_the_ice_and_Warm_up_to_someone.png', 'Day18_Come_out_of_ones_shell_and_Step_out_of_comfort_zone.png', 'Day19_Culture_shock_and_Find_common_ground.png', 'Day20_Social_butterfly_and_Wallflower.png'],
  5: ['Day21_Work_out_and_Hit_the_gym.png', 'Day22_Warm_up_Cool_down_Reps_Sets.png', 'Day23_No_pain_no_gain_Push_limits_Go_hard.png', 'Day24_Gym_rat_and_Skip_leg_day.png', 'Day25_Get_in_shape_Let_oneself_go_Body_types.png'],
  6: ['Day26_Have_a_crush_on_and_Butterflies.png', 'Day27_Shoot_ones_shot_and_Make_the_first_move.png', 'Day28_Play_hard_to_get_and_Friend_zone.png', 'Day29_Fall_for_someone_and_Love_at_first_sight.png', 'Day30_Head_over_heels_and_Sweep_off_feet.png'],
  7: ['Day31_Go_steady_and_PDA.png', 'Day32_On_the_rocks_and_Cold_shoulder.png', 'Day33_Red_flag_and_Toxic_relationship.png', 'Day34_Cheat_on_and_Two_time.png', 'Day35_Two_endings_Break_up_Tie_the_knot.png'],
  8: ['Day36_Back_to_square_one.png', 'Day37_Pull_ones_weight.png', 'Day38_Think_outside_the_box.png', 'Day39_Up_in_the_air.png', 'Day40_Call_the_shots.png'],
  9: ['Day41_Step_out_of_ones_comfort_zone.png', 'Day42_The_bigger_picture.png', 'Day43_Take_with_a_grain_of_salt.png', 'Day44_Turn_over_a_new_leaf.png', 'Day45_Broaden_ones_horizons.png'],
  10: ['Day46_Jet_lag_and_Book_a_flight.png', 'Day47_Off_the_beaten_path_and_Tourist_trap.png', 'Day48_When_in_Rome.png', 'Day49_Catch_a_flight_and_Miss_the_boat.png', 'Day50_Wanderlust_and_Itchy_feet.png'],
  11: ['Day51_Land_a_job_and_Get_foot_in_the_door.png', 'Day52_On_the_same_page_and_In_the_loop.png', 'Day53_Take_initiative_and_Go_above_and_beyond.png', 'Day54_Climb_the_corporate_ladder.png', 'Day55_Burn_out_and_Call_it_a_day.png'],
  12: ['Day56_A_piece_of_cake_and_A_tough_cookie.png', 'Day57_Food_coma_and_Stuffed.png', 'Day58_Eat_like_a_horse_and_Eat_like_a_bird.png', 'Day59_Bring_home_the_bacon_and_Breadwinner.png', 'Day60_Spill_the_beans_and_In_a_nutshell.png'],
  13: ['Day61_On_cloud_nine_and_Over_the_moon.png', 'Day62_Fed_up_and_Had_it_up_to_here.png', 'Day63_Down_in_the_dumps_and_Under_the_weather.png', 'Day64_Freak_out_and_Lose_ones_cool.png', 'Day65_Chill_out_and_Take_it_easy.png'],
  14: ['Day66_Tight_budget_and_Pinch_pennies.png', 'Day67_Splurge_and_Break_the_bank.png', 'Day68_A_steal_and_Rip_off.png', 'Day69_Save_up_and_Put_aside.png', 'Day70_Live_paycheck_to_paycheck.png'],
  15: ['Day71_Set_the_bar_high_and_Aim_high.png', 'Day72_Hit_the_ground_running.png', 'Day73_Drop_the_ball_and_Fall_behind.png', 'Day74_Bite_off_more_than_one_can_chew.png', 'Day75_On_track_and_Behind_schedule.png'],
  16: ['Day76_Cram_and_Pull_an_all_nighter.png', 'Day77_Ace_a_test_and_Pass_with_flying_colors.png', 'Day78_Flunk_and_Barely_scrape_by.png', 'Day79_Hit_the_books_and_Bookworm.png', 'Day80_Brain_fart_and_Blank_out.png'],
};

module.exports = { schedule, weekCards };
