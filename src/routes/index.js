import express from 'express'
import { ReasonPhrases } from 'http-status-codes'
import { NotFoundException } from '~/helpers/ErrorResponse'
import memeRotue from './meme'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'SuperMeme is the future of the world' })
})

router.use('/meme', memeRotue)

router.use((req, res, next) => {
  const err = new NotFoundException(`URL ${ReasonPhrases.NOT_FOUND}`)
  return next(err)
})

export default router
