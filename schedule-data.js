// 每日推播排程（已調整：Day 1-5 已手動發送，程式從 4/11 Week 1 Quiz 開始）
// type: 'card' = 每日片語圖卡, 'quiz' = 週六測驗圖卡

const schedule = [
  // ===== Week 1 Quiz（Day 1-5 已手動發送，只需發測驗）=====
  { date: '2026-04-11', day: 'Sat', type: 'quiz', week: 1, quizImages: [
    'Week01_Quiz_Q01.png', 'Week01_Quiz_Q02.png', 'Week01_Quiz_Q03.png', 'Week01_Quiz_Q04.png', 'Week01_Quiz_Q05.png'
  ]},

  // ===== Week 2（4/13 起程式接管）=====
  { date: '2026-04-13', day: 'Mon', type: 'card', image: 'Day06_Get_something_off_ones_chest.png', week: 2, dayNum: 6 },
  { date: '2026-04-14', day: 'Tue', type: 'card', image: 'Day07_Hit_it_off.png',                   week: 2, dayNum: 7 },
  { date: '2026-04-15', day: 'Wed', type: 'card', image: 'Day08_Keep_someone_in_the_loop.png',     week: 2, dayNum: 8 },
  { date: '2026-04-16', day: 'Thu', type: 'card', image: 'Day09_Rub_someone_the_wrong_way.png',    week: 2, dayNum: 9 },
  { date: '2026-04-17', day: 'Fri', type: 'card', image: 'Day10_See_eye_to_eye.png',               week: 2, dayNum: 10 },
  { date: '2026-04-18', day: 'Sat', type: 'quiz', week: 2, quizImages: [
    'Week02_Quiz_Q06.png', 'Week02_Quiz_Q07.png', 'Week02_Quiz_Q08.png', 'Week02_Quiz_Q09.png', 'Week02_Quiz_Q10.png'
  ]},

  // ===== Week 3 =====
  { date: '2026-04-20', day: 'Mon', type: 'card', image: 'Day11_Back_to_square_one.png',           week: 3, dayNum: 11 },
  { date: '2026-04-21', day: 'Tue', type: 'card', image: 'Day12_Pull_ones_weight.png',             week: 3, dayNum: 12 },
  { date: '2026-04-22', day: 'Wed', type: 'card', image: 'Day13_Think_outside_the_box.png',        week: 3, dayNum: 13 },
  { date: '2026-04-23', day: 'Thu', type: 'card', image: 'Day14_Up_in_the_air.png',                week: 3, dayNum: 14 },
  { date: '2026-04-24', day: 'Fri', type: 'card', image: 'Day15_Call_the_shots.png',               week: 3, dayNum: 15 },
  { date: '2026-04-25', day: 'Sat', type: 'quiz', week: 3, quizImages: [
    'Week03_Quiz_Q11.png', 'Week03_Quiz_Q12.png', 'Week03_Quiz_Q13.png', 'Week03_Quiz_Q14.png', 'Week03_Quiz_Q15.png'
  ]},

  // ===== Week 4 =====
  { date: '2026-04-27', day: 'Mon', type: 'card', image: 'Day16_Step_out_of_ones_comfort_zone.png', week: 4, dayNum: 16 },
  { date: '2026-04-28', day: 'Tue', type: 'card', image: 'Day17_The_bigger_picture.png',            week: 4, dayNum: 17 },
  { date: '2026-04-29', day: 'Wed', type: 'card', image: 'Day18_Take_something_with_a_grain_of_salt.png', week: 4, dayNum: 18 },
  { date: '2026-04-30', day: 'Thu', type: 'card', image: 'Day19_Turn_over_a_new_leaf.png',          week: 4, dayNum: 19 },
  { date: '2026-05-01', day: 'Fri', type: 'card', image: 'Day20_Broaden_ones_horizons.png',         week: 4, dayNum: 20 },
  { date: '2026-05-02', day: 'Sat', type: 'quiz', week: 4, quizImages: [
    'Week04_Quiz_Q16.png', 'Week04_Quiz_Q17.png', 'Week04_Quiz_Q18.png', 'Week04_Quiz_Q19.png', 'Week04_Quiz_Q20.png'
  ]},
];

// W1~W4 補看用的圖卡列表
const weekCards = {
  1: ['Day01_It_speaks_volumes.png', 'Day02_On_the_fence.png', 'Day03_A_blessing_in_disguise.png', 'Day04_Cut_to_the_chase.png', 'Day05_Go_the_extra_mile.png'],
  2: ['Day06_Get_something_off_ones_chest.png', 'Day07_Hit_it_off.png', 'Day08_Keep_someone_in_the_loop.png', 'Day09_Rub_someone_the_wrong_way.png', 'Day10_See_eye_to_eye.png'],
  3: ['Day11_Back_to_square_one.png', 'Day12_Pull_ones_weight.png', 'Day13_Think_outside_the_box.png', 'Day14_Up_in_the_air.png', 'Day15_Call_the_shots.png'],
  4: ['Day16_Step_out_of_ones_comfort_zone.png', 'Day17_The_bigger_picture.png', 'Day18_Take_something_with_a_grain_of_salt.png', 'Day19_Turn_over_a_new_leaf.png', 'Day20_Broaden_ones_horizons.png'],
};

module.exports = { schedule, weekCards };
