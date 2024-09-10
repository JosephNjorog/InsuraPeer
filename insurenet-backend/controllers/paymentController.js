const { getPaymasterParams, ZKsyncWallet } = require('web3-plugin-zksync');
const { APPROVAL_TOKEN, PAYMASTER } = require('../config/constants');
const Payment = require('../models/Payment');
const { l2Provider } = require('../services/zksyncProvider'); // Assuming you have a service to provide l2Provider

exports.processPayment = async (req, res) => {
    const { amount, token, recipient, userId } = req.body;

    try {
        // Initialize zkSync wallet with user's private key or a predefined key for demo
        const privateKey = "PRIVATE_KEY";  // Replace this with actual key retrieval logic
        const wallet = new ZKsyncWallet(privateKey);

        // Convert the amount to BigInt if needed (adjust decimals based on token)
        const amountToTransfer = BigInt(amount);
        const minimalAllowance = 1;

        // Ensure token is available on L2
        const tokenL2 = await l2Provider.l2TokenAddress(token);

        // Check balance of the sender and ensure sufficient funds
        const senderBalance = await wallet.getBalance(tokenL2);
        if (senderBalance < amountToTransfer) {
            return res.status(400).json({ error: 'Insufficient token balance' });
        }

        // Random recipient address (or use the actual recipient address passed in the request)
        const recipientAddress = recipient;

        // Configure paymaster parameters for fee coverage
        const paymasterParams = getPaymasterParams(PAYMASTER, {
            type: "ApprovalBased",
            token: APPROVAL_TOKEN,
            minimalAllowance: minimalAllowance,
            innerInput: new Uint8Array(),
        });

        // Create and send the transfer transaction using zkSync's wallet
        const tx = await wallet.transfer({
            token: tokenL2,
            to: recipientAddress,
            amount: amountToTransfer,
            paymasterParams: paymasterParams,
        });

        // Wait for transaction to be mined
        const result = await tx.wait();

        // Check the status of the transaction
        if (result.status === 1) {
            // Save the payment details in the database
            const payment = new Payment({
                userId,
                amount,
                token,
                status: 'success',
                transactionHash: result.transactionHash,
                recipient: recipientAddress,
            });

            await payment.save();

            return res.status(200).json({ message: 'Payment successful', transactionHash: result.transactionHash });
        } else {
            return res.status(500).json({ error: 'Transaction failed' });
        }
    } catch (error) {
        console.error('Payment error:', error);
        return res.status(500).json({ error: error.message });
    }
};
