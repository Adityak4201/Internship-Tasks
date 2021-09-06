function getCleanUser(user) {
  if (!user) return null;

  return {
    email: user.email,
    firstname: user.firstName,
    lastname: user.lastName,
    dob: user.dob,
    gender: user.gender,
    country: user.country,
    state: user.state,
    organization: user.organization,
    phone: user.phone,
    userType: user.userType,
    segment:user.segment
  };
}

module.exports = { getCleanUser };
