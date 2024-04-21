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
    getMovieDetails(movieId)
    .then(renderMovieDetails)
}

function renderMovieDetails(movie){
    const poster = document.getElementById("poster")
    poster.src = movie.poster
    const name = document.getElementById("title")
    name.innerText = movie.title
    const runtime = document.getElementById("runtime")
    runtime.innerText = movie.runtime
    const showtime = document.getElementById("showtime")
    showtime.innerText = movie.showtime
    const info = document.getElementById("film-info")
    info.innerText = movie.description
    const tickets = document.getElementById("ticket-num")
    tickets.innerText = parseInt(movie.capacity) - parseInt(movie.tickets_sold)  
}

//Update ticket information
document.getElementById("buy-ticket").addEventListener("click", (e)=> {
    e.preventDefault()
    const tickets = document.getElementById("ticket-num")
    if(tickets.innerText > 0){
    tickets.innerText = (parseInt(tickets.innerText) -1)
    } else {
    tickets.innerText = `Movie Sold Out`
    }
})

