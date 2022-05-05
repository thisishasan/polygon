const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

//Admin Panel Routes
app.use('/admin/api',require('./routes/admin'))
//Website Routes
app.use('/api',require('./routes/web'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})