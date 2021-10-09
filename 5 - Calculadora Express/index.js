
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

function math(num1,num2){

}
//static folder
app.use(express.static(path.join(__dirname,'public')))

//routing and math
app.get('/sum/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1+num2).toString()
  res.send(result)
})
app.get('/subtract/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1-num2).toString()
  res.send(result)
})
app.get('/multiply/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1*num2).toString()
  res.send(result)
})
app.get('/divide/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1/num2).toString()
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
