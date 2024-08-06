const API_KEY = "your_api_key"
let moreInfoButton = document.createElement("button");

const form = document.querySelector("form")
const movieDetails = document.querySelector(".movie-data");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const year = document.querySelector(".year");


form.addEventListener("submit", async function(e) {
    e.preventDefault();
    // console.log(e.target.movie.value);

    let movie = e.target.movie.value;
    const data = await getMovieDetails(movie);
    displayMovieDetails(data);
})

moreInfoButton.addEventListener("click", async function(){
    // console.log(title.textContent);
    
    const data = await getMovieDetails(title.textContent);
    displayAdditionalDetails(data);
})


async function getMovieDetails(movie) {
    try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`)

        if(!res.ok){
            throw new Error("Response is not ok")
        }

        const data = await res.json();
        console.log(data);
        
        return data;
    } 
    catch (error) {
        console.log("ERROR in fetching movie data", error);
    }
}

function displayMovieDetails(movieData) {
    title.innerHTML = movieData.Title;
    year.innerHTML = movieData.Year;
    poster.innerHTML = `<img src=${movieData.Poster} alt=${movieData.Title}/>`;

    
    moreInfoButton.innerHTML="more info";
    moreInfoButton.setAttribute("id", "more-info");

    movieDetails.insertAdjacentElement("beforeend", moreInfoButton)
}

function displayAdditionalDetails(movieData){
    const additionalDetails = document.querySelector(".additional-details");
    additionalDetails.innerHTML = `
        <h2>${movieData.Title}</h2>
        <p><strong>Director:</strong> ${movieData.Director}</p>
        <p><strong>Actors:</strong> ${movieData.Actors}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
    `;
}