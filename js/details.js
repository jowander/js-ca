"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

const animeDetails = document.querySelector(".anime-details");
const errorMessage = document.querySelector(".error");

//const newApiUrl = `https://api.jikan.moe/v3/search/anime?q=naruto/`;
const newApiUrl = `https://api.jikan.moe/v4/anime/${id}`

async function animeMovieDetails() {
    try {
        const response = await fetch(newApiUrl);
        const jsonResults = await response.json();

        console.log(jsonResults);

        const animeMovieDetails = jsonResults.data;

        animeDetails.innerHTML = `<div><h2 class="movie-title">English movie title:</h2><p class="movie-name"> ${animeMovieDetails.title}</p><h2 class="movie-title">Japanese movie title:</h2><p class="movie-name"> ${animeMovieDetails.title_japanese}</p><img class="movie-img" src="${animeMovieDetails.images.jpg.image_url}"/><p class="movie-score">Movie rating: ${animeMovieDetails.score}</p><p class="movie-score">Duration: ${animeMovieDetails.duration}</p></div>`;

        // for (let i = 0; i < jsonResults.results.length; i++) {
        //     if( jsonResults.results[i].mal_id === parseInt(id)) {
        //         animeDetails.innerHTML += `<div><h2 class="movie-title">Movie title:</h2><p class="movie-name"> ${jsonResults.results[i].title}</p><img class="movie-img" src="${jsonResults.results[i].image_url}"/><p class="movie-score">Movie rating: ${jsonResults.results[i].score}</p><p class="movie-score">Members: ${jsonResults.results[i].members}</p></div>`;
        //     }   
        // }

    } catch (e) {
        errorMessage.innerHTML = `Du har en feil!` + " " + (e);
        animeDetails.innerHTML = "";
    }
}
animeMovieDetails()