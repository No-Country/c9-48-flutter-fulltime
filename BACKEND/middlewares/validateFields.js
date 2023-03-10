const { validationResult } = require('express-validator');

const validateFields = (req, res, next) => {
  const { errors } = validationResult(req)
  if(errors.length !== 0) return res.status(400).json({'errores': errors.length , errors});
  next()
}

module.exports = validateFields;