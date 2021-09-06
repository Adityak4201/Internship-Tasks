const { check } = require("express-validator");

exports.LoginValidator = [
  check("email", "E-mail is required").not().isEmpty(),
  check("password", "Password is required").not().isEmpty(),
];

exports.RegisterValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("dob", "Dob is required").not().isEmpty(),
  check("gender", "Valid Gender is required").isIn([
    "MALE",
    "FEMALE",
    "OTHERS",
  ]),
  check("phone", "Phone Number is required").not().isEmpty(),
  check("country", "Country is required").not().isEmpty(),
  check("state", "State is required").not().isEmpty(),
  // check("organization", "Organization is required").not().isEmpty(),
];

exports.RegisterAdminValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
];

exports.UpdateProfileValidator = [
  check("email", "E-mail is required").isEmail(),
  check("firstName", "First Name is required").not().isEmpty(),
  check("lastName", "Last Name is required").not().isEmpty(),
  check("dob", "Dob is required").not().isEmpty(),
  check("gender", "Valid Gender is required").isIn([
    "MALE",
    "FEMALE",
    "OTHERS",
  ]),
  check("country", "Country is required").not().isEmpty(),
  check("state", "State is required").not().isEmpty(),
  // check("organization", "Organization is required").not().isEmpty(),
];

exports.UpdatePasswordValidator = [
  check("email", "E-mail is required").isEmail(),
  check("password", "Password is required").isLength({ min: 5 }),
  check("newpassword", "New Password is required").isLength({ min: 5 })
]