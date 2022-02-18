const apiUrl = "https://api.jikan.moe/v3/search/anime?q=naruto";

async function getAnimeDetails() {
    try {
        const response = await fetch(apiUrl);
        const jsonResults = await response.json();

        // console.log(jsonResults);

        const narutoFacts = jsonResults.results;
        console.log(narutoFacts);

        for (let i = 0; i < narutoFacts.length; i++) {
            console.log(narutoFacts[i].title);
        }
    } catch(e) {
        alert(e.message);
    }
    
}

getAnimeDetails();