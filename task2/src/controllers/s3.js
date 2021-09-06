
// const fs = require('fs');
// const AWS = require('aws-sdk');

// const path = require('path');

// //configuring the AWS environment
// AWS.config.update({
//     accessKeyId:process.env.ACCESS_KEY,
//     secretAccessKey: process.env.SECRET_KEY
//   });



// var s3 = new AWS.S3();
// var filePath = "./data/file.txt";

// const finalPath=path.join(__dirname,"data/file.txt")

// var params = {
//   Bucket: process.env.BUCKET_NAME,
//   Body : fs.createReadStream(finalPath),
//   Key : "folder/"+Date.now()+"_"+path.basename(finalPath)
// };


// exports.upload=s3.upload(params, function (err, data) {
//   //handle error
//   if (err) {
//     console.log("Error", err);
//   }

//   //success
//   if (data) {
//     console.log("Uploaded in:", data.Location);
//   }
// });

