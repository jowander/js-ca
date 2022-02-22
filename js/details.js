"use strict"
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
console.log(id);

const animeDetails = document.querySelector(".anime-details");
const errorMessage = document.querySelector(".error");

const newApiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto/";

async function animeMovieDetails() {
    try {
        const response = await fetch(newApiUrl + id);
        const jsonResults = await response.json();

        console.log(jsonResults);

        // const animeMovieDetails = jsonResults.results;
        // console.log(animeMovieDetails);

        animeDetails.innerHTML = "";

        for (let i = 0; i < jsonResults.results.length; i++) {
            if( jsonResults.results[i].mal_id === parseInt(id)) {
                animeDetails.innerHTML += `<div><h2 class="movie-title">Movie title:</h2><p class="movie-name"> ${jsonResults.results[i].title}</p><img class="movie-img" src="${jsonResults.results[i].image_url}"/><p class="movie-score">Movie rating: ${jsonResults.results[i].score}</p><p class="movie-score">Members: ${jsonResults.results[i].members}</p></div>`;
            }
            
            
        

            
        }

    } catch (e) {
        errorMessage.innerHTML = `Du har en feil!` + " " + (e);
        animeDetails.innerHTML = "";
    }
}
animeMovieDetails()
