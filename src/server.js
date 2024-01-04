import 'dotenv/config'
import { createServer } from 'http'
import app from './app'

const PORT = process.env.PORT
const server = createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Root path ::`, process.cwd())
})
