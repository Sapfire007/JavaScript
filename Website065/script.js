// ---------- EXAMPLE 1 <h1> ----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "2rem";
newListItem.style.backgroundColor = "brown";
// newListItem.style.color = "whitesmoke";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// What if we dont have id?
// const listItem = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItem[0]);

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// if we dont have any id?
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// document.body.append(newH1);
// document.getElementById("box1").append(newH1);

// REMOVE HTML ELEMENT
document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").removeChild(newListItem);



// document.getElementById("box1").removeChild(newH1); 