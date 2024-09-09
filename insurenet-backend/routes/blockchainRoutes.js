const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');

// Route handlers
router.post('/deploy', blockchainController.deployContract);
router.post('/interact', blockchainController.interactWithContract);

module.exports = router;
