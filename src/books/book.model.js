const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
  title: String,
  author: String,
  desc: String,
  theme: String,
  year: Number,
})

module.exports = mongoose.model('Book', bookSchema)
