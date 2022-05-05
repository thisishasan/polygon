const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getPasswordHashValue = async (password, rounds = 10) => {
    const salt = await bcrypt.genSalt(rounds)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

module.exports = {
    getPasswordHashValue,
}