// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by boundling them into an array

//                   spread = expands an array into separate elements 
//                   rest = bundles separate elements into an array

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods){
    console.log(foods);
}

openFridge(food1, food2, food3, food4, food5);

function getFood(...foods){
    return foods;
}

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1);
console.log(total);

const total2 = sum(1, 2, 3, 4, 5);
console.log(total2);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length ;
}

const avg = getAverage(75, 100, 55, 62, 89);
console.log(avg);

function combineStrings(...strings) {
    return strings.join();
}

const email = combineStrings("sap", "@", "yahoo", ".com");
console.log(email);