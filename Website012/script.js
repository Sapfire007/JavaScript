// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon";
console.log(greeting);

let isStudent = true;
let message1 = isStudent ? "You're a student" : "You're not a student";
console.log(message1);

let purchase = 125;
let message2 = purchase > 100 ? `Your purchase is over 100$ and you're eligible for the 10% discount!\nYour total payable amount is $${(1-0.1)*purchase}` : `Your total payable amount is $${purchase}`;
console.log(message2);