const asyncHandler = require('express-async-handler')
const { decodeAuthToken } = require('../helpers/common')
const User = require('../models/user')

const auth = asyncHandler(async (req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = decodeAuthToken(token)
            req.user = await User.findById(decoded.id).select('-passwrod')
            next()
        }catch(err){
            console.log(err)
            res.status(401).json({
                message: "Not authorized"
            })
        }
    }

    if(!token){
        res.status(401).json({
            message: "Not authorized, no token"
        })
    }
})

module.exports = {
    auth,
}