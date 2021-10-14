
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//static folder
app.use(express.static(path.join(__dirname,'public')))

//routing and math
let result = 0;
app.get('/sum/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1+num2).toFixed(2)
  res.send(resultTemplate(result))
})
app.get('/subtract/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1-num2).toFixed(2)
  res.send(resultTemplate(result))
})
app.get('/multiply/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1*num2).toFixed(2)
  res.send(resultTemplate(result))
})
app.get('/divide/:num1/:num2',(req,res)=>{
  let num1 = parseFloat(req.params.num1)
  let num2 = parseFloat(req.params.num2)
  result = (num1/num2).toFixed(2)
  res.send(resultTemplate(result))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// result template function

function resultTemplate(result){
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Faster+One&family=Work+Sans:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet">

    <title>Calculator</title>

    <style>
      *{
        padding: 0px;
        margin: 0px;
        border: 0px;
        text-decoration: none;
        background-color: #2b2d42;
        color: #D5D3DA;
        font-family: 'Faster One', cursive;
        font-family: 'Work Sans', sans-serif;
        
        -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
    }
    button{
        cursor: pointer;
    }
    
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 50px;
    }
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 50px;
    }
    h1{
        font-size: 60px;
        display: flex;
        align-items: center;
        gap: 30px;
    }
    span{
      color: #E71D36;
      font-size: 150px;
    }
    button{
      cursor: pointer;
      background-color: #0F7173;
      border-radius: 15px;
      font-size: 20px;
      width: 135px;
      padding: 10px 0px;
      text-align: center;
      font-weigth: 700;
    }
    
    button:hover{
      background-color: #2b2d42;
      color: #0F7173;
      border:solid 1px #0F7173;
    }
    </style>
</head>

<body>
  <h1>Your result is: </h1>
  <h1 class="result"><span>${result} </span><h1>
  <button onclick="back()">Back</button>
  <script>
    function back(){
      window.location.href = 'http://localhost:3000/';
    }
  </script>
</body>
</html>
`
}