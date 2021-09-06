const { connectRedshiftDB } = require("../db/redshift-conn");
const analytics=require("../models/analytics")
const pyanalytics=require("../models/pyAnalytics");
const epAd = require("../models/epAd");
const { addEpAd } = require("../services/userService");
//const User = require("../models/user");
const fs = require("fs");
const csv = require("fast-csv");

exports.Fetch = async function (req, res) {
  const redshiftClient = connectRedshiftDB();
  redshiftClient
    .query('SELECT * FROM "demodata3"')
    .then(function (data) {
      console.log(data);
      res.json(data);
    })
    .catch(function (err) {
      console.error(err);
      return res.status(error.status || 500).send(error);
    });
};

exports.RecordData = async function (req, res) {
  const data = req.body;
  console.log("Data Recieved From Frontend", data);
  return res.json({ message: "Data Logged to Backend" });
};


exports.analyticsDB=async function(req,res){
  try {
    const body = req.body;
    const episode_name = body[0].episode_name;
    const episode_id = body[0].episode_id;
    console.log(episode_name);
    const episode = await epAd.findOne({ where: {episode_name:episode_name} });
    if (!episode){
      const epi = await addEpAd({ episode_id, episode_name });
    }
    const analytic = await analytics.bulkCreate(req.body);
    res.status(200).json({ analytics:analytic });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
}

// exports.pyanalyticsDB=async function(req,res){
//   //console.log(req.body)
// pyanalytics.bulkCreate(req.body).then(function (response) {
//   //console.log(response)
//  res.json(response)
// }).catch(function (error) {
//  res.json(error);
// });
// }

exports.pyanalyticsDB=async function(req,res){
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let tutorials = [];
    let path = "./uploads/" + req.file.filename;

    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        res.status(500).send({
              error: error.message,
            });
      })
      .on("data", (row) => {
        tutorials.push(row);
      })
      .on("end", () => {
        pyanalytics.bulkCreate(tutorials)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
}


exports.fetchAnalytics=async function(req,res){
  analytics.findAll()
    .then(data => {
      res.send(data);
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};

exports.fetchPyAnalytics=async function(req,res){
  pyanalytics.findAll()
    .then(data => {
      res.send(data);
      // console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};