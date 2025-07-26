// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript. 

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ----------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
});


// ---------- .lastElementChild ----------

const element2 = document.getElementById("fruits");
const lastChild = element2.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "cyan"
});


// ---------- .nextElementSibling ----------

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "orange";
const element4 = document.getElementById("vegetables");
const nextSibling2 = element4.nextElementSibling;
nextSibling2.style.backgroundColor = "magenta";


// ---------- .previousElementSibling ----------

const element5 = document.getElementById("orange");
const prevSibling = element5.previousElementSibling;
prevSibling.style.backgroundColor = "red";


// ---------- .parentElement ----------

const element6 = document.getElementById("onions");
const parent = element6.parentElement;
parent.style.backgroundColor = "purple";


// ---------- .children ----------

const element7 = document.getElementById("fruits");
const children = element7.children;
console.log(children);

Array.from(children).forEach(child => {
    child.style.color = "green";
});