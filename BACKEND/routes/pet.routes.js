const { Router } = require('express');
const { getPets, createPet, deletePet, getPet, editPet } = require('../controllers/petControllers');

const router = Router();

router.get('/', getPets);

router.get('/:id', getPet);

router.post('/', createPet);

router.delete('/:id', deletePet);

router.put('/:id', editPet);

module.exports = router