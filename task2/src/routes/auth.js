const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

const {
  RegisterValidator,
  RegisterAdminValidator,
  LoginValidator,
  UpdateProfileValidator,
  UpdatePasswordValidator
} = require("../middleware/validators");

const auth = require("../middleware/auth");



router.get("/me", auth, AuthController.GetMyProfile);
router.post("/login", LoginValidator, AuthController.Login);
router.post("/register", RegisterValidator, AuthController.Register);
//router.post("/profile", AuthController.GetUserProfile);
// // router.post("/getUsers", AuthController.getUsers);
// // router.post("/updateProfile", UpdateProfileValidator, AuthController.UpdateUserProfile);
router.post("/updatePassword", UpdatePasswordValidator, AuthController.UpdateUserPassword);
router.post("/getotp",AuthController.getotp);
router.post("/resetpassword",AuthController.ResetUserPassword);
router.post("/addEpAd",AuthController.addEpAd);
router.post("/fetchEdAd",AuthController.fetchEdAd);
router.post(
  "/register-admin",
  RegisterAdminValidator,
  AuthController.RegisterAdmin
);
module.exports = router;
