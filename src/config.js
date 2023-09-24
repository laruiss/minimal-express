const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  mongoDbUrl: process.env.MONGODB_URL,
  port: process.env.PORT,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
}
