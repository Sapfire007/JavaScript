// Getting elements from the DOM
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

// Attach Events
ratingsContainer.addEventListener("click", (e)=>{
    if(e.target.parentNode.classList.contains("rating")){
        console.log(e.target.parentNode.classList.contains("rating"));  // Outputs a boolean value
        removeActive();
        e.target.parentNode.classList.add("active");
        // selectedRating = e.target.nextElementSibling.innerHTML;
        selectedRating = e.target.parentNode.querySelector("small").innerHTML;
    }
});

sendBtn.addEventListener('click', ()=>{
    panel.innerHTML = `
        <p class="heart">❤️</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
    `;
});

function removeActive() {
    for(let i = 0; i < ratings.length; i++){
        ratings[i].classList.remove("active");
    }
}