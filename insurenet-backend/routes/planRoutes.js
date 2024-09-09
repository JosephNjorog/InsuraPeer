const express = require('express');
const router = express.Router();

// Route handlers (to be implemented)
router.post('/create', (req, res) => {
    // Handle plan creation
});

router.get('/details/:id', (req, res) => {
    // Get details of a specific plan
});

router.put('/update/:id', (req, res) => {
    // Update a specific plan
});

module.exports = router;
