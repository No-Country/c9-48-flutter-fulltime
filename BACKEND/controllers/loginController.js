const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const CustomError = require('../helpers/customErrors');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await userModel.findOne( {email} )
    if(!user) throw new CustomError('usuario no encontrado', 404);
   
      const isOk = bcrypt.compareSync(password, user.password);
      const token = jwt.sign({ email, id: user._id}, process.env.JWT_SECRET_TOKEN, { expiresIn: '24h'});
      if(!isOk) throw new CustomError('credenciales invalidas', 401);
      res.status(200).json({message: 'logeo correcto', token, user});
    
   } catch (error) {
    res.status(error.code || 500).json({message: error.message})
  }
};

module.exports = { login }