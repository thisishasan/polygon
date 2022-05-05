const jwt = require('jsonwebtoken')
const { getPasswordHashValue } = require('../../../helpers/common')
const asyncHandler = require('express-async-handler')
const User = require('../../../models/user')

const register = asyncHandler(async (req, res) => {

    const { firstName, lastName, email, contactNo, password } = req.body
    const hashPassword = await getPasswordHashValue(password)

    const user = await User.create({
        firstName,
        lastName,
        contactNo,
        email,
        password: hashPassword
    })

    if(user){
        return res.status(201).json({
            _id: user.id,
            email: user.email,
        })
    }

    res.status(201).json({ message: 'Success' })
})

module.exports = {
    register
}