const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const MongoStore = require('connect-mongo')(session)
const PORT = process.env.PORT || 3001;
const passport = require('./passport');
const routes = require('./routes/api');
const session = require('express-session')
const user = require('./routes/user');
const app = express();

// Sessions
app.use(
	session({
		secret: 'youtube-fun', //pick a random string to make the hash that is generated secure
		// store: new MongoStore({ mongooseConnection: dbConnection }),
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

// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/speechshare",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Initiating the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});