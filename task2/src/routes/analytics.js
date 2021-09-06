const express = require("express");
const router = express.Router();
const AnalyticsController = require("../controllers/analytics");
const {seen,fetchseen}=require("../controllers/watch");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get("/", AnalyticsController.Fetch);
router.post("/", AnalyticsController.RecordData);

router.post('/analyticsDB',AnalyticsController.analyticsDB);
router.get('/find',AnalyticsController.fetchAnalytics);

//router.post('/seen',watched.seen);

router.post('/seen',seen);
router.get('/fetchseen',fetchseen);


router.post('/pyanalyticsDB',upload.single("file"), AnalyticsController.pyanalyticsDB);
router.get('/findPy',AnalyticsController.fetchPyAnalytics)

module.exports = router;

