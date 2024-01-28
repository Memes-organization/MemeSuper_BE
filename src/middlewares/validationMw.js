import { ValidationException } from 'src/helpers/ErrorResponse'

const Joi = require('joi')

const memeListQuerySchema = Joi.object({
  page: Joi.number().integer().min(1),
  limit: Joi.number().integer().min(1).max(100),
})

export const validationQuery = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.query, { abortEarly: false })

    if (error) {
      next(
        new ValidationException(
          'Invalid query data, please check your input and try again.',
          error,
        ),
      )
    }

    next()
  }
}
