const express = require('express')

const createApp = () => {
  const app = express()

  app.get('/version', (req, res) => {
    res.json({ version: '0.0.1' })
  })

  return app
}

module.exports = createApp
