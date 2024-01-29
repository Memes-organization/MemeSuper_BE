import { customLabelsPaginateMongoose } from 'src/utils/const'

const { Meme } = require('src/schemas/memeSchema')

export const createMeme = async (memeData) => {
  return await Meme.create(memeData)
}

/**
 *
 * @param {page, limit} options
 * @returns
 */
export const getPageOfListMeme = async (options) => {
  const { page, limit } = options

  return await Meme.paginate(
    {},
    {
      page,
      limit,
      sort: { createdAt: -1 },
      customLabels: { ...customLabelsPaginateMongoose },
      select: '_id mimetype filename size createdAt',
    },
  )
}
