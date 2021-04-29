const upload = require('../services/image-upload')

const singleUpload = upload.single('image');



let imageUrl = '';

function create (req, res)  {
    
 singleUpload (req, res, function(err){
    if (err) {
        return res.status(422).send({errors: [{title: "File Upload Error", detail: err.message}]});
    } else{
        imageUrl = req.file.location
        
        return res.json({'imageUrl': req.file.location});
    }
    
})
}



module.exports = {
    create,
    imageLink: imageUrl,
}