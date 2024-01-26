import { StatusCodes } from 'http-status-codes'
import { Meme } from 'src/schemas/memeSchema'
import { CreatedSuccess, OKSuccess } from 'src/helpers/SuccessResponse'
import { NotFoundException } from 'src/helpers/ErrorResponse'
import { getPathMemeImg, pickKeys } from 'src/utils'
import { customLabelsPaginateMongoose } from 'src/utils/const'

export const uploadMeme = async (req, res, next) => {
  const memeCreate = req.files.map((item) =>
    pickKeys(item, ['fieldname', 'mimetype', 'filename', 'size']),
  )

  const meme = await Meme.insertMany(memeCreate)

  res.status(StatusCodes.CREATED).json(new CreatedSuccess('Upload image success', { meme }))
}

export const getListMeme = async (req, res, next) => {
  const page = +req.query.page || 1
  const limit = +req.query.limit || 10
  const listMeme = await Meme.paginate(
    {},
    {
      page,
      limit,
      sort: { createdAt: -1 },
      customLabels: { ...customLabelsPaginateMongoose, docs: 'meme' },
    },
  )

  res.status(StatusCodes.OK).json(new OKSuccess('', { ...listMeme }))
}

export const downloadMeme = async (req, res, next) => {
  const { filename } = req.params
  return res.download(getPathMemeImg(filename), (err) => {
    if (err) next(new NotFoundException(`File ${filename} not found`))
  })
}
