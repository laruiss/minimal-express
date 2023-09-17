const createApp = require('./app')
const port = 3000

start()

function start () {
  const app = createApp()
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
