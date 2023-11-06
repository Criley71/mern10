const express = require("express");
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT || 5000
const app = express()
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/meals', require('./routes/mealRoutes'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})