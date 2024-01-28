import express from 'express'
import { NotFoundException } from 'src/core/ErrorResponse'

const router = express.Router()

router.use((req, res, next) => {
  return next(new NotFoundException(`URL Not Found: ${req.url} `))
})

export default router
