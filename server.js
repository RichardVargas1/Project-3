const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
const passport = require('./passportAuth');
const routes = require("./routes");
const session = require('express-session')
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

// Initiating the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});