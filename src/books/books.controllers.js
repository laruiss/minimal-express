const Router = require('express').Router

const Book = require('./book.model')

const router = new Router()

const getBooks = async (req, res) => {
  // Get all books from db
  const books = await Book.find()
  // TODO: pagination
  res.json(
    {
      count: books.length,
      books,
    },
  )
}

const getBookById = async (req, res) => {
  // Get book by id from db
  const book = await Book.findById(req.params.id)
  res.json(book)
}

const saveBook = async (req, res) => {
  const {
    title,
    author,
    desc,
    theme,
    year,
  } = req.body

  // TODO: check input data
  if (typeof title !== 'string' || title.length === 0) {
    res.status(400).json({ err: 400, msg: 'Le titre doit être une chaîne de caractères non vide' })
    return
  }
  if (typeof author !== 'string' || author.length === 0) {
    res.status(400).json({ err: 400, msg: 'L’auteur doit être une chaîne de caractères non vide' })
    return
  }
  if (typeof theme !== 'string' || theme.length === 0) {
    res.status(400).json({ err: 400, msg: 'Le thème doit être une chaîne de caractères non vide' })
    return
  }
  if (typeof year !== 'number') {
    res.status(400).json({ err: 400, msg: 'L\'année doit être un nombre' })
    return
  }

  const book = new Book({
    title,
    author,
    desc,
    theme,
    year,
  })

  try {
    const savedBook = await book.save()
    res.status(201).json(savedBook)
  } catch (error) {
    res.status(500).json({ err: 500, msg: error.message })
  }
}

const updateBook = async (req, res) => {
  const id = req.params.id

  const foundBook = await Book.findById(id)
  if (!foundBook) {
    res.status(404).json({ err: 404, msg: 'Livre introuvable' })
    return
  }

  const {
    title,
    author,
    desc,
    theme,
    year,
  } = req.body

  // TODO: check input data

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, desc, theme, year }, { new: true })
    res.status(200).json(updatedBook)
  } catch (error) {
    res.status(500).json({ err: 500, msg: error.message })
  }
}

const removeBook = async (req, res) => {
  const id = req.params.id

  const foundBook = await Book.findById(id)
  if (!foundBook) {
    res.status(404).json({ err: 404, msg: 'Livre introuvable' })
    return
  }

  try {
    await Book.findByIdAndDelete(id)
    res.status(200).json(foundBook)
  } catch (error) {
    res.status(500).json({ err: 500, msg: error.message })
  }
}

router.get('', getBooks)
router.get('/:id', getBookById)
router.post('', saveBook)
router.patch('/:id', updateBook)
router.delete('/:id', removeBook)

module.exports = router
