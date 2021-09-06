const { authenticateUser, signJWT } = require("../services/authService");
const { createUser, updateUser } = require("../services/userService");
const { validationResult } = require("express-validator");
const User = require("../models/user");

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
    return res.json({ user, token });
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
  const { email, password, firstName, lastName, phone } = req.body;
  try {
    const createdUser = await createUser({
      email,
      password,
      firstName,
      lastName,
      phone,
    });
    // console.log(createdUser);
    delete createdUser.password;
    return res.send(createdUser);
  } catch (error) {
    res.status(402).json({ errors: error });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    // console.log(users);
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
};

exports.uploadProfilePic = async (req, res) => {
  const buffer = await sharp(req.file.buffer)
    .resize({ width: 250, height: 250 })
    .png()
    .toBuffer();
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    res.status(400).json({ error: "User not found" });
  }
  user.avatar = buffer;
  await user.save();
  res.send({ email: req.user.email });
};

exports.getProfilePic = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || !user.avatar) {
      res.status(400).send({ error: "user/user-avatar not found" });
    }
    res.set("Content-Type", "image/png");
    res.send(user.avatar);
  } catch (e) {
    res.status(500).send();
  }
};
