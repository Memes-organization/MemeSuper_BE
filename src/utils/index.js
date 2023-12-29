import _ from 'lodash'
import path from 'path'

// lodash
export const pickKeys = (obj = {}, arr = []) => {
  return _.pick(obj, arr)
}

export const omitKeys = (obj = {}, arr = []) => {
  return _.omit(obj, arr)
}

// get path meme image
export const getPathMemeImg = (filename) => {
  return path.join(process.cwd(), `public/meme/${filename}`)
}
