import express from 'express'
import { uploadMeme } from '~/controllers/memeController'
import asyncHandler from '~/helpers/asyncHandler'
import { imgUploadMW } from '~/middlewares/imgUploadMW'

const router = express.Router()

// /meme/uploadMeme
router.post('/uploadMeme', imgUploadMW, asyncHandler(uploadMeme))

export default router
