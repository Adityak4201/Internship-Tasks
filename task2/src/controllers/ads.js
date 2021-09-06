const ads = require("../models/ads");
//const { uploadFile, getFileStream } = require('../models/s3')


// exports.test=async function(req,res){
//     const file = req.file
//     console.log(file)
//     const result = await uploadFile(file)
//     console.log(result)
//     res.send(result)
// }

exports.addAds = async function (req, res) {
  //console.log(req.body)
  ads.create({
    ads_id: req.body.ads_id,
    org_name: req.body.org_name,
    ads_name: req.body.ads_name,
    ads_img: req.body.ads_img,
    ads_url: req.body.ads_url,
    ads_processed: req.body.ads_processed
  }).then(function (response) {
    res.json(response)
  }).catch(function (error) {
    res.json(error);
  });
}


exports.fetchAds = async function (req, res) {
  const org_name = req.body.org_name
  //console.log(org_name)

  ads.findAll()
    .then(data => {
      const filter_data = data.filter(d => d.org_name === org_name && d.ads_processed == "YES")
      res.send(filter_data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};

// exports.findOne = (req, res) => {
//   const id = 3;

//   ads.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" 
//       });
//     });
// };