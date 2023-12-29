import 'dotenv/config'
import path from 'path'
import app from './app'

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Root path ::`, process.cwd())
})
