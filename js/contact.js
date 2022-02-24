"use strict"
const form = document.querySelector(".form-validation");
const fullNameInput = document.querySelector(".input-full-name");
const fullNameError = document.querySelector(".full-name-error");
const subjectInput = document.querySelector(".input-subject");
const subjectError = document.querySelector(".subject-error");
const emailInput = document.querySelector(".input-email");
const emailError = document.querySelector(".email-error");
const addressInput = document.querySelector(".input-address");
const addressError = document.querySelector(".address-error");
const submitButton = document.querySelector("button");


function validateForm(event){
    event.preventDefault();
    if (fullNameInput.value.trim() > 0) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (subjectInput.value.trim() >= 10) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (emailInput.value) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (addressInput.value.trim() >= 5) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}
form.addEventListener("submit", validateForm)


// function checkLength (value, len) {
//     if (value.trim().length > len) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function fullNameIsLetters(name) {
//     const regEx = /^([a-zA-Z ]+$/;
//     const nameMatch = regEx.test(name.value);
//     return nameMatch;
// }

function checkEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}