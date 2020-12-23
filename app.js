const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const morgan = require('morgan')

//Load config
dotenv.config({ path: './config/config.env' })

connectDB()

const app = express()

//logging by using morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Handlebars middleware
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' })) //default layout of file name 'main'
app.set('view engine', '.hbs')

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
