const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// @router   GET api/profile
// @desc     Test Route
// @access   Public
router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;