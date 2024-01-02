import { StatusCodes, ReasonPhrases } from 'http-status-codes'

export class ErrorResponse extends Error {
  constructor(message, statusCode = StatusCodes.BAD_REQUEST, options = {}) {
    super(message)
    this.name = 'ErrorResponse'
    this.statusCode = statusCode
    this.msg = message
    this.options =
      options instanceof Object && Object.keys(options).length > 0 ? options : undefined
    Error.captureStackTrace(this, this.constructor)
  }
}

export class BadRequestException extends ErrorResponse {
  constructor(message = ReasonPhrases.BAD_REQUEST, options = {}) {
    super(message, StatusCodes.BAD_REQUEST, options)
    this.name = 'BadRequestException'
  }
}

export class UnauthorizedException extends ErrorResponse {
  constructor(message = ReasonPhrases.UNAUTHORIZED, options = {}) {
    super(message, StatusCodes.UNAUTHORIZED, options)
    this.name = 'UnauthorizedException'
  }
}

export class NotFoundException extends ErrorResponse {
  constructor(message = ReasonPhrases.NOT_FOUND, options = {}) {
    super(message, StatusCodes.NOT_FOUND, options)
    this.name = 'NotFoundException'
  }
}

export class ConflictException extends ErrorResponse {
  constructor(message = ReasonPhrases.CONFLICT, options = {}) {
    super(message, StatusCodes.CONFLICT, options)
    this.name = 'ConflictException'
  }
}

export class UnprocessableEntityException extends ErrorResponse {
  constructor(message = ReasonPhrases.UNPROCESSABLE_ENTITY, options = {}) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY, options)
    this.name = 'UnprocessableEntityException'
  }
}
