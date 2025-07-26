// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the element)

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let maximum = Math.max(numbers);
console.log(maximum);
maximum = Math.max(...numbers);
console.log(maximum);
let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Saptarshi Bose";
let letters = [...username];
console.log(letters);
let letters2 = [...username].join("-");
console.log(letters2);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrot", "potatoes", "turnip"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);