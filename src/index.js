const express = require('express')
const app = express()
const port = 3000

app.get('/version', (req, res) => {
  res.json({ version: '0.0.1' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
