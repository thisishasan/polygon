const asyncHandler = require('express-async-handler')

const User = require('../../../models/user')

const login = asyncHandler(async (req, res) => {
    res.status(200).json()
})

module.exports = {
    login,
}