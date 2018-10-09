import express from 'express'
import router from '../config/routes'

const app = express()

/* Initialize API routes */
app.use('/api/v1.0', router)

export default app
