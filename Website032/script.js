// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)

let numbers = [1, 2, 3, 4,5];

function display(element){
    console.log(element);
}

function double(element, index, array){
    array[index] = element*2
}

numbers.forEach(double);
numbers.forEach(display);

let fruits = ["apple", "orange", "banana", "coconut"];


function display2(element){
    console.log(element);
}

fruits.forEach(display2);

function convertToUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}
fruits.forEach(convertToUpperCase);
fruits.forEach(display2);

function convertToLowerCase(element, index, array){
    array[index] = element.toLowerCase();
}
fruits.forEach(convertToLowerCase);
fruits.forEach(display2);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
fruits.forEach(capitalize);
fruits.forEach(display2);