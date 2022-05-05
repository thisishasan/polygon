const express = require('express')
const validateHttpRequest = require('../middleware/validateHttpRequest')

const router = express.Router()
const userRegistrationRequest = require('../validationRules/userRegisterationRequest')

const { login } = require('../controllers/web/auth/loginController')
const { register } = require('../controllers/web/auth/registerController')

router.get('/login', login)
router.post('/register', validateHttpRequest(userRegistrationRequest), register)

module.exports = router