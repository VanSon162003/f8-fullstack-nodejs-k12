// const time1 = new Date();

// console.log(time1);

// console.log(typeof time1);

// console.log(new Date("2025-02-01, 10:00:00z"));

const date1 = Date.now();

const date2 = new Date("2003-03-16 00:00:00");

const date3 = date1 - date2.getTime();

console.log({ date2 });

console.log(Math.floor(date3 / (1000 * 60 * 60 * 24)));

/////////////////

const date4 = new Date("2025-01-06 00:00:00");
const date5 = new Date();

const dayNow = date5.getDay() - date4.getDay();

console.log(dayNow * (24 * 60));

//////////////////
const day6 = new Date("2026-01-01 00:00:00");

const day7 = day6.getDay();

console.log(day7);
