"use strict"
const apiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto";

const newDivs = document.querySelector(".title");

async function getAnimeDetails() {
    try {
        const response = await fetch(apiUrl);
        const jsonResults = await response.json();

        // console.log(jsonResults);

        const animeSeriesDetails = jsonResults.results;
        // console.log(animeSeriesDetails);

        newDivs.innerHTML = "";

        for (let i = 0; i < animeSeriesDetails.length; i++) {

            if (i === 1) {
                break;
            }

            newDivs.innerHTML += `<div><h2><a href="details.html/?id=2">${animeSeriesDetails[i].title}</a></h2></div><div><h3><a href="details.html/?id=2"><img src="${animeSeriesDetails[i].image_url}"/></a></h3></div><div><a href="details.html/?id=2">${animeSeriesDetails[i].score}</a></div>`;
        }
    } catch(e) {
        alert(e.message);
    }
    
}

getAnimeDetails();