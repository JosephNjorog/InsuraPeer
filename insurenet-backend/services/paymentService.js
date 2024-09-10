const paymentGateway = require('payment-gateway-sdk'); // Example SDK
const logger = require('../utils/logger'); // Assuming you have a logging utility
const { validatePaymentData } = require('../utils/validators'); // Assuming you have a validation function

exports.processPayment = async (paymentData) => {
    try {
        // Validate the payment data before proceeding
        const validationResult = validatePaymentData(paymentData);
        if (!validationResult.isValid) {
            throw new Error(`Invalid payment data: ${validationResult.errors.join(', ')}`);
        }

        // Process the payment through the SDK
        const result = await paymentGateway.process(paymentData);

        // Check for successful transaction status
        if (!result.success) {
            throw new Error(`Payment processing failed: ${result.errorMessage || 'Unknown error'}`);
        }

        // Log the success result for tracking
        logger.info(`Payment successful: ${result.transactionId}`);

        return {
            status: 'success',
            transactionId: result.transactionId,
            message: 'Payment processed successfully',
        };
    } catch (error) {
        // Log the error for debugging purposes
        logger.error(`Payment processing error: ${error.message}`, {
            paymentData,
            error,
        });

        // Throw the error so it can be handled by the calling function
        throw new Error(`Payment processing failed: ${error.message}`);
    }
};
