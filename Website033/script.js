// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

const numbers = [1, 2, 3, 4, 5];

function square(element){
    return Math.pow(element, 2);
}

const squares = numbers.map(square);
console.log(squares);

function cube(element){
    return Math.pow(element, 3);
}

const cubes = numbers.map(cube);
console.log(cubes);

const students = ["Alex", "Bob", "Charlie", "David"];
function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element) {
    return element.toLowerCase();
}
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsUpper);
console.log(studentsLower);


const dates = ["2024-9-19", "2006-11-17", "2020-12-31"];
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
const formattedDates = dates.map(formatDates);
console.log(formattedDates);