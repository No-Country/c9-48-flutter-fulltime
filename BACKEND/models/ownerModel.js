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
  phone: {
    type: Number,
    trim: true,
    required: true
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: ['male', 'female', 'other']
  },
  birthdate: {
    type: Date,
    trim: true,
    required: true
  }
})

module.exports = model('Owner', ownerSchema)