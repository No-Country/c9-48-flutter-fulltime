const { Schema, model} = require('mongoose');

const CaregiverSchema = new Schema({
name: {
  type: String,
  trim: true,
  required: true
},
email: {
  type: String,
  trim: true,
  reuired: true
},
phone: {
  type: Number,
  trim: true,
  reuired: true
},
gender: {
  type: String,
  required: true,
  enum: ['MALE', 'FEMALE', 'OTHER']
},
experience: {
  type: String,
  trim: true,
  required: true
},
bio: {
  type: String,
  trim: true,
  required: true
},
location: {
  type: String,
  trim: true
}
});

module.exports = model('Caregiver', CaregiverSchema);