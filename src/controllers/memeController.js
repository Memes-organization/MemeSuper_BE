import { StatusCodes } from 'http-status-codes'
import { CreatedSuccess, OKSuccess, SuccessResponse } from '~/helpers/SuccessResponse'
import { Meme } from '~/schemas/memeSchema'
import { getPathMemeImg, pickKeys } from '~/utils'

export const uploadMeme = async (req, res, next) => {
  // const { fieldname, mimetype, filename, size } = req.file
  // const meme = await Meme.create({ fieldname, mimetype, filename, size })

  const memeCreate = req.files.map((item) =>
    pickKeys(item, ['fieldname', 'mimetype', 'filename', 'size']),
  )

  const meme = await Meme.insertMany(memeCreate)

  res.status(StatusCodes.CREATED).json(new CreatedSuccess('Upload image success', { meme }))
}

export const getListMeme = async (req, res, next) => {
  const page = +req.query.page || 1
  const limit = +req.query.limit || 10
  const listMeme = await Meme.paginate({}, { page, limit, sort: { createdAt: -1 } })

  res.status(StatusCodes.OK).json(new OKSuccess('', { ...listMeme }))
}

export const downloadMeme = (req, res, next) => {
  res.download(getPathMemeImg(req.params.filename))
}
