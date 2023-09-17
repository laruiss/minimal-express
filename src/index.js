
const createApp = require('./app')
const config = require('./config')

const port = config.port

start()

async function start () {
  const app = createApp()
  
  const server = await app.listen(port, '0.0.0.0') // Listen on every network interface
  console.log(`Server listening on ${server.address().address}:${server.address().port}`)
}
