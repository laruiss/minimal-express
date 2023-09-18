const Router = require('express').Router

const books = require('./books/books.controller')

const getMainRouter = () => {
  const router = new Router()

  router.get('/version', (req, res) => {
    res.json({ version: '0.0.1' })
  })

  router.use('/books', books)

  return router
}

module.exports = getMainRouter