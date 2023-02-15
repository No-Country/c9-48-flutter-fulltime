const mongoose = require('mongoose');

const connectionDB = async () => {
try {
  await mongoose.connect(process.env.DB_URI_ATLAS)
  console.log('DB is conected')
} catch (error) {
  console.log(error)
}
};

module.exports = connectionDB