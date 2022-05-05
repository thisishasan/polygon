const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First Name is required']
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        contactNo: {
            type: String,
            required: [true, 'Contact No. is required']
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema)