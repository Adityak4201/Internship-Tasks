const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

const {
  RegisterValidator,
  LoginValidator,
  UpdateProfileValidator,
} = require("../middleware/validators");

router.post("/login", LoginValidator, AuthController.Login);
router.post("/register", RegisterValidator, AuthController.Register);
router.post("/getUsers", UserController.getUsers);
router.post(
  "/updateProfile",
  UpdateProfileValidator,
  UserController.UpdateUserProfile
);

module.exports = router;
