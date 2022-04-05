const express = require('express');
const router = express.Router();

// @router   POST api/users
// @desc     Register User
// @access   Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User Route');
});

module.exports = router;
