const asyncHandler = require('express-async-handler')
const User = require('../../models/user')

const getUser = asyncHandler(async (req, res) => {
    const { _id, firstName, lastName, contactNo, email } = await User.findById(req.user.id)
    res.status(200).json({
        _id, firstName, lastName, contactNo, email
    })
})

module.exports = {
    getUser,
}
