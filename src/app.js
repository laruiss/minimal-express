const express = require('express')

const createLogger = require('./utils/logger')
const getMainRouter = require('./router')
const connect = require('./db/connect')

const createApp = async () => {
  const app = express()

  const logger = createLogger()
  app.use(logger)

  app.use(express.json())

  const mainRouter = getMainRouter()
  app.use('/api', mainRouter)

  await connect()

  return app
}

module.exports = createApp
