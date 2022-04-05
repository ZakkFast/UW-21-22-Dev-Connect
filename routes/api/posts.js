const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// @router   GET api/posts
// @desc     Test Route
// @access   Public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;