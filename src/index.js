
const createApp = require('./app')
const config = require('./config')

const port = config.port

start()

async function start () {
  const app = await createApp()
  
  await app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on ${port}`)
  }) // Listen on every network interface
}
