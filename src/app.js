const express = require('express')

const createLogger = require('./logger')
const getMainRouter = require('./router')

const createApp = () => {
  const app = express()

  const logger = createLogger()
  app.use(logger)

  const mainRouter = getMainRouter()
  app.use(mainRouter)

  return app
}

module.exports = createApp
