const { Schema, model } = require('mongoose');

const petSchema = new Schema({
name: {
  type: String,
  trim: true,
  required: true
},
age: {
  type: Number,
  trim: true,
  required: true
},
petType: {
  type: String,
  trim: true,
  required: true
},
race: {
  type: String,
  trim: true,
  required: true
},
bio: {
  type: String,
  trim: true,
  required: true
},
care: {
  type: String,
  trim: true,
  required: true
},
home: {
  type: Schema.Types.ObjectId,
  ref: 'Home'
}
})
module.exports = model('Pet', petSchema);