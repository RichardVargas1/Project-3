const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This seeded db file is responsible for importing the following speeches

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactappspeechshare",
    {
        useMongoClient: true
    }
);

const speechSeed = [
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    },
    {
        title: "",
        author: "",
        synopsis:
            "",
    }
];

db.Speech
    .remove({})
    .then(() => db.Speech.collection.insertMany(speechSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });