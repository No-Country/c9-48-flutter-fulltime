const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
    enum: ['MALE', 'FEMALE', 'OTHER']
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'USER'
  },
  experience: {
    type: String,
    trim: true,
   
  },
  birthdate: {
    type: String,
    trim: true,
  },
  isOwner: {
    type: Boolean,
    required: true
  }
})

module.exports = model('User', userSchema)