import express from 'express'
import memeRotue from './meme'

const router = express.Router()
/**
 * [GET] /api/meme/listMeme
 * [GET] /api/downloadMeme/:filename
 *
 * [POST] /api/meme/uploadMeme
 */
router.use('/meme', memeRotue)

export default router
