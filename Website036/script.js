// function declaration = define a reusable block of code
//                        that performs a specific task

function hi(){
    console.log("Hi");
}

// function expressions = a way to define functions as 
//                        values or variables

const hello = function(){
    console.log("Hello");
}

hello();

setTimeout(
    function(){
        console.log("Hello World!");
    }, 3000
);

const numbers = [1, 2, 3, 4, 5, 6];
// function square(element){
//     return Math.pow(element, 2);
// }
const squares = numbers.map(
    function (element){
        return Math.pow(element, 2);
    }
);
console.log(squares);
const cubes = numbers.map(
    function (element){
        return Math.pow(element, 3);
    }
);
console.log(cubes);
console.log(numbers.filter(function (element){return element%2 === 0;}));
const oddNums = numbers.filter(
    function (element){
        return element % 2 !== 0;
    }
);
console.log(oddNums);
const total = numbers.reduce(
    function (accumulator, element){
        return accumulator + element;
    }
);
console.log(total);