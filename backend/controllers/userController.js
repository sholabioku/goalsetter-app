const asyncHandler = require('express-async-handler');

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res, next) => {
  res.json({ message: 'User registered' });
});

// @desc Login user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res, next) => {
  res.json({ message: 'User loggedin' });
});
// @desc Get user data
// @route Get /api/users/me
// @access Public
const getMe = asyncHandler(async (req, res, next) => {
  res.json({ message: 'User data display' });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
