const { checkSchema } = require('express-validator')

const userLoginRequest = checkSchema({
    email: {
        errorMessage: 'Please enter a valid email address',
        isEmail: true,
        trim: true,
    },
    password: {
        isLength: {
            errorMessage: 'Password should be at least 7 chars long',
            options: { min: 7 },
        },
    }
});

module.exports = userLoginRequest