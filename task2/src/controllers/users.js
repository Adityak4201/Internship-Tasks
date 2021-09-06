const User = require("../models/user")
const Series = require("../models/series");
const Episodes = require("../models/episodes");
const { validationResult } = require("express-validator");
const sharp = require("sharp")
const {
  findUserByEmail,
  findUsersByUserType,
  updateUser,
} = require("../services/userService");
const utils = require("../utils/utils");

exports.Authority = async (req, res) => {
  const rolesValue = {
    SUPERADMIN: 1,
    ADMIN: 2,
    POWERUSER: 3,
    USER: 4,
  };
  try {
    const loggedUser = await User.findOne({ email: req.body.loggedEmail });
    const roles = Object.keys(rolesValue);
    const { email, userType } = req.body;
    if (!email || !userType) {
      return res.status(400).json({ error: "email or userType undefined" });
    }
    if (!roles.includes(userType)) {
      return res.status(400).json({ error: "invalid operation" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }

    if (rolesValue[loggedUser.userType] > rolesValue[userType]) {
      return res.status(400).json({
        error: `${loggedUser.userType} cannot assign role of ${userType}`,
      });
    } else if (rolesValue[user.userType] <= rolesValue[loggedUser.userType]) {
      return res.status(400).json({
        error: `${loggedUser.userType} cannot change the role of ${user.userType}`,
      });
    }

    user.userType = userType;
    const updatedUser = await user.save();
    updatedUser.password = undefined;
    res.send(updatedUser);
  } catch (e) {
    res.status(500).send();
  }
};

exports.postSeries = async (req, res) => {
  try {
    const seriesData = req.body;
    const episodeData = req.body.episode;
    seriesData.episodes = undefined;
    seriesData.name = seriesData.name.toLowerCase();  //convert to lowerCase
    let series = await Series.findOne({
      where: {
        name: seriesData.name,
      },
    });
    if (!series) {
      series = await Series.create(seriesData);
      console.log("series Created");
    }
    episodeData.series_id = series.series_id
    episodeData.episode_name = episodeData.episode_name.toLowerCase();
    console.log(episodeData);
    const savedEpisodeData = await Episodes.create(episodeData);
    res.send(savedEpisodeData);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
};

exports.getSeries = async (req, res) => {
  try {
    // console.log('req ...............', req);
    const organization = req.query.organization;
    const data = await Series.findAll({
      include: Episodes,
      where: {
        organization,
        processed: "YES"
      },
    });
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
};

exports.uploadFile = (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  //console.log(req.file.location)
  //console.log(req.file.buffer)
  res.send({ url: req.file.location })
}
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

exports.uploadProfilePic = async (req, res) => {
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  const user = await User.findOne({ email: req.user.email })
  if (!user) {
    res.status(400).json({ error: "User not found" })
  }
  user.avatar = buffer
  await user.save()
  res.send({ "email": req.user.email });
}

exports.getProfilePic = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user || !user.avatar) {
      res.status(400).send({ "error": "user/user-avatar not found" })
    }
    res.set("Content-Type", "image/png")
    res.send(user.avatar)

  } catch (e) {
    res.status(500).send()
  }
}
