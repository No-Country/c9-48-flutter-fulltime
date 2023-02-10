const getOwners = async (req, res) => {
  try {
    res.status(200).json({user: "owners"})
  } catch (error) {
    res.status(400 || error.code).json({message : error.message})
  }
}

module.exports = {
  getOwners
}