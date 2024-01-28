import { ValidationException } from 'src/helpers/ErrorResponse'

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
