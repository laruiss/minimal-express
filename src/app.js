const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const createLogger = require('./utils/logger')
const getMainRouter = require('./router')
const connect = require('./db/connect')
const logger = createLogger()

const createApp = async () => {
  const app = express()

  app.use(logger)

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors({ origin: '*' }))
  app.use(helmet({
    crossOriginResourcePolicy: false,
  }))

  const mainRouter = getMainRouter()
  app.use('/api', mainRouter)

  await connect()

  return app
}

module.exports = createApp
