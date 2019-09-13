const express = require('express')
const router = express.Router()
const Controller = require('../controllers/user')

router.post('/login', Controller.signIn)
router.post('/register', Controller.register)






module.exports = router;