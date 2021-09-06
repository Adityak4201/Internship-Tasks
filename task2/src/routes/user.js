router.post("/profile", UserController.GetUserProfile);

const multer = require("multer");

const uploadProfilePic = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(undefined, true);
  },
});

router.post(
  "/uploadProfilePic",
  auth,
  uploadProfilePic.single("profile"),
  UserController.uploadProfilePic
);
router.get("/getProfilePic", auth, UserController.getProfilePic);
module.exports = router;
