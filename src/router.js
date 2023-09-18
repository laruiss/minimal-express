const Router = require('express').Router

const books = require('./books/books.controllers')
const auth = require('./auth/auth.controllers')

const getMainRouter = () => {
  const router = new Router()

  router.get('/healthcheck', (req, res) => {
    res.json({ msg: 'OK' })
  })

  router.get('/version', (req, res) => {
    res.json({ version: '0.0.1' })
  })

  router.use('/auth', auth)
  router.use('/books', books)

  return router
}

module.exports = getMainRouter
