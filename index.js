const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

// Init app
const app = express()

// Form data middleware
app.use(bodyParser.urlencoded({
    extended: false
}))
// Json body middleware
app.use(bodyParser.json())
// Cors middleware
app.use(cors())
// Setting static directory
app.use(express.static(path.join(__dirname, 'public')))

// Bring in DB config and connect with database
const db = require('./config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser:true })
    .then(() => {
        console.log(`Database connected succesfully`)
    })
    .catch(err => {
        console.log(`Unable to connect with the database: ${err}`)
    })

// Spin up server
const PORT = process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})