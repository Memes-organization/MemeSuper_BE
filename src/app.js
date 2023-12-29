import express from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import path from 'path'
import errorHandling from './middlewares/errorHandling'
import appRoute from './routes'
import ConnectMongo from './config/ConnectMongo'

const app = express()

// ---------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(process.cwd(), 'public')))
app.use(compression())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// connect db ----------
ConnectMongo.getInstance()

// routes --------------
app.use('/', appRoute)

// handle error
app.use(errorHandling)

export default app
