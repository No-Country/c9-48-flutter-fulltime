const { Schema, model } = require('mongoose');

const homeSchema = new Schema({
  adress: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  postalCode: {
    type: Number,
    trim: true,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  },
  numberRooms: {
    type: Number,
    trim: true,
    required: true
  }
});

module.exports = model('Home', homeSchema);