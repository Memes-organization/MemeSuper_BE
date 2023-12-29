import { ErrorResponse } from './ErrorResponse'
import path from 'path'

function isImgFile(str) {
  const imgFileRegex = /^\.(jpg|jpeg|png)$/i
  return imgFileRegex.test(str)
}

export const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'image' && isImgFile(path.extname(file.originalname))) {
    return cb(null, true)
  }
  return cb(new ErrorResponse('Only png/jpg images can be uploaded'))
}
