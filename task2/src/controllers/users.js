const User = require("../models/user");
const { validationResult } = require("express-validator");
const sharp = require("sharp");
const {
  findUserByEmail,
  findUsersByUserType,
  updateUser,
} = require("../services/userService");
const utils = require("../utils/utils");

exports.uploadFile = (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  //console.log(req.file.location)
  //console.log(req.file.buffer)
  res.send({ url: req.file.location });
};
exports.GetUserProfile = async function (req, res) {
  try {
    const { email } = req.body;
    // console.log(email);
    const user = await findUserByEmail({ email });
    // console.log("user", user);
    const userObj = utils.getCleanUser(user);
    return res.status(200).json({ user: userObj });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.UpdateUserProfile = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    email,
    firstName,
    lastName,
    dob,
    gender,
    country,
    state,
    organization,
  } = req.body;
  try {
    // console.log(email);
    const user = await updateUser({
      email,
      firstName,
      lastName,
      dob,
      gender,
      country,
      state,
      organization,
    });
    // console.log("controller", user);

    const userObj = utils.getCleanUser(user);
    return res.status(200).json({ user: userObj });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};
