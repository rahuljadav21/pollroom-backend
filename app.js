const express =require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const engine = require('ejs-mate');
const path = require('path')
const passport = require('passport');
const session = require('express-session')
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError');


//load config
dotenv.config({path: './config/config.env'})


const app =express();
connectDB()

//passport config
require('./config/passport')(passport)




if(process.env.NODE_ENV='developement'){
    app.use(morgan('dev'))
}

// app.engine('ejs', engine);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//static

app.use(express.static(path.join(__dirname,'public')))

//session
const sessionConfig = {
  name : 'session',
  secret : 'thisshouldbeabettersecret!',
  resave : false,
  saveUninitialized : true,
  cookie : {
      expires : Date.now() + 1000*60*60*24*7,
      maxAge: 1000*60*60*24*7,
      httpOnly : true
  }
}
app.use(session(sessionConfig))

//passport meddleware
app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000



//routes
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/pollRoom',require('./routes/pollroom'))

//Error Handaling
app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!'
  res.status(statusCode).redirect(`https://pollroom.netlify.app/error`)
})

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`))