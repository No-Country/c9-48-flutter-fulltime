const { Router } = require('express');
const { getHomes, createHome, getHome, deleteHome, editHome } = require('../controllers/homeControllers');

const route = Router();

route.get('/', getHomes);

route.get('/:id', getHome);

route.post('/', createHome);

route.delete('/:id', deleteHome);

route.put('/:id', editHome);

module.exports = route;