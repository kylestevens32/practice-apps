const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/words', controller.get);
router.post('/words', controller.post);
router.put('/words', controller.put);
router.delete('/words', controller.delete);

module.exports = router;