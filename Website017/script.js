// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = -20;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
} 
// else if(temp <= 30){
//     console.log("The weather is GOOD");
// } 
else {
    console.log("The weather is BAD");
}

const isSunny = false;
if (!isSunny){
    console.log("It is SUNNY");
} else {
    console.log("It is CLOUDY");
}