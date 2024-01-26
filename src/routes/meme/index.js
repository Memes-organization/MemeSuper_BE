import express from 'express'
import { downloadMeme, getListMeme, uploadMeme } from 'src/controllers/memeController'
import asyncHandler from 'src/helpers/asyncHandler'
import { imgUploadMW } from 'src/middlewares/imgUploadMW'

const router = express.Router()

/**
 * Get list meme
 * [GET] /api/meme/listMeme
 */
router.get('/getListMeme', asyncHandler(getListMeme))

/**
 * Download meme
 * [GET] /api/downloadMeme/:filename
 */
router.get('/downloadMeme/:filename', asyncHandler(downloadMeme))

/**
 * Upload meme
 * [POST] /api/meme/uploadMeme
 */
router.post('/uploadMeme', imgUploadMW, asyncHandler(uploadMeme))

export default router
