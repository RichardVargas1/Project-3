const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
const passport = require('./passportAuth');
const routes = require("./routes");
const session = require('express-session')
const politicsDBArray = require('./scripts/seededDB.js/politicsSeedDB');
const sportsDBArray = require('./scripts/seededDB.js/sportsSeedDB');
const filmsDBArray = require('./scripts/seededDB.js/filmsSeedDB');
const speechModel = require('./models/speech');
const app = express();

// Sessions
app.use(
	session({
		secret: 'youtube-fun',
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/speechshare",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Add routes, both API and view
app.use(routes);

// checking array require
// console.log(dbArray);

// speechModel.remove({})

speechModel.create(politicsDBArray).then(data =>{console.log(data)})
speechModel.create(sportsDBArray).then(data =>{console.log(data)})
speechModel.create(filmsDBArray).then(data =>{console.log(data)})

// Initiating the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`); 
});