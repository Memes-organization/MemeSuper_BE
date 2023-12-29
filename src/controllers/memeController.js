import { StatusCodes } from 'http-status-codes'
import SuccessResponse from '~/helpers/SuccessResponse'
import { Meme } from '~/schemas/memeSchema'
import { pickKeys } from '~/utils'

export const uploadMeme = async (req, res, next) => {
  // const { fieldname, mimetype, filename, size } = req.file
  // const meme = await Meme.create({ fieldname, mimetype, filename, size })

  const memeCreate = req.files.map((item) =>
    pickKeys(item, ['fieldname', 'mimetype', 'filename', 'size']),
  )

  const meme = await Meme.insertMany(memeCreate)

  res.json(new SuccessResponse('Upload success', StatusCodes.OK, { meme }))
}
