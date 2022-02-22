"use strict"
const apiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto";

const errorMessage = document.querySelector(".error");
const movieDetails = document.querySelector(".movie-details");

async function checkAnimeMovie() {
    try {
        const response = await fetch(apiUrl);
        const jsonResults = await response.json();

        // console.log(jsonResults);

        const animeMovie = jsonResults.results;
        console.log(animeMovie);

        movieDetails.innerHTML = "";

        for (let i = 0; i < animeMovie.length; i++) {

            if (i === 4) {
                break;
            }

            movieDetails.innerHTML += `<div><h2 class="movie-title">Movie</h2><a href="details.html?id=${animeMovie[i].mal_id}"><img class="movie-img" src="${animeMovie[i].image_url}"/></a></div>`;
        }
    } catch(e) {
        errorMessage.innerHTML = `Du har en feil!` + " " + (e);
        movieDetails.innerHTML = "";
    }
    
}

checkAnimeMovie();