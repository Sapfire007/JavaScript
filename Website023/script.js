// function = A section of reusable code. 
//            Declare code once, use it whenever you want. 
//            Call the function to execute that code. 

function intro(){
    console.log("Hey there! I am Sap!");
    console.log("Hey there! I am Sap!");
    console.log("Hey there! I am Sap!");
    console.log("Hey there! I am Sap!");
    console.log("Hey there! I am Sap!");
}

intro();
intro();

function printDetails(userName, age){
    console.log(`Welcome ${userName}!`);
    console.log(`You are ${age} years old!`);
}
printDetails("Saptarshi", 18);

function add(x, y){
    let result = x + y;
    return result;
}

let answer = add(2, 3);
console.log(answer);

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(7));

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("sapx@yahoo.com"));
console.log(isValidEmail("sapxyahoo.com"));
console.log(isValidEmail("Hello@World"));