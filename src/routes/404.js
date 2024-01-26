import express from 'express'
import { ReasonPhrases } from 'http-status-codes'
import { NotFoundException } from 'src/helpers/ErrorResponse'

const router = express.Router()

router.use((req, res, next) => {
  return next(new NotFoundException(`URL ${req.url} ${ReasonPhrases.NOT_FOUND}`))
})

export default router
