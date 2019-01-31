const express = require('express')
const router = express.Router()
const userAuth = require('../../models/userAuth')
const passport = require('../../passportAuth')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    userAuth.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('userAuth.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newAppUser = new userAuth({
                username: username,
                password: password
            })
            newAppUser.save((err, savedAppUser) => {
                if (err) return res.json(err)
                res.json(savedAppUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/userAuth.js, login, req.body: ');
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router