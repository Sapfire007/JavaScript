// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits[0] = "coconut"
console.log(fruits[0]);
console.log(fruits);

fruits[3] = "pineapple";
console.log(fruits);
console.log(fruits[3]);
fruits[10] = "pear";
console.log(fruits);

fruits.push("apple");
console.log(fruits.indexOf("apple"));
console.log(fruits[fruits.indexOf("apple")]);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("mango");
console.log(fruits);
fruits.shift("mango");
console.log(fruits);

let numOfFruits = fruits.length;
console.log(numOfFruits)
console.log(fruits.indexOf("tomato"));

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.sort());
console.log(fruits.sort().reverse());