const User = require("../models/user");
const argon2 = require("argon2");
const nodemailer = require("nodemailer");
const epAd = require("../models/epAd");

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age+1;
}

exports.createUser = async (userData) => {
  try {
    const hashedPassword = await argon2.hash(userData.password);
    userData.password = hashedPassword;
    userData.userType = "USER";
    const age=getAge(userData.dob)
    console.log(age)
    if(age<18){
        userData.segment="1"
    }
    else if(age<=30&&age>=18)
    {
        userData.segment="2"
    }
    else if(age<=45&&age>=31){
      userData.segment="3"
    }
    else{
      userData.segment="4"
    }
    if(userData.gender=="MALE"){
      userData.segment=userData.segment+",5"
    }
    else if(userData.gender=="FEMALE"){
      userData.segment=userData.segment+",6"
    }
    else if(userData.gender=="OTHERS"){
      userData.segment=userData.segment+",7"
    }
    const user = new User(userData);
    var createdUser = await user.save();
    delete createdUser.password;
    return createdUser;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

exports.createAdmin = async (userData) => {
  try {
    const hashedPassword = await argon2.hash(userData.password);
    userData.password = hashedPassword;
    userData.userType = "POWERUSER";
    const user = new User(userData);
    const createdUser = await user.save();
    delete createdUser.password;
    return createdUser;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};

exports.findUserByEmail = async (userData) => {
  try {
    // console.log("userData", userData);
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      throw "User Not Found";
    }
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};

exports.findUsersByUserType = async (userData) => {
  try {
    // console.log("userData", userData);
    const user = await User.find({ userType: userData.userType });
    // console.log(user);
    if (!user) {
      throw "User with User Type Not Found";
    }
    delete user.password;
    return user;
  } catch (error) {
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

exports.UpdatePassword = async (userData) => {
  try {
    const hashedPassword = await argon2.hash(userData.newpassword);
    const filter = { email: userData.email };
    const update = {
      password: hashedPassword
    }
    let user = await User.findOneAndUpdate(filter, update, {
      new: true,
      useFindAndModify: false,
    });
    if (!user) {
      throw "User Not Found";
    }
    delete user.password;
    return user;
  } catch (error) {
    throw error;
  }
};

exports.sendEmail = async (email, subject) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      },
    });
    const otp = Math.floor(1000 + Math.random() * 9000);
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: "Your verification code is " + otp.toString()
    });
    return otp
  } catch (error) {
    console.log(error, "email not sent");
  }
};

exports.updateOtp = async (userData) => {
  try {
    // console.log("userData", userData);
    const filter = { email: userData.email };
    const update = {
      otp: userData.otp
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

exports.checkotp = async (otp, email) => {
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      throw "User Not Found";
    }
    if (user['otp'] == otp) {
      return true
    }else {
      throw "Otp is incorrect.";
    }
  } catch (error) {
    throw error;
  }
};

exports.addEpAd = async (userData) => {
  try {
    // console.log(epAd.create(userData))
    const user = await epAd.create(userData);
    console.log(user)
    const createdUser = await user.save();
    return createdUser;
  } catch (error) {
    throw error;
  }
};