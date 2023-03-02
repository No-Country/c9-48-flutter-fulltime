const { Schema, model } = require('mongoose');

const petSchema = new Schema({

petType: {
  type: String,
  trim: true,
  required: true
},
characteristics: {
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