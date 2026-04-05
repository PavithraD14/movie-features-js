const movies = [
    { id: 1, image:"https://i.pinimg.com/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg", title: "Inception", genre: "Thriller", year: 2010 },
    { id: 2, image:"https://i.pinimg.com/1200x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg", title: "The Dark Knight", genre: "Action", year: 2008 },
    { id: 3, image:"https://i.pinimg.com/1200x/0b/34/ce/0b34ce2145b475247577a5d438a199b0.jpg",title: "Interstellar", genre: "Action", year: 2014 },
    { id: 4, image:"https://i.pinimg.com/1200x/25/82/b4/2582b4a9b2174193380ad366886ee5a3.jpg", title: "John Wick", genre: "Action", year: 2014 },
    { id: 5, image:"https://i.pinimg.com/1200x/42/00/da/4200dae9ac7b15a5c65375cbfaceaa69.jpg", title: "Avengers: Endgame", genre: "Thriller", year: 2019 },
    { id: 6, image:"https://i.pinimg.com/736x/b3/73/ed/b373ed2c47e9c8ce59459871b9ac1808.jpg", title: "The Matrix", genre: "Thriller", year: 1999 },
    { id: 7, image:"https://i.pinimg.com/1200x/49/22/6c/49226cc2be5cb537218993fa89d075a8.jpg",title: "Gladiator", genre: "Action", year: 2000 },
    { id: 8, image:"https://i.pinimg.com/1200x/44/da/67/44da67389daab7a5ccd36679d8fa58a8.jpg",title: "Joker", genre: "Action", year: 2019 },
    { id: 9, image:"https://i.pinimg.com/1200x/82/32/2c/82322c815c6ab49813aefa47bd4329ff.jpg",title: "Spider-Man: No Way Home", genre: "Thriller", year: 2021 }
];

const container = document.getElementById("movie-container");

function displayMovies(data){
    const movieArray = Array.isArray(data) ? data : [data];

    container.innerHTML = movieArray.map(movie => 
        `
            <div class="col-md-4">
                <div class="card p-3 m-2">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text text-muted">${movie.genre} - ${movie.year}</p>
            </div>
        </div>
    </div>
`).join('');

}

function showAll() {
    displayMovies(movies);
}

function filterAction(){
    const actionMovies = movies.filter((movie) => {
        return movie.genre === "Action";
    });
    displayMovies(actionMovies);
}

function filterThriller(){
    const ThrillerMovies = movies.filter((movie) => {
        return movie.genre === "Thriller";
    });
    displayMovies(ThrillerMovies);
}


function filterAfter2012() {
const moviesAfter2012 = movies.filter((movies) => {
    return movies.year > 2012;
});
    displayMovies(moviesAfter2012);
}


function findInception(){
    const trendingMovie = movies.find((movie) => {
        return movie.title === "Inception";
    });
    displayMovies(trendingMovie);
}

function searchMovie() {
    const userInput = document.getElementById("searchInput").value.trim().toLowerCase();

    if (userInput === "") {
        alert("Please enter a movie name");
        return;
    }

    const searchedMovies = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(userInput);
    });

    if (searchedMovies.length === 0) {
        container.innerHTML = `<h4 class="text-danger text-center">Movie not found</h4>`;
        return;
    }

    displayMovies(searchedMovies);
}

showAll();