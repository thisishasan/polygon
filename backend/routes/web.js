const express = require('express')

const router = express.Router()

const validateHttpRequest = require('../middleware/validateHttpRequest')
const { auth } = require('../middleware/authMiddleware')

const userRegistrationRequest = require('../requests/userRegisterationRequest')
const userLoginRequest = require('../requests/userLoginRequest')

const { login } = require('../controllers/web/auth/loginController')
const { register } = require('../controllers/web/auth/registerController')
const { getUser } = require('../controllers/web/userController')

router.post('/login', validateHttpRequest(userLoginRequest), login)
router.post('/register', validateHttpRequest(userRegistrationRequest), register)
router.get('/auth/me', auth, getUser)

module.exports = router