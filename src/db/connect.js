const mongoose = require('mongoose')
const config = require('../config')

const connect = () => {
  console.log(config.mongoDbUrl)
  return mongoose.connect(config.mongoDbUrl)
}

module.exports = connect
