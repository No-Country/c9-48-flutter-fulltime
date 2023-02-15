const CustomError = require('../helpers/customErrors')
const ownerModel = require('../models/ownerModel')


const getOwners = async (req, res) => {
  try {
    const owners = await ownerModel.find();
    if(!owners.length) throw new CustomError('no hay usuarios: owners', 404);
    res.status(200).json({owners});
  } catch (error) {
    res.status(error.code || 400).json({message : error.message});
  }
}
const getOwner = async (req, res) => {
  try {
    const { id } = req.params
    const owner = await ownerModel.findById(id)
    if(!owner) throw new CustomError('usuario no encontrado', 404);
    res.status(200).json({owner});
  } catch (error) {
    res.status(error.code || 400).json({message : error.message});
  }
}

const registerOwner = async (req, res) => {
  try {
    const { password, ...user } = req.body
    user.password = password
    const newOwner = new ownerModel(user)
    await newOwner.save()
    res.status(201).json({message: `usuario owner creado: ${newOwner.name}`})
  } catch (error) {
    res.status(400 || error.code).json({message : error.message})
  }
}

const deleteOwner = async (req, res) => {
try {
  const { id } = req.params
  const ownerDeleted = await ownerModel.findByIdAndDelete(id);
  if(!ownerDeleted) throw new CustomError('usuario no encontrado', 404)
  res.status(200).json({message : "usuario eliminado"});
} catch (error) {
  res.status(error.code || 400).json({message : error.message})
}
};

const editOwner = async (req, res) => {
  try {
    const { id } = req.params
    const editedOwner = await ownerModel.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json({message: 'usuario editado', editedOwner})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}

module.exports = {
  getOwners,
  registerOwner,
  deleteOwner,
  editOwner,
  getOwner
}