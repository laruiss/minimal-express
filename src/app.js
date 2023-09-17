const express = require('express')
const createLogger = require('./logger')

const createApp = () => {
  const app = express()

  const logger = createLogger()
  app.use(logger)

  app.get('/version', (req, res) => {
    res.json({ version: '0.0.1' })
  })

  return app
}

module.exports = createApp
