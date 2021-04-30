const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/images')
const upload = require('../../services/image-upload');
const singleUpload = upload.single('image');


router.post('/', imageCtrl.create)


module.exports = router;