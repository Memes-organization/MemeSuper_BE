import express from 'express'
import { downloadMeme, getListMeme, uploadMeme } from 'src/controllers/memeController'
import asyncHandler from 'src/helpers/asyncHandler'
import { imgUploadMW } from 'src/middlewares/imgUploadMW'

const router = express.Router()

/**
 * /api/meme/uploadMeme
 * /api/meme/listMeme
 * /api/downloadMeme/:filename
 */
router.post('/uploadMeme', imgUploadMW, asyncHandler(uploadMeme))
router.get('/getListMeme', asyncHandler(getListMeme))
router.get('/downloadMeme/:filename', asyncHandler(downloadMeme))

export default router
