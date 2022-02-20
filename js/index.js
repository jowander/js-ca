"use strict"
const selecter = document.querySelector("select");
const listContainer = document.querySelector(".list");

selecter.addEventListener("change", buildList);

function buildList(event) {
    const amount = event.target.value;

    // console.log(event.target.value);

    for (let i = 0; i < amount; i++) {
        listContainer.innerHTML = `<a class="select-movie" href="details.html?id=${i}">Click for details</a>`
    }
}