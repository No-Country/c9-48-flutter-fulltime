const { Router } = require('express');
const { login } = require('../controllers/loginController');
const { check } = require('express-validator');
const validateFields = require('../middlewares/validateFields');

const route = Router();

route.post('/',
check('email').isEmail().withMessage('ingrese um email valido'),
check('password').isLength({min: 8, max:25}).withMessage('minimo 8 y maximo 25 caracteres'),
validateFields,
login);

module.exports = route;