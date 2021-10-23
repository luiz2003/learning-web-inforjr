require('dotenv').config()  
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const nodemailer = require('nodemailer') 

//static folder
app.use(express.static(path.join(__dirname,'public')))

//create transpoter (connect to email service)
let transporter = nodemailer.createTransport({
    service :  'gmail', 
    auth: {
        user : process.env.EMAIL_ID, //get user name from .env file
        pass: process.env.PASSWORD //get password from .env file
    }
})

//create email template
let mailOptions = {
   from: '"Interior Desings" <interior.design.official.infojr@gmail.com>', // sender address
   to: "luizcastroval321@gmail.com", // receiver address
   subject: "Ooiii", // Subject line
   text: "isso aqui funciona?", // plain text body
   html: "<b>Thanks for using our services</b>", // html body
};

//send email
/* transporter.sendMail(mailOptions, (err,data)=>{
    if(err){
        console.log('error',err)
    }
    else{
        console.log('email sent correctly')
    }
}) */
app.post('/submit', (req,res) =>{
    console.log('form pegado')
})
//port listening    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})