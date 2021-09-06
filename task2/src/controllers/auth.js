const { authenticateUser, signJWT } = require("../services/authService");
const {
  createUser,
  createAdmin,
  findUserByEmail,
  findUsersByUserType,
  updateUser,
  UpdatePassword,
  sendEmail,
  updateOtp,
  checkotp,
  addEpAd
} = require("../services/userService");
const { validationResult } = require("express-validator");
const utils = require("../utils/utils");
const User = require("../models/user");
const epAd = require("../models/epAd");

exports.Login = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    const user = await authenticateUser({ email, password });
    const token = await signJWT(user.email);
    //console.log(token);
    const userObj = utils.getCleanUser(user);
    return res.json({ user: userObj, token });
  } catch (error) {
    return res.status(401).json({ errors: error });
  }
};

exports.Register = async function (req, res) {
  //console.log(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    email,
    password,
    firstName,
    lastName,
    dob,
    gender,
    country,
    state,
    organization,
    phone,
  } = req.body;
  try {
    const createdUser = await createUser({
      email,
      password,
      firstName,
      lastName,
      dob,
      gender,
      country,
      state,
      organization,
      phone,
    });
    // console.log(createdUser);
    delete createdUser.password;
    return res.send(createdUser);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.GetMyProfile = async function (req, res) {
  return res.status(200).json({ message: "WIP" });
};
exports.RegisterAdmin = async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, firstName, lastName, dob, gender } = req.body;
  try {
    const createdAdmin = await createAdmin({
      email,
      password,
    });
    // console.log(createdUser);
    delete createdAdmin.password;
    return res.send(createdAdmin);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
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

exports.getUsers = async (req, res) => {
  const { userType } = req.body;
  if (!userType) {
    res.status(405).json({ error: "User Type is Missing" });
  }
  try {
    const users = await findUsersByUserType({ userType });
    // console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.UpdateUserPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    email,
    password,
    newpassword
  } = req.body;
  try {
    const user1 = await authenticateUser({ email, password });
    const user = await UpdatePassword({
      email,
      newpassword
    });
    const userObj = utils.getCleanUser(user);
    return res.status(200).json({ user: userObj });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.getotp = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    email
  } = req.body;
  try {
    const subject = "OTP"
    const user = await User.findOne({ email: email });
    if (!user) {
      throw "Invalid Credentials";
    }
    const otp = await sendEmail(email, subject);
    const use = await updateOtp({
      email,
      otp
    });
    const userObj = utils.getCleanUser(user);
    res.status(200).json({ OTP: otp, User: userObj })
  } catch (error) {
    res.status(402).json({ errors: error });
  }
}

exports.ResetUserPassword = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {
    email,
    otp,
    newpassword
  } = req.body;
  try {
    const check = await checkotp(otp,email);
    if (check == true){
      const user = await UpdatePassword({
        email,
        newpassword
      });
      const userObj = utils.getCleanUser(user);
      return res.status(200).json({ user: userObj });
      }
    } catch (error) {
      res.status(402).json({ errors: error });
    }
};

exports.addEpAd = async (req,res) => {
  try {
    const { episode_id, episode_name } = req.body;
    const user = await addEpAd({
      episode_id,
      episode_name
    });
    res.status(200).json({ episode: user });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
}

exports.fetchEdAd = async (req,res) =>{
  try {
    const { episode_name } = req.body;
    const ep = await epAd.findAll({ where: {episode_name:episode_name}});
    res.status(200).json({ EpAd:ep });
  } catch (error) {
    res.status(402).json({ errors: error });
  }
}