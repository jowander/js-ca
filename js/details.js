"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
console.log(id);

const animeDetails = document.querySelector(".anime-details");
const errorMessage = document.querySelector(".error");

const newApiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto" + id;

async function animeMovieDetails() {
    try {
        const response = await fetch(newApiUrl);
        const jsonResults = await response.json();

        console.log(jsonResults);

        const animeMovieDetails = jsonResults.results;
        console.log(animeMovieDetails);

        animeDetails.innerHTML = "";

        for (let i = 0; i < animeMovieDetails.length; i++) {

            
            animeDetails.innerHTML += `<div><h2 class="movie-title">Movie title:</h2><p class="movie-name"> ${animeMovieDetails[i].title}</p><img class="movie-img" src="${animeMovieDetails[i].image_url}"/><p class="movie-score">Movie rating: ${animeMovieDetails[i].score}</p></div>`;
        

            
        }

    } catch (e) {
        errorMessage.innerHTML = `Du har en feil!` + " " + (e);
        animeDetails.innerHTML = "";
    }
}
animeMovieDetails()
