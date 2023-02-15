const CustomError = require("../helpers/customErrors")
const CaregiverModel = require("../models/caregiverModel")

const getCaregivers = async (req, res) => {
  try {
    const caregivers = await CaregiverModel.find()
    res.status(200).json({caregivers})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

const getCaregiver = async (req, res) =>  {
  try {
    const { id } = req.params
    const caregiver = await CaregiverModel.findById(id)
    if(!caregiver) throw new CustomError('cuidador no ncontrado', 404);
    res.satus(200).json({caregiver})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
} 

const registerCaregiver = async (req, res) => {
  try {
    const { password, ...user } = req.body;
    user.password = password
    const newCaregiver = new CaregiverModel(user);
    await newCaregiver.save();
    res.status(201).json({message: `perfil cuidador creado: ${newCaregiver.name}`})
  } catch (error) {
    res.satus(400).json({message: error.message})
  }
}
module.exports = {
  getCaregivers,
  getCaregiver,
  registerCaregiver
}