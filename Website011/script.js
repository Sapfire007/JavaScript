// .checked = property that determines the checked state of an 
//            HTML radio button element. 

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.onclick = function (){
    if(myCheckBox.checked){
        subResult.textContent = `Thankyou for joining SapX`;
    } else{
        subResult.textContent = `You've not yet joined SapX`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You're paying with Visa`;
    } else if (masterCardBtn.checked){
        paymentResult.textContent = `You're paying with MasterCard`;
    } else if (payPalBtn.checked){
        paymentResult.textContent = `You're paying with PayPal`;
    } else {
        paymentResult.textContent = `You have not selected any payment method yet!`;
    }
}