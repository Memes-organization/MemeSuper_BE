import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export class SuccessResponse {
  constructor(msg, statusCode, metadata, options) {
    this.statusCode = statusCode ?? StatusCodes.OK
    this.msg = msg ?? getReasonPhrase(this.statusCode)
    this.metadata =
      metadata instanceof Object && Object.keys(metadata).length > 0 ? metadata : undefined
    this.options =
      options instanceof Object && Object.keys(options).length > 0 ? options : undefined
  }
}

// OK
export class OKSuccess extends SuccessResponse {
  constructor(msg, metadata, options) {
    super(msg, StatusCodes.OK, metadata, options)
  }
}

// CREATED
export class CreatedSuccess extends SuccessResponse {
  constructor(msg, metadata, options) {
    super(msg, StatusCodes.CREATED, metadata, options)
  }
}
