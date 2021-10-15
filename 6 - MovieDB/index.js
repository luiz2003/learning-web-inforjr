const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fetch = require('cross-fetch');

//static folder
app.use(express.static(path.join(__dirname,'public')))

//api creation
app.get('/api',  async (req,res)=>{
    const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
    const data = await response.json()
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })