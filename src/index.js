document.addEventListener("DOMContentLoaded", ()=> {
const baseUrl = "http://localhost:3000/films"

// Function to get movie names
function getNames(){
    return fetch(baseUrl)
    .then(res => res.json())
}

// Function to render movie names
function renderNames(movie){
    let listF = document.getElementById("films")
    let list = document.createElement("li")
    list.innerText = (movie.title).toUpperCase()
    list.dataset.id = movie.id
    list.addEventListener("click", onListMovieClick)
    listF.appendChild(list)
}

getNames().then(movies => movies.forEach(movie => renderNames(movie)))

// Function to get movie details
function getMovieDetails(id){
   return fetch(baseUrl + `/${id}`)
   .then(res => res.json())
}

// Function to handle movie list item click
function onListMovieClick(e){
    e.preventDefault()
    const movieId = e.target.dataset.id
    getMovieDetails(movieId)
    .then(renderMovieDetails)
}

// Function to render movie details
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

 // Event listener for the "Buy Ticket" button
    const button = document.getElementById("buy-ticket")
    button.addEventListener("click", (e)=> {
        e.preventDefault()
    if (parseInt(tickets.innerText,10) > 0){
        updateTicketInfo(movie.id, movie)
    } else {
        tickets.innerText = "Sold Out"
        button.disabled = true
    }
    })
}
// Function to update ticket information on the server
//Experiencing challenge with page reloading after updating ticket info on server
function updateTicketInfo(id, movie){
   return fetch(baseUrl + `/${id}`,{
        method: "PUT",
        headers: {
            "content-type":"application/json",
            "accept":"application/json"
        },
        body:JSON.stringify({
            title: movie.title,
            runtime: movie.runtime,
            capacity: movie.capacity,
            showtime: movie.showtime,
            tickets_sold: movie.tickets_sold + 1,
            description: movie.description,
            poster: movie.poster
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

})

