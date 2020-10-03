const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

console.log(dotenv.parsed)
//initialize DB
require('./config/keys')()
           

const indexRouter = require('./routes/index')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))


app.use('/', indexRouter)
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
