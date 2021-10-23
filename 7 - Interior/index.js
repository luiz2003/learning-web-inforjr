require('dotenv').config()  
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const nodemailer = require('nodemailer')

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

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

//manage post request and send email
app.post('/submit', (req,res) =>{
    //create email template
    let mailOptions = {
    from: '"Interior Desings" <interior.design.official.infojr@gmail.com>', 
    to: `${req.body.email}`, 
    subject: "Thanks for using our services!", 
    html: ` <b>Your name: </b> <p>${req.body.name}</p> <br>
            <b>Your email: </b> <p> ${req.body.email} </p><br>
            <b> Your message: </b> <p> ${req.body.text}</p>`
    }
    //send email
    transporter.sendMail(mailOptions, (err,data)=>{
        if(err){
            console.log('error',err)
        }
        else{
            console.log('email sent correctly')
        }
    }) 
})

//port listening    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})