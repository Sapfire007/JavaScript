// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelectorAll()     // NODELIST

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");
console.log(fruits);


fruits[0].style.backgroundColor = "red";

for(let fruit of fruits){
    fruit.style.backgroundColor = "cyan";
}

Array.from(fruits).forEach(fruit => {
    fruit.style.color = "green"; 
});

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "yellow";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "RGB(100, 48, 255)";
}

const liElements = document.getElementsByTagName("li");

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "#daff33";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "HSL(263, 52%, 80%)";
});

const element = document.querySelector(".fruits");
console.log(element);
element.style.backgroundColor = "red";

const element2 = document.querySelector("ol");
console.log(element2);

const fruits2 = document.querySelectorAll(".fruits");
fruits2[1].style.backgroundColor = "orange";

const foods = document.querySelectorAll("li");
console.log(foods);
foods[3].style.backgroundColor = "magenta";

foods.forEach(food => {
    food.style.color = "white";
});