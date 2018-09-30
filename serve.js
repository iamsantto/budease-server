import {} from 'dotenv/config'
import morgan from 'morgan'

import app from './source/app'
import models from './source/models'

const port = process.env.PORT
const logger = morgan(':method :url :status :response-time ms - :res[content-length]')

app.use(logger)

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Serving on port : ${port}`)
  })
})
