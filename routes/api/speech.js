
const express = require('express')
const router = express.Router()
const speech = require('../../models/speech')

router.post("/post", (req,res) => {
    const {title, author, genre, description} = req.body

    const newSpeech = new speech({
        title: title,
        author: author,
        genre: genre,
        description: description
    })

    newSpeech.save((err, savedTopic) => {
        if (err) return res.json(err)
        res.json(savedTopic)
    })
})

router.get("/all", (req,res) => {
    Speech.find({}).sort({date: -1}).then(results => res.json(results))
})

router.get("/politics", (req,res) => {
    Speech.find({genre: "funny"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/sports", (req,res) => {
    Speech.find({genre: "sports"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/film", (req,res) => {
    Speech.find({genre: "film"}).sort({date: -1}).then(results => res.json(results))
})

router.get("/api/speech/:id", (req,res) => {
    Spech.findById(req.params.id).then(results => res.json(results))
})

module.exports = router