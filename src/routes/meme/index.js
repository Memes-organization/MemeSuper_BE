import express from 'express'
import { getListMeme, uploadMeme } from '~/controllers/memeController'
import asyncHandler from '~/helpers/asyncHandler'
import { imgUploadMW } from '~/middlewares/imgUploadMW'

const router = express.Router()

/**
 * /meme/uploadMeme
 * /meme/listMeme
 */
router.post('/uploadMeme', imgUploadMW, asyncHandler(uploadMeme))
router.get('/listMeme', asyncHandler(getListMeme))

export default router
