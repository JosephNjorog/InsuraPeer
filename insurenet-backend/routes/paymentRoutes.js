const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Endpoint for processing payments
router.post('/process', paymentController.processPayment);

// Endpoint for managing payment methods
router.post('/add-method', paymentController.addPaymentMethod);
router.put('/update-method/:id', paymentController.updatePaymentMethod);
router.delete('/remove-method/:id', paymentController.removePaymentMethod);

module.exports = router;
