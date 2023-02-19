const { Router } = require('express');
const { login } = require('../controllers/loginController');

const route = Router();

route.post('/', login);

module.exports = route;