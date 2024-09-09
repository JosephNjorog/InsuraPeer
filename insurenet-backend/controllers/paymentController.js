const { processZkSyncPayment } = require('../services/blockchainService');
const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
    const { amount, token, recipient, userId } = req.body;

    try {
        // Process the payment using zkSync Paymaster
        const tx = await processZkSyncPayment(amount, token, recipient);

        // Save the transaction in the database
        const payment = new Payment({
            userId,
            amount,
            token,
            status: tx.status,
            transactionHash: tx.hash,
            recipient,
        });

        await payment.save();

        res.status(200).json({ message: 'Payment successful', tx });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
