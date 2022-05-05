const asyncHandler = require('express-async-handler')

const User = require('../../models/user')

const getUser = asyncHandler(async (req, res) => {
    const user = await User.find()
    res.status(200).json(user)
})


module.exports = {
    getUser
}