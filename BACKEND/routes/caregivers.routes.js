const { Router } = require('express');
const { getCaregivers, getCaregiver, registerCaregiver } = require('../controllers/caregiversControllers');

const route = Router();

route.get('/', getCaregivers);

route.get('/:id', getCaregiver);

route.post('/', registerCaregiver);


module.exports = route;