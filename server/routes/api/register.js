const express = require('express');
const router = express.Router();

// @route   GET api/register
// @desc    Test route
// @access  Public

router.get('/', (req, res) => res.send('Register route'));

module.exports = router;