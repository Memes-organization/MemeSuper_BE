import _ from 'lodash'
import path from 'path'

// lodash
export const pickKeys = (obj = {}, keys = []) => {
  return _.pick(obj, keys)
}

export const omitKeys = (obj = {}, keys = []) => {
  return _.omit(obj, keys)
}

// get path meme image
export const getPathMemeImg = (filename) => {
  return path.join(process.cwd(), `public/meme/${filename}`)
}
