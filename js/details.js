"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(queryString);
const id = params.get("id");
console.log(id);

const apiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto" + id;

const errorMessage = document.querySelector(".error");
const movieDetails = document.querySelector(".movie-details");

async function getAnimeDetails() {
    try {
        const response = await fetch(apiUrl);
        const jsonResults = await response.json();

        // console.log(jsonResults);

        const animeSeriesDetails = jsonResults.results;
        console.log(animeSeriesDetails);

        movieDetails.innerHTML = "";

        for (let i = 0; i < animeSeriesDetails.length; i++) {

            if (i === 3) {
                break;
            }

            movieDetails.innerHTML += `<div><h2 class="movie-title">Movie title:</h2><p class="movie-name"> ${animeSeriesDetails[i].title}</p><img class="movie-img" src="${animeSeriesDetails[i].image_url}"/><p class="movie-score">Movie rating: ${animeSeriesDetails[i].score}</p></div>`;
        }
    } catch(e) {
        errorMessage.innerHTML = `Du har en feil!` + " " + (e);
    }
    
}

getAnimeDetails();