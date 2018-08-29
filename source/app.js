import express from 'express'
import morgan from 'morgan'

const app = express()
const logger = morgan(':method :url :status :response-time ms - :res[content-length]')

app.use(logger)

export default app
