const paymentGateway = require('payment-gateway-sdk'); // Example SDK

exports.processPayment = async (paymentData) => {
    try {
        const result = await paymentGateway.process(paymentData);
        return result;
    } catch (error) {
        throw new Error('Payment processing failed');
    }
};
