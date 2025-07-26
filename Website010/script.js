// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

let age = 25;

if (age >= 18){
    console.log("You are eligible to vote!");
}
else{
    console.log("You must be 18 years and above to vote!")
}

let time = 9;

if(time < 12){
    console.log("Good morning!");
}else{
    console.log("Good afternoon!");
}

let isStudent = true;

if(isStudent){
    console.log("You're a student!");
} else {
    console.log("You're not a student!");
}

let inpNum = 32;
if (inpNum>0){
    console.log("Input number is a positive number");
} else if (inpNum<0){
    console.log("Input number is a negative number");
} else {
    console.log("Input number is Zero");
}

let hasLicense = true;
if (age >= 18){
    // console.log("You can drive!");
    if(hasLicense){
        console.log("You have a driving license and yes, you can drive!");
    } else {
        console.log("You do not have a driving license! Apply for a driving license before you drive!");
    }
}
else{
    console.log("You must be 18 years and above to drive!")
}

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let inpAge;

mySubmit.onclick = function (){
    inpAge = myText.value;
    if(inpAge > 100){
        // console.log("You're TOO OLD to enter this site");
        resultElement.textContent = `You're TOO OLD to enter this site.`;
    } else if (inpAge == 0){
        // console.log("You can't enter either. You were just born.");
        resultElement.textContent = `You can't enter either. You were just born.`;
    } else if (inpAge >= 18){
        // console.log("You're old enough to enter this site");
        resultElement.textContent = `You're old enough to enter this site.`;
    } else if (inpAge < 0){
        // console.log("Your age can't be below 0");
        resultElement.textContent = `Your age can't be below 0.`;
    } else {
        // console.log("You must be 18+ to enter this site");
        resultElement.textContent = `You must be 18+ to enter this site.`;
    }
}