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
};

module.exports = { schedule, weekCards };
