import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT: string = process.env.PORT ?? '3000'

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
