//rendering basic movie info on html
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
    })
