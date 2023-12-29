import express from 'express'
import compression from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import errorHandling from './middlewares/errorHandling'
import appRoute from './routes'

const app = express()

// ---------------------
app.use(compression())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))

// connect db ----------

// routes --------------
app.use('/', appRoute)

// handle error
app.use(errorHandling)

export default app
