const express = require('express')
const router = express.Router()
const image = require('../routes/image')
const user = require('../routes/user')

router.use('/image', image)
router.use('/user', user)



module.exports = router;