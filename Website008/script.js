// Math = built-in object that provides a collection of
//        properties and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
console.log(z);
console.log(Math.round(2.54));
console.log(Math.round(-2.5));
console.log(Math.round(-2.94));
console.log(Math.round(2.94));
console.log(Math.floor(2.94));
console.log(Math.floor(-2.5));
console.log(Math.floor(2.54));
console.log(Math.ceil(2.94));
console.log(Math.ceil(-2.5));
console.log(Math.ceil(2.54));
console.log(Math.ceil(2.14));
console.log(Math.trunc(2.14));
console.log(Math.trunc(2.5));
console.log(Math.trunc(2.14));
console.log(Math.trunc(2.98));
console.log(Math.pow(2, 5));
console.log(Math.sqrt(81));
console.log(Math.log(2));
console.log(Math.sin(90));
console.log(Math.cos(90));
console.log(Math.tan(90));
console.log(Math.abs(-90.99));
console.log(Math.sign(-90.99));
console.log(Math.sign(90.99));
console.log(Math.sign(0));

let x1 = 54;

let max = Math.max(x, y, x1);
console.log(max);
let min = Math.min(x, y, x1);
console.log(min);