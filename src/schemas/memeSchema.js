const { Schema, model } = require('mongoose')
import mongoosePaginate from 'mongoose-paginate-v2'

const DOCUMENT_NAME = 'Meme'
const COLLECTION_NAME = 'Meme'

const memeSchema = new Schema(
  {
    mimetype: { type: String },
    filename: { type: String },
    size: { type: Number },
  },
  { timestamps: true, collection: COLLECTION_NAME },
)

memeSchema.plugin(mongoosePaginate)

export const Meme = model(DOCUMENT_NAME, memeSchema)
