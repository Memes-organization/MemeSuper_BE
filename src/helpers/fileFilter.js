import { ErrorResponse } from './ErrorResponse'

const imgMimetype = ['image/jpeg', 'image/png', 'image/gif']

export const fileFilter = (req, file, cb) => {
  if (imgMimetype.includes(file.mimetype)) return cb(null, true)
  return cb(new ErrorResponse('Only png/jpg images can be uploaded'))
}
