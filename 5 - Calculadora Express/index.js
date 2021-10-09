
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//static folder
app.use(express.static(path.join(__dirname,'public')))

//routing 
/* app.get('/api/members',(req,res) =>{
  res.send('')
}) */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
