// sort() = method used to sort elements of an array in place. 
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["apple", "orange", "banana", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 4, 2, 9, 3, 8, 10, 7, 5, 6];

numbers.sort((a, b) => a - b);

console.log(numbers);

// For reverse order:
numbers.sort((a, b) => b - a);
console.log(numbers);

const people = [
    {
        name: "Saptarshi", age: 18, gpa: 9
    },
    {
        name: "Rohan", age: 19, gpa: 9.5
    },
    {
        name: "Ankit", age: 17, gpa: 8.5
    },
    {
        name: "Sumit", age: 20, gpa: 7
    }
]

people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);
people.sort((a, b) => a.name - b.name);
console.log(people);

// Lexicographic order:
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

// Reverse Lexicographic order:
people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);