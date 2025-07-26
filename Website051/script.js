// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

const date = new Date();
console.log(date);

// Date(year, month, day, hour, minute, second, ms)
const date2 = new Date(2024, 10, 17, 5, 6, 7, 8);
console.log(date2);

const date3 = new Date("2024-11-17T12:00:00Z");
console.log(date3);

const date4 = new Date(0);
console.log(date4);

const date5 = new Date(7777777777777777);
console.log(date5);

const date6 = new Date();
const year6 = date.getFullYear();
console.log(year6);
const month6 = date.getMonth();
console.log(month6);
const day6 = date.getDate();
console.log(day6);
const hour6 = date.getHours();
console.log(hour6);
const minutes6 = date.getMinutes();
console.log(minutes6);
const seconds6 = date.getSeconds();
console.log(seconds6);
const milliseconds6 = date.getMilliseconds();
console.log(milliseconds6);
const dayOfWeek6 = date.getDay();
console.log(dayOfWeek6);

// ========================================================

const date7 = new Date();
date7.setFullYear(2024);
date7.setMonth(0);
date7.setDate(1);
date7.setHours(2);
date7.setMinutes(3);
date7.setSeconds(4);
console.log(date7);

// ========================================================

const date8 = new Date("2023-12-31");
const date9 = new Date("2024-01-01");

if(date9 > date8){
    console.log("HAPPY NEW YEAR!");
}