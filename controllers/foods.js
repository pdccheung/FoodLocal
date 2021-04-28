const Food = require('../models/food')
const asyncHandler = require("express-async-handler")
const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const uuid = require('uuid')
require('dotenv').config();


module.exports = {
    index,
    create
    // uploadImageToS3: (req, res) => {
    //     uploadToS3(req, res).then(downloadURL => {
    //         console.log(downloadURL)
    //         return res.status(200).json({downloadURL})

    //     })
    //     .catch (e => {
    //         console.log(e)
    //     })
    // }
}
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

  
// bucket name = foodlocal-assets

async function index(req, res) {
    const foods = await Food.find({})
    res.json(foods)
}


async function create(req, res) {
    console.log(req.body)
    let newFood = await Food.create(req.body);
    await newFood.save();
    const foods = await Food.find({})
    res.json(foods)
}
