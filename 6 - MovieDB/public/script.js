var cardsHtml;
//rendering basic movie info from api on html
fetch('http://localhost:3000/api')
    .then(res => { 
       return res.json()
    })
    .then(data => {
        
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
                        <p>release date${movie.release_date}</p>
                        <p>original language: ${movie.original_language}</p>
                        <p>vote average: ${movie.vote_average}</p>
                        <p>${movie.overview}</p>
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

function expandCard(id){
    let active = document.getElementById(`${id}`)
    active.classList.toggle('active')
    console.log("active!")
}