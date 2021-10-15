fetch('http://localhost:3000/api')
    .then(res => { 
       return res.json()
    })
    .then(data => {
        data.results.forEach(movie => {
            document.getElementById('moviesArea').innerHTML+= `
            <p>${movie.original_title}</p>

            ` 
        });
    })
