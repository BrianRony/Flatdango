const baseUrl = "http://localhost:3000/films"
//get movie names
function getNames(){
    return fetch(baseUrl)
    .then(res => res.json())
}

function renderNames(movie){
    let listF = document.getElementById("films")
    let list = document.createElement("li")
    listF.appendChild(list)
    list.innerText = movie.title
    list.dataset.id = movie.id
    list.addEventListener("click", onListMovieClick)
}
getNames().then(movies => movies.forEach(movie => renderNames(movie)))


//get movie details
function getMovieDetails(id){
   return fetch(baseUrl + `/${id}`)
   .then(res => res.json())
}
function onListMovieClick(e){
    e.preventDefault()
    const movieId = e.target.dataset.id
    console.log(movieId);
    getMovieDetails(movieId)
    .then(renderMovieDetails)
}

function renderMovieDetails(movie){
    let poster = document.getElementById("poster")
    poster.src = movie.poster
    let name = document.getElementById("title")
    name.innerText = movie.title
    let runtime = document.getElementById("runtime")
    runtime.innerText = movie.runtime
    let showtime = document.getElementById("showtime")
    showtime.innerText = movie.showtime
    let info = document.getElementById("film-info")
    info.innerText = movie.description
    let tickets = document.getElementById("ticket-num")
    tickets.innerText = parseInt(movie.capacity) - parseInt(movie.tickets_sold)  
}
