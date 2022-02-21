"use strict"
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

"use strict"
const selecter = document.querySelector("select");
const listContainer = document.querySelector(".list");

selecter.addEventListener("change", buildList);

function buildList(event) {
    const amount = event.target.value;

    // console.log(event.target.value);

    for (let i = 0; i < amount; i++) {
        listContainer.innerHTML = `<div class="movie"><a class="select-movie" href="details.html?id=${i}"><img src="https://cdn.myanimelist.net/images/anime/4/78280.jpg?s=9d8b257b29ff99f0f136562547d0d465"/></a></div>`;
    }
}
