const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speechSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  description: { type: String },
});

const speech = mongoose.model("Speech", speechSchema);

module.exports = speech;