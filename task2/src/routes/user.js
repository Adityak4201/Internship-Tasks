const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const UserController = require("../controllers/users");
const { UpdateProfileValidator } = require("../middleware/validators");

router.post("/profile", UserController.GetUserProfile);
router.post("/getUsers", UserController.getUsers);
router.post(
  "/updateProfile",
  UpdateProfileValidator,
  UserController.UpdateUserProfile
);

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
