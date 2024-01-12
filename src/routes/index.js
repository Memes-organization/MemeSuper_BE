import express from 'express'
import { ReasonPhrases } from 'http-status-codes'
import { NotFoundException } from '@src/helpers/ErrorResponse'
import apiRoute from './api'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'SuperMeme is the future of the world' })
})

router.use('/api', apiRoute)

router.use((req, res, next) => {
  return next(new NotFoundException(`URL ${ReasonPhrases.NOT_FOUND}`))
})

export default router
