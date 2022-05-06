const { checkSchema } = require('express-validator')
const User = require('../models/user')

const userRegistrationRequest = checkSchema({
    firstName: {
        isUppercase: {
            negated: true,
        },
    },
    lastName: {
        isUppercase: {
            negated: true,
        },
    },
    email: {
        errorMessage: 'Please enter a valid email address',
        isEmail: true,
        trim: true,
        custom: {
            options: value => {
                return User.find({
                    email: value
                }).then(user => {
                    if (user.length > 0) {
                        return Promise.reject('Email address already taken')
                    }
                })
            }
        }
    },
    password: {
        isLength: {
            errorMessage: 'Password should be at least 7 chars long',
            options: { min: 7 },
        },
    },
})

module.exports = userRegistrationRequest