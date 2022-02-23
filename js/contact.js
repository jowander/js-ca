"use strict"
const form = document.querySelector(".form-validation");
const firstNameInput = document.querySelector(".input-first-name");
const submitButton = document.querySelector("button");
const errorMessage = document.querySelector(".error");


function validateForm(event){
    event.preventDefault();
    if (firstNameInput.value.trim().length > 0) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}
form.addEventListener("submit", validateForm)
