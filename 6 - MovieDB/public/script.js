var cardsHtml;
//page selection script
document.getElementById('pageSelect').value = 1;

pageSelect = document.getElementById('pageSelect')

let page = 1;
render(page)
document.getElementById('select').addEventListener('click',()=>{
    if(pageSelect.value >=1 && pageSelect.value<=500){
        render(pageSelect.value)
    }
    else{
        document.getElementById('moviesArea').innerHTML = `<h1>This page does not exist :[</h1>`
    }
})

//rendering basic movie info from api on html
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
                        <img class="poster"src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                        <p>${movie.title}</p>
                        <button onclick="expandCard(${data.results.indexOf(movie,0)})"><img src="images/arrow-down-sign-to-navigate.png" alt=""></button>
                    </div>
                    <div class= "description" id="${data.results.indexOf(movie,0)}">
                        <p>${movie.title !== movie.original_title ? movie.original_title : ''}</p>
                        <p>moviez</p>
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
        
        //getting all the movie cards as html collection 
        cardsHtml = document.getElementsByClassName('movie-card') 
        
        //converting the html collection to an array
        let cards = Array.from(cardsHtml)
        console.log(cards)
        
       /*  //going to trough the array and adding "the show more information" functionality
        cards.forEach((card) =>{
            card.addEventListener("click",function expandCard(){
                console.log(cards);
            })
        }) */
       
})
}

function expandCard(id){
    let active = document.getElementById(`${id}`)
    active.classList.toggle('active')
    console.log("active!")
}