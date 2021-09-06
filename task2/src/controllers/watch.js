const watch = require("../models/watch");



exports.seen = async function (req, res) {
    let a=req.body.percentage
    let b=""
    if(a==100){
        b="watched"
    }
    else if(a>0&&a<100)
    {
        b="watching"
    }
    else if(a==0){
        b="unWatched"
    }
  //console.log(req.body)
  watch.create({
    video_id: req.body.video_id,
    status:b,
     email:req.body.email 
  }).then(function (response) {
    res.json(response)
  }).catch(function (error) {
    res.json(error);
  });
}


exports.fetchseen=async function(req,res){
  watch.findAll()
    .then(data => {
      res.send(data);
      //console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving"
      });
    });
};