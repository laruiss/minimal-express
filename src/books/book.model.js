const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  desc: String,
  theme: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Book', bookSchema)
