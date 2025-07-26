// variable = A container that stores a value. 
//            Behaves as if it were the value it contains. 

// 1. declaration   let x;
// 2. assignment    x = 100;

let x;
// let x; <- error

let y;

x = 100;

console.log(x);

x = 123;
console.log(x);

let z = 7;
console.log(z);

let age = 18;
console.log(age);

let price = 10.99;
console.log(price);

let gpa = 9.2;
console.log(gpa);

console.log(`You are ${age} years old.`);
console.log(typeof(gpa));
console.log(`The price is ${price}`);
console.log(typeof(price));

console.log(`Your GPA is ${gpa}`);

let firstName = "Saptarshi";
console.log(typeof(firstName));
console.log(firstName);
console.log(`My name is ${firstName}`);

let email = "sap007@yahoo.com";
console.log(`My e-mail is: ${email}`);

let online = true;
console.log(typeof(online));
console.log(`Sap is online: ${online}`);
console.log(`Sap is offline: `+false);


let fullName = "Saptarshi Bose";
let myAge = 18;
let isStudent = true;
document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `I am ${myAge} years old`;
document.getElementById("p3").textContent = `Am I a student: ${isStudent}`;
