const { Schema, model } = require('mongoose')

const DOCUMENT_NAME = 'Meme'
const COLLECTION_NAME = 'Meme'

const memeSchema = new Schema(
  {
    fieldname: { type: String },
    mimetype: { type: String },
    filename: { type: String },
    size: { type: Number },
  },
  { timestamps: true, collection: COLLECTION_NAME },
)

export const Meme = model(DOCUMENT_NAME, memeSchema)
