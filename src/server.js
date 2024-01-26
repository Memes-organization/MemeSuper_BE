import 'dotenv/config'
import { createServer } from 'http'
import app from './app'
import env from './config/envalid'

const PORT = env.PORT
const server = createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
