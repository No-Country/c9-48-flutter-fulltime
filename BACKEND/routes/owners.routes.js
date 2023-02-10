const { Router } = require('express');
const { getOwners } = require('../controllers/ownersControllers')
const route = Router()

route.get('/', getOwners)

module.exports = route