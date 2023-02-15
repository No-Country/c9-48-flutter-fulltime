const { Schema, model } = require('mongoose');

const ownerSchema = new Schema({
  name: {
    type: String,
    trim : true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  phone: {
    type: Number,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    enum: ['male', 'female', 'other']
  },
  birthdate: {
    type: String,
    trim: true,
  }
})

module.exports = model('Owner', ownerSchema)