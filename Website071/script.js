// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "🐶";
});

// CLICK event listner

buttons.forEach(button => {
    button.addEventListener("click", event => {
        if(button.style.backgroundColor == "green"){
            event.target.style.backgroundColor = "magenta";
        }else{
            event.target.style.backgroundColor = "green";
        }
    });
});

// MOUSEOVER + MOUSEOUT event listner

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton); //STEP 3

console.log(buttons);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons);
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});