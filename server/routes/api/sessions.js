const express = require('express');
const router = express.Router();

// @route   GET api/sessions
// @desc    Test route
// @access  Public

router.get('/', (req, res) => res.send('Sessions route'));

module.exports = router;