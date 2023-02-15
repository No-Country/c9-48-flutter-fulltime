const { Router } = require('express');
const { getOwners, registerOwner, deleteOwner, getOwner, editOwner } = require('../controllers/ownersControllers');
const route = Router();

route.get('/', getOwners);

route.get('/:id', getOwner);

route.post('/', registerOwner);

route.delete('/:id', deleteOwner);

route.put('/:id', editOwner);

module.exports = route