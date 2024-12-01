const express = require('express');
const { addApplication } = require('../controllers/applicationController');
const router = express.Router();

router.post('/add', addApplication);

module.exports = router;
