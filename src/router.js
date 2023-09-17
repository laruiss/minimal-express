const Router = require('express').Router

const getMainRouter = () => {
  const router = new Router()

  router.get('/version', (req, res) => {
    res.json({ version: '0.0.1' })
  })

  return router
}

module.exports = getMainRouter