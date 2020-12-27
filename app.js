const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')
const passport = require('./config/passport')
const session = require('express-session')
const morgan = require('morgan')

//Load config
dotenv.config({ path: './config/config.env' })

//Passport config
require('./config/passport')(passport)

connectDB()

const app = express()

//logging by using morgan middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Handlebars middleware
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' })) //default layout of file name 'main'
app.set('view engine', '.hbs')

//sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false, //false: we dont a session if nothing is modified
    saveUninitialized: false, //false: dont create a session untill somthing is stored
  })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//ROUTES
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
