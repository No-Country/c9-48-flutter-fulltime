const CustomError = require('../helpers/customErrors')
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const cloudinary = require('cloudinary').v2
cloudinary.config({
 cloud_name: "dcuutvq1r",
 api_key: "982233735337178",
 api_secret: "U-jmYYadEDGt634u2bG76x48CSw" 
})
const fs = require('fs-extra')

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if(!users.length) throw new CustomError('no hay usuarios', 404);
    res.status(200).json({users});
  } catch (error) {
    res.status(error.code || 400).json({message : error.message});
  }
}
const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await userModel.findById(id)
    if(!user) throw new CustomError('usuario no encontrado', 404);
    res.status(200).json({user});
  } catch (error) {
    res.status(error.code || 400).json({message : error.message});
  }
}

const registerUser = async (req, res) => {
  try {
    const { password, image, ...user } = req.body
    const res = await cloudinary.uploader.upload(req.file.path)
    const salt = bcrypt.genSaltSync(10);
    const passwordEncrypted = bcrypt.hashSync(password, salt)
    user.password = passwordEncrypted;
    user.image = res.secure_url
    user.imgID = res.public_id
    const newUser = new userModel(user)
    await newUser.save()
    await fs.unlink(req.file.path)
    res.status(201).json({message: `usuario creado: ${newUser.name}`})
  } catch (error) {
    res.status(error.code|| 400 ).json({message : error.message})
  }
}

const deleteUser = async (req, res) => {
try {
  const { id } = req.params
  const userDeleted = await userModel.findByIdAndDelete(id);
  if(!userDeleted) throw new CustomError('usuario no encontrado', 404)
  await cloudinary.uploader.destroy(userDeleted.imgID)
  res.status(200).json({message : "usuario eliminado"});
} catch (error) {
  res.status(error.code || 400).json({message : error.message})
}
};

const editUser = async (req, res) => {
  try {
    const { id } = req.params
    const editedUser = await userModel.findByIdAndUpdate(id, req.body, {new: true})
    res.status(200).json({message: 'usuario editado', editedUser})
  } catch (error) {
    res.status(error.code || 400).json({message: error.message})
  }
}

module.exports = {
  getUsers,
  registerUser,
  deleteUser,
  editUser,
  getUser
}