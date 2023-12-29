import express from 'express'
import { downloadMeme, getListMeme, uploadMeme } from '~/controllers/memeController'
import asyncHandler from '~/helpers/asyncHandler'
import { imgUploadMW } from '~/middlewares/imgUploadMW'

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
