const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/images')
const upload = require('../../services/image-upload');
const singleUpload = upload.single('image');


router.post('/', imageCtrl.create)


// function(req, res){
//     singleUpload(req, res, function(err){
//         if (err) {
//             return res.status(422).send({errors: [{title: "File Upload Error", detail: err.message}]});
//         }
//         return res.json({'imageUrl': req.file.location});
//     })
// } );


module.exports = router;