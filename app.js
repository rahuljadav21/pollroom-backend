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
const cors = require("cors");

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

app.use(express.json());


app.use(methodOverride('_method'));

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

const PORT = process.env.PORT

app.use(cors());

//routes
app.use('/',require('./routes/index'))
app.use('/auth',require('./routes/auth'))
app.use('/pollroom',require('./routes/pollroom'))

//Error Handaling


  
if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));

    app.get("*", (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

    })


}



app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`))