import express from 'express'
import asyncHandler from '@src/helpers/asyncHandler'
import { imgUploadMW } from '@src/middlewares/imgUploadMW'
import { downloadMeme, getListMeme, uploadMeme } from '@src/controllers/memeController'

const router = express.Router()

/**
 * /meme/uploadMeme
 * /meme/listMeme
 * /downloadMeme/:filename
 */
router.post('/uploadMeme', imgUploadMW, asyncHandler(uploadMeme))
router.get('/listMeme', asyncHandler(getListMeme))
router.get('/downloadMeme/:filename', asyncHandler(downloadMeme))

export default router
