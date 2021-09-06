const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const UserController = require('../controllers/users');
const { UpdateProfileValidator } = require('../middleware/validators');
const { addAds, fetchAds ,findOne} = require('../controllers/ads')

//api endpoint to change the authority of the user
router.post('/update-Authority', auth, UserController.Authority);
router.post('/series', auth, UserController.postSeries);
router.get('/series', UserController.getSeries);
router.post('/profile', UserController.GetUserProfile);
router.post('/getUsers', UserController.getUsers);
router.post(
    '/updateProfile',
    UpdateProfileValidator,
    UserController.UpdateUserProfile
);
router.post("/addAds", addAds);
router.post("/fetchAds", fetchAds);
//router.post("/selectAd",findOne)
// const multer = require("multer");

// // const upload = multer({
// //     limits: {
// //         fileSize: 1000000
// //     },
// //     fileFilter(req, file, cb) {
// //         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
// //             return cb(new Error("Please upload an image"))
// //         }
// //         cb(undefined, true)
// //     }
// // })

// const multerS3 = require("multer-s3");
// const aws = require("aws-sdk");
// const s3 = new aws.S3({
//     accessKeyId: process.env.ACCESS_KEY,
//     secretAccessKey: process.env.SECRET_ACCESS_KEY
// })

// //upload Image File
// const uploadImage = multer({
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error("Please upload an image"))
//         }
//         cb(undefined, true)
//     },
//     storage: multerS3({
//         s3: s3,
//         bucket: process.env.BUCKET_NAME,
//         ACL: 'public-read',
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: file.fieldname });
//         },
//         key: function (req, file, cb) {
//             const newFileName = Date.now().toString() + file.originalname
//             const fullPath = "images/" + newFileName;
//             cb(null, fullPath)
//         }
//     })
// })


const multer = require("multer");
const multerS3 = require("multer-s3")
const aws = require("aws-sdk");
const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

//upload Image File
const uploadImage = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload an image"))
        }
        cb(undefined, true)
    },
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        ACL: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const newFileName = Date.now().toString() + file.originalname
            const fullPath = "images/" + newFileName;
            cb(null, fullPath)
        }
    })
})

//Upload Video File
const uploadVideo = multer({
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp4|.mov|.mkv|.webm|.avi)$/)) {
            return cb(new Error("Please upload an Video"))
        }
        cb(undefined, true)
    },
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        ACL: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const newFileName = Date.now().toString() + file.originalname
            const fullPath = "videos/" + newFileName;
            cb(null, fullPath)
        }
    })
});

const uploadProfilePic = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload an image"))
        }
        cb(undefined, true)
    }
})
router.post(
    '/uploadImage',
    uploadImage.single('image'),
    UserController.uploadFile
);
router.post(
    '/uploadVideo',
    uploadVideo.single('video'),
    UserController.uploadFile
);
router.post('/uploadProfilePic', auth, uploadProfilePic.single('profile'), UserController.uploadProfilePic)
router.get('/getProfilePic', auth, UserController.getProfilePic);
module.exports = router;
