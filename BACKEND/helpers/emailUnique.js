const userModel = require("../models/userModel");

const emailUnique = async (email) => {
const searchEmail = await userModel.find({email});
if(searchEmail.length !== 0) throw new Error(`el email ${email} ya se encuentra en uso`)
};

module.exports = emailUnique;
