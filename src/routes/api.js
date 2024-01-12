import express from 'express'
import memeRotue from './meme'

const router = express.Router()

// api
router.use('/meme', memeRotue)

export default router
