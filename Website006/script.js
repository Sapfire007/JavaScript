// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);

document.getElementById("mySubmit").onclick = function () {
    let myRadius = document.getElementById("myText").value;
    myRadius = Number(myRadius);
    let myCircumference = 2 * PI * myRadius; 
    document.getElementById("myH3").textContent = "Circumference: "+ myCircumference + " units";
}