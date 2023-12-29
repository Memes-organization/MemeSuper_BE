import multer from 'multer'
import path from 'path'
import { fileFilter } from '~/helpers/fileFilter'

const FILE_LIMIT_SIZE = 1 * 1024 * 1024 // 1 MB

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), 'public/meme'))
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname)

    cb(null, file.fieldname + '-' + uniqueSuffix)
  },
})

const upload = multer({
  fileFilter: fileFilter,
  storage: storage,
  limits: FILE_LIMIT_SIZE,
}).array('image')

export const imgUploadMW = (req, res, next) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) next(err)
    else if (err) next(err)
    next()
  })
}
