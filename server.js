const express = require('express')
const { env } = require('process')
const app = express()
const PORT = 7787
const mongoose = require('mongoose')
require('dotenv').config()



// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const tbrBooks = require('./models/tbrBooks')


// DB connection
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log('Connected to database!') })



// PORT 
app.listen(PORT, () => console.log(`Server running on ${PORT}`))