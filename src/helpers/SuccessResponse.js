import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export class SuccessResponse {
  constructor(msg, statusCode, metadata, options) {
    this.statusCode = statusCode || StatusCodes.OK
    this.msg = !msg ? getReasonPhrase(this.statusCode) : msg
    if (Array.isArray(metadata)) {
      this.metadata = metadata.length > 0 ? metadata : undefined
    } else if (metadata instanceof Object) {
      this.metadata = Object.keys(metadata).length > 0 ? metadata : undefined
    }
    this.options =
      options instanceof Object && Object.keys(options).length > 0 ? options : undefined
  }
}

// OK
export class OKSuccess extends SuccessResponse {
  constructor(msg, metadata, options, statusCode = StatusCodes.OK) {
    super(msg, statusCode, metadata, options)
  }
}

// CREATED
export class CreatedSuccess extends SuccessResponse {
  constructor(msg, metadata, options, statusCode = StatusCodes.CREATED) {
    super(msg, statusCode, metadata, options)
  }
}
