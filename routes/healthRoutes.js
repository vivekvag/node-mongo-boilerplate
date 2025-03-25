const express = require('express');
const router = express.Router();
const { healthCheck } = require('../controllers/healthController');

router.get('/_healthz', healthCheck);

module.exports = router;
