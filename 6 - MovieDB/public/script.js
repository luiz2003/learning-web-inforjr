//rendering the page based on the api on html
function render(page){
    fetch( `http://localhost:3000/api/${page}`)
    .then(res => { 
       return res.json()
    })
    .then(data => {
        document.getElementById('moviesArea').innerHTML = ``
        data.results.forEach(movie => {
            
            document.getElementById('moviesArea').innerHTML+= `
                <div class="movie-card">
                    <div class="title">
                        <img class="poster" src="${movie.poster_path == null ? `images/No-image-found.jpg`: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }">
                        <p>${movie.title}</p>
                        <button onclick="expandCard(${data.results.indexOf(movie,0)})"><img src="images/arrow-down-sign-to-navigate.png" alt=""></button>
                    </div>
                    <div class= "description" id="${data.results.indexOf(movie,0)}">
                        <p>${movie.title !== movie.original_title ? movie.original_title : ''}</p>
                        <p class="logo">moviez</p>
                        <p><h2>release date:</h2> ${movie.release_date}</p>
                        <p><h2>original language:</h2> ${movie.original_language}</p>
                        <p><h2>vote average:</h2> ${movie.vote_average}</p>
                        <p>${movie.overview.length > 163 ? 
                            movie.overview.substring(0, 140) + "..." : 
                            movie.overview}</p>
                    </div>
                </div>
            ` 
        });
        if (document.getElementById('moviesArea').innerHTML == '') {
            document.getElementById('moviesArea').innerHTML = `<h1>This page does not exist :[</h1>`
        }
    })
}

function expandCard(id){
    let active = document.getElementById(`${id}`)
    active.classList.toggle('active')
}

//page selection script
var searchMode = false;
document.getElementById('pageSelect').value = 1;

pageSelect = document.getElementById('pageSelect')

let page = 1;
render(page)
document.getElementById('select').addEventListener('click',()=>{
    if (searchMode) {
        if (pageSelect.value < 1) {
            document.getElementById('moviesArea').innerHTML = `<h1>This page does not exist :[</h1>`
        }
        else{
            renderSearch(query,pageSelect.value)
        }
        
    }
    else if(pageSelect.value >=1 && pageSelect.value<=500){
        render(pageSelect.value)
    }
    else{
        document.getElementById('moviesArea').innerHTML = `<h1>This page does not exist :[</h1>`
    }
})

// movieDB search engine
searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keydown',(event)=>{
    
    query = searchBar.value;
    if(event.keyCode=== 13 && query == ""){
        window.alert("Please input your query")
    }
    else if(event.keyCode===13){
        searchMode = true;
        renderSearch(query,1)
    }
})

function renderSearch(query,page) {
    fetch( `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${query}&page=${page}`)
        .then(res => { 
           return res.json()
        })
        .then(data => {
            console.log(data)
            document.getElementById('moviesArea').innerHTML = ``
            data.results.forEach(movie => {
                
                document.getElementById('moviesArea').innerHTML+= `
                    <div class="movie-card">
                        <div class="title">
                            <img class="poster"src="${movie.poster_path == null ? `images/No-image-found.jpg`: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }">
                            <p>${movie.title}</p>
                            <button onclick="expandCard(${data.results.indexOf(movie,0)})"><img src="images/arrow-down-sign-to-navigate.png" alt=""></button>
                        </div>
                        <div class= "description" id="${data.results.indexOf(movie,0)}">
                            <p>${movie.title !== movie.original_title ? movie.original_title : ''}</p>
                            <p class="logo">moviez</p>
                            <p><h2>release date:</h2> ${movie.release_date}</p>
                            <p><h2>original language:</h2> ${movie.original_language}</p>
                            <p><h2>vote average:</h2> ${movie.vote_average}</p>
                            <p>${movie.overview.length > 163 ? 
                                movie.overview.substring(0, 140) + "..." : 
                                movie.overview}</p>
                        </div>
                    </div>
                ` 
            });
            if (document.getElementById('moviesArea').innerHTML == '') {
                document.getElementById('moviesArea').innerHTML = `<h1>This page does not exist :[</h1>`
            }
        })
}
