const passport = require('passport')
const localPass = require('./localPass')
const User = require('../models/userAuth')

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, done) => {
	console.log('*** called, user: ')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

// user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
	console.log('User called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

//  Use Strategies 
passport.use(localPass)

module.exports = passport