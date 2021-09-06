const express = require('express');
const auth = require('../middleware/auth');
const Series = require("../models/series");
const Episodes = require("../models/episodes");
const router = express.Router();
const aws = require("aws-sdk");

router.get("/fetchAllVideos", async (req, res) => {
    const data = await Episodes.findAll({});
    res.send(data)

})

module.exports = router
