// eventListner = Listen for specific events to create interactive web pages
//                events: keydown, keyup
//                document.addEventListener(event, callback);

document.addEventListener("keydown", event => {
    console.log(`Key down = ${event.key}`);
});

document.addEventListener("keydown", event => {
    console.log(`Key up = ${event.key}`);
});

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "👾";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "👻";
    myBox.style.backgroundColor = "lightblue";
});