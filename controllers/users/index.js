const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const repeatVerifyEmail = require("./repeatVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  repeatVerifyEmail,
};
