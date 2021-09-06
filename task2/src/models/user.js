const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    dob: {
      type: String,
      default : Date
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHERS"],
    },
    country: {
      type: String
    },
    state: {
      type: String
    },
    organization: {
      type: String
    },
    phone: {
      type: String
    },
    avatar: {
      type: Buffer
    },
    userType: {
      type: String,
      enum: ["ADMIN", "USER", "SUPERADMIN", "POWERUSER"],
      default: "USER",
    },
    otp: {
      type: Number,
      required : false
    },
    segment:{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
