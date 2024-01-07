import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export class SuccessResponse {
  constructor(message, statusCode, metadata, options) {
    this.statusCode = statusCode ?? StatusCodes.OK
    this.success = getReasonPhrase(this.statusCode)
    this.msg = message ?? getReasonPhrase(this.statusCode)
    this.metadata =
      metadata instanceof Object && Object.keys(metadata).length > 0 ? metadata : undefined
    this.options =
      options instanceof Object && Object.keys(options).length > 0 ? options : undefined
  }
}

// OK
export class OKSuccess extends SuccessResponse {
  constructor(message, metadata, options) {
    super(message, StatusCodes.OK, metadata, options)
  }
}

// CREATED
export class CreatedSuccess extends SuccessResponse {
  constructor(message, metadata, options) {
    super(message, StatusCodes.CREATED, metadata, options)
  }
}
