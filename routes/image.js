const express = require('express')
const router = express.Router()
const imageController = require('../controllers/imageController')
const humanChecker = require('../helpers/humanChecker')
const images = require('../helpers/images')
const authentication = require('../middlewares/authentication')
const imageAnalyzer = require('../helpers/imageAnalyzer')

router.use(authentication)
router.post('/', images.multer.single('image'), humanChecker, images.sendUploadToGCS, imageAnalyzer,imageController.getMyAge)
router.delete('/:id', imageController.delete)
router.get('/', imageController.getAll)

module.exports = router;

