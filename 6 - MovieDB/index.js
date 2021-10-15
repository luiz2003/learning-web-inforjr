const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const fetch = require('cross-fetch');

//static folder
app.use(express.static(path.join(__dirname,'public')))
