const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')
const humanChecker = require('../helpers/humanChecker')
const images = require('../helpers/images')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.post('/', images.multer.single('image'), humanChecker, images.sendUploadToGCS, imageController.getMyAge)

module.exports = router;

