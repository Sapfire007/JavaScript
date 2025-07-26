//  type conversion = change the datatype of a value to another
//                    (string, numbers, booleans)

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof(age));



let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof(x));
console.log(y, typeof(y));
console.log(z, typeof(z));


let a = "0";
let b = "0";
let c = "0";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof(a));
console.log(b, typeof(b));
console.log(c, typeof(c));


let d = "";
let e = "";
let f = "";

d = Number();
e = String();
f = Boolean();

console.log(d, typeof(d));
console.log(e, typeof(e));
console.log(f, typeof(f));