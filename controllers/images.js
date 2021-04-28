// not used 

// const aws = require('aws-sdk')
// const multer = require('multer')
// const multerS3 = require('multer-s3')
// const uuid = require('uuid')
// require('dotenv').config();

// aws.config.update(
//     {
//         accessKeyId: process.env.AWS_ACCESS_KEY,
//         secretAccessKey: process.env.AWS_SECRET_KEY,
//         region: "us-east-1",
        
//     }
// )
// const s3 = new aws.S3();

// let upload = multer({
//     storage: multerS3({
//       s3: s3,
//       bucket: 'foodlocal-assets',
//       acl: 'public-read-write',
//       metadata: function (req, file, cb) {
//         cb(null, {fieldName: file.fieldname});
//       },
//       key: function (req, file, cb) {
//         cb(null, req.s3Key)
//       }
//     })
//   })

//   const singleFileUpload = upload.single('image');

//   function uploadToS3(req, res){
//       req.s3Key = uuid();
//       let downloadURL = `https://foodlocal-assets.s3.amazonaws.com/${req.s3Key}`
//     return new Promise((resolve, reject) => {
//         return singleFileUpload(req, res, err => {
//             if (err) reject(err);
//             return resolve(downloadURL)
//         })
//     })
//   }




// module.exports = {
//     uploadToS3
// }