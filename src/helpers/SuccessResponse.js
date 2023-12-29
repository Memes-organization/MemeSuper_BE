import { ReasonPhrases, StatusCodes } from 'http-status-codes'

class SuccessResponse {
  constructor(msg, statusCode, metadata, options) {
    this.statusCode = statusCode || StatusCodes.OK
    this.msg = !msg ? ReasonPhrases.OK : msg
    this.metadata =
      metadata instanceof Object && Object.keys(metadata).length > 0 ? metadata : undefined
    this.options =
      options instanceof Object && Object.keys(options).length > 0 ? options : undefined
  }
}

export default SuccessResponse
