import { ErrorResponse } from './ErrorResponse'
import path from 'path'
export const fileFilter = (req, file, cb) => {
  if (
    file.fieldname === 'image' &&
    (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg')
  ) {
    return cb(null, true)
  }
  return cb(new ErrorResponse('Only png/jpg images can be uploaded'))
}
