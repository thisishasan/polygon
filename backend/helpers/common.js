const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getPasswordHashValue = (password, rounds = 10) => {
    const salt = bcrypt.genSalt(rounds)
    const hash = bcrypt.hash(password, salt)
    return hash
}

const comparePasswordHash = (password, hash) => {
    const result = bcrypt.compare(password, hash)
    return result
}

const generateAuthToken = (id, expiresIn = '30d') => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn
    })
    return token
}

const decodeAuthToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports = {
    getPasswordHashValue,
    comparePasswordHash,
    generateAuthToken,
    decodeAuthToken,
}