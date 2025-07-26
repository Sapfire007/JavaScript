// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

username = window.prompt("Enter your username: ");

console.log(username);

let myUserName;

document.getElementById("mySubmit").onclick = function () {
    myUserName = document.getElementById("myText").value;
    console.log(myUserName);
    document.getElementById("myH1").textContent = `Welcome ${myUserName}`;
}