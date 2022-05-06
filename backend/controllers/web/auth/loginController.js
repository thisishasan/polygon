const asyncHandler = require('express-async-handler')
const { comparePasswordHash, generateAuthToken } = require('../../../helpers/common')

const User = require('../../../models/user')

const login = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Invalid Email provided')
    }

    if (!(await comparePasswordHash(password, user.password))) {
        throw new Error('Invalid Password provided')
    }

    res.status(200).json({
        token: generateAuthToken(user.id)
    })
})

module.exports = {
    login,
}