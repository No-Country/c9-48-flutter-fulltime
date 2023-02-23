const CustomError = require('../helpers/customErrors');
const petModel = require('../models/petModel');

const getPets = async (req, res) => {
  try {
    
    const pets = await petModel.find()
    res.status(200).json({pets});
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}

const createPet = async (req, res) => {
  try {
    const body = req.body;
    const newPet = new petModel(body);
    await newPet.save()
    res.status(201).json({message: 'mascota creada'});
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}

const deletePet = async (req, res) => {
  try {
    const { id } = req.params
    const petDeleted = await petModel.findByIdAndDelete(id);
    if(!petDeleted) throw new CustomError('mascota no encontrada', 404);
    res.status(200).json({message: 'mascota eliminada'})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}

const getPet = async (req, res) => {
  try {
    const { id } = req.params
    const pet = await petModel.findById(id);
    if(!pet) throw new CustomError('mascota no encontrada', 404);
    res.status(200).json({pet})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}


const editPet = async (req, res) => {
  try {
    const { id } = req.params
    const petEdited = await petModel.findByIdAndUpdate(id, req.body, {new: true})
    if(!petEdited) throw new CustomError('mascota no encontrada', 404);
    res.status(200).json({message: 'mascota editada', petEdited})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}
module.exports = {
  getPets,
  createPet,
  deletePet,
  getPet,
  editPet
}