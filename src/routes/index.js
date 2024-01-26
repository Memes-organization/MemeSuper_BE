import express from 'express'
import apiRoute from './api'
import URLNotFoundRoute from './404'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'SuperMeme is the future of the world' })
})

router.use('/api', apiRoute)

router.use(URLNotFoundRoute)

export default router
