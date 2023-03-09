const express = require("express");
const router = express.Router();
const controller = require('./controller.js');

router.get('/shopping', controller.get);
router.post('/shopping', controller.post);

module.exports = router;