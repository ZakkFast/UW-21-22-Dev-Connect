const express = require('express');
const auth = require('../../middleware/auth');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/');
const router = express.Router();

const User = require('../../models/User');

// @router   GET api/auth
// @desc     Test Route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
