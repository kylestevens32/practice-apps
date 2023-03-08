const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/words', controller.get)

module.exports = router;