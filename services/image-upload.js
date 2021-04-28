const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const uuid = require('uuid')

aws.config.update(
    {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: "us-east-1",
        
    }
)

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg'|| file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG or PNG'), false)
    }
}


let upload = multer({
    fileFilter,
    storage: multerS3({
      s3,
      bucket: 'foodlocal-assets',
      acl: 'public-read-write',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: "Testing metadata"});
      },
      key: function (req, file, cb) {
        cb(null, uuid.v4().toString())
      }
    })
  })


  module.exports = upload;