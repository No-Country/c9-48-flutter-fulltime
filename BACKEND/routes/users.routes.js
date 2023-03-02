const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, getUser, registerUser, deleteUser, editUser } = require('../controllers/usersControllers');
const emailUnique = require('../helpers/emailUnique');
const validateFields = require('../middlewares/validateFields');
const veryfyAuth = require('../middlewares/veryAuth');
const route = Router();

route.get('/', getUsers);

route.get('/:id', getUser);

route.post('/',
check('name').not().isEmpty().withMessage('nombre requerido').isLength({min: 3, max:25}).withMessage('minimo 3 y maximo 25 caracteres'),
check('email').isEmail().withMessage('ingrese un email valido').custom(emailUnique),
check('password').isLength({min: 8, max:25}).withMessage('minimo 8 y maximo 25 caracteres'),
validateFields,
registerUser);

route.delete('/:id', veryfyAuth, deleteUser);

route.put('/:id', editUser);

module.exports = route;