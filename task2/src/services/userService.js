const User = require("../models/user");
const argon2 = require("argon2");

exports.createUser = async (userData) => {
  try {
    const hashedPassword = await argon2.hash(userData.password);
    userData.password = hashedPassword;
    const user = new User(userData);
    var createdUser = await user.save();
    delete createdUser.password;
    return createdUser;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

exports.updateUser = async (userData) => {
  try {
    // console.log("userData", userData);
    const filter = { email: userData.email };
    const update = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      dob: userData.dob,
      gender: userData.gender,
      country: userData.country,
      state: userData.state,
      organization: userData.organization,
    };
    let user = await User.findOneAndUpdate(filter, update, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      throw "User Not Found";
    }
    // console.log("userService", user);
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};
