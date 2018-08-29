import app from './source/app'
import {} from 'dotenv/config'

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Serving on port : ${port}`)
})
