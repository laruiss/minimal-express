const pino = require('pino')
const pinoHttp = require('pino-http')

const isProd = process.env.NODE_ENV === 'production'

const createLogger = (app) => {
  const logger = pinoHttp({
    logger: pino(),
  })
  return logger
}

module.exports = createLogger