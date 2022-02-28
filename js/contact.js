"use strict"
const form = document.querySelector("#form-validation");

const fullNameInput = document.querySelector(".input-full-name");
const fullNameError = document.querySelector(".full-name-error");

const subjectInput = document.querySelector(".input-subject");
const subjectError = document.querySelector(".subject-error");

const addressInput = document.querySelector(".input-address");
const addressError = document.querySelector(".address-error");

const emailInput = document.querySelector(".input-email");
const emailError = document.querySelector(".email-error");

const thankYouMessage = document.querySelector(".thank-you");

function formValidate() {
    event.preventDefault();

    if (checkLength(fullNameInput.value, 0)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
        fullNameInput.classList.add("invalid");
    }

    if (checkLength(subjectInput.value, 10)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        subjectInput.classList.add("invalid");
        }

    if (emailInput.value) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        emailInput.classList.add("invalid");
    }

    if (checkLength(addressInput.value, 25)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        addressInput.classList.add("invalid");
    }
}
form.addEventListener("submit", formValidate = () => {
    if (formValidate) {
        form.remove();
        thankYouMessage.style.display = "block";
    }
});

function checkLength(value, len){
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    const emailMatch = regEx.test(email);
    return emailMatch;
}