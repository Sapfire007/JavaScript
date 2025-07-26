// RANDOM NUMBER GENERATOR

let randomNum = Math.random();
console.log(randomNum);

// Rolling a dice
let randomNum2 = Math.floor(Math.random()*6) + 1;
console.log(randomNum2);

// Within specified range 
let min = 50;
let max = 100;
let randomNum3 = Math.floor(Math.random()*(max - min)) + min;
console.log(randomNum3);

const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min1 = 1;
const max1 = 6;
let randomNum4;
let randomNum5;
let randomNum6;

myButton.onclick = function () {
    randomNum4 = Math.floor(Math.random()*max1) + min1;
    randomNum5 = Math.floor(Math.random()*max1) + min1;
    randomNum6 = Math.floor(Math.random()*max1) + min1;
    myLabel1.textContent = randomNum4;
    myLabel2.textContent = randomNum5;
    myLabel3.textContent = randomNum6;
}