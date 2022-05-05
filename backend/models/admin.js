const mongoose = require('mongoose')

const adminSchema = mongoose.Schema(
    {
        first_name: {
            type: String,
            required: [true, 'First Name is required']
        },
        last_name: {
            type: String,
            required: [true, 'Last Name is required']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
        },
        contact_no: {
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

module.exports = mongoose.model('Admin', userSchema)