import { StatusCodes } from 'http-status-codes'
import { CreatedSuccess, OKSuccess } from 'src/core/SuccessResponse'
import { NotFoundException } from 'src/core/ErrorResponse'
import { getPathMemeImg, pickKeys } from 'src/utils'
import { createMeme, getPageOfListMeme } from 'src/services/memeService'

export const uploadMeme = async (req, res, next) => {
  const memeData = req.files.map((item) =>
    pickKeys(item, ['fieldname', 'mimetype', 'filename', 'size']),
  )

  await createMeme(memeData)

  res.status(StatusCodes.CREATED).json(new CreatedSuccess('Upload meme success'))
}

export const getListMeme = async (req, res, next) => {
  const page = +req.query.page || 1
  const limit = +req.query.limit || 10

  const listMeme = await getPageOfListMeme({ page, limit })

  res.status(StatusCodes.OK).json(new OKSuccess('', { ...listMeme }))
}

export const downloadMeme = async (req, res, next) => {
  const { filename } = req.params

  return res.download(getPathMemeImg(filename), (err) => {
    if (err) next(new NotFoundException(`File ${filename} is not found`))
  })
}
