"use strict"
const form = document.querySelector(".form-validation");
const firstNameInput = document.querySelector(".input-first-name");
const submitButton = document.querySelector("button");

function validateForm(){
    event.preventDefault()
}
form.addEventListener("submit", validateForm)
