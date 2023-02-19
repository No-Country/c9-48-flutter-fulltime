const CustomError = require("../helpers/customErrors");
const homeModel = require('../models/homeModel');

const getHomes = async (req, res) => {
  try {
    const homes = await homeModel.find().populate('owner');
    if(!homes.length) throw new CustomError('no se encontraron resultados', 404);
    res.status(200).json({homes})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message});
  }
};

const getHome = async (req, res) => {
  try {
    const { id } = req.params
    const home = await homeModel.findById(id);
    if(!home) throw new CustomError('home no encontrada', 404);
    res.status(200).json({home});
  } catch (error) {
    res.status(error.code || 400).json({message: error.message});
  }
}

const createHome = async (req, res) => {
  try {
    const body = req.body;
    const newHome = new homeModel(body)
    await newHome.save()
    if(!newHome) throw new CustomError('error al guardar la home', 500);
    res.status(201).json({message: 'home añadida'});
  } catch (error) {
    res.status(error.code || 400).json({message: error.message});
  }
};
const deleteHome = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHome = await homeModel.findByIdAndDelete(id);
    if(!deletedHome) throw new CustomError('home no encontrada', 404)
    res.status(200).json({message: 'home eliminada'})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message});
  }
}

const editHome = async (req, res) => {
  try {
    const { id} = req.params;
    const body = req.body;
    const homeEdited = await homeModel.findByIdAndUpdate(id, body, {new: true})
    res.status(200).json({message: 'home editada', homeEdited});
  } catch (error) {
    res.status(error.code || 400).json({message: error.message});
  }
}

module.exports = {
  getHomes,
  getHome,
  createHome,
  deleteHome,
  editHome
}