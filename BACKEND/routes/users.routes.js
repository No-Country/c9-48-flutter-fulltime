const { Router } = require('express');
const { getUsers, getUser, registerUser, deleteUser, editUser } = require('../controllers/usersControllers');
const route = Router();

route.get('/', getUsers);

route.get('/:id', getUser);

route.post('/', registerUser);

route.delete('/:id', deleteUser);

route.put('/:id', editUser);

module.exports = route