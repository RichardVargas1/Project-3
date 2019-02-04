const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speechSchema = new Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  synopsis: { type: String },
});

const speech = mongoose.model("Speech", speechSchema);

module.exports = speech;