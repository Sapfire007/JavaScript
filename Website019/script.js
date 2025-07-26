// while loop = repeat some code WHILE some condition is true

let username = "";

while(username === "" || username === null){
    username = window.prompt(`Enter your username: `);
}

console.log(`Hello ${username}`);

let passcode;

do{
    passcode = window.prompt(`Enter your passcode: `);
} while(passcode !== "007" || passcode === "" || passcode === null);
console.log('You are now logged in!');