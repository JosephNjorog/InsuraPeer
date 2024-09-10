const { Wallet, Provider } = require('zksync-web3');
const { ethers } = require('ethers');

// Load provider for zkSync
const zkSyncProvider = new Provider('https://zksync2-testnet.zksync.dev');

// Initialize wallet with private key
const wallet = new Wallet(process.env.PRIVATE_KEY, zkSyncProvider);

// Paymaster contract address (this is where your paymaster logic will go)
const paymasterAddress = process.env.PAYMASTER_ADDRESS;

// Sample function to handle zkSync payments
async function processZkSyncPayment(amount, token, recipient) {
    // Convert amount to BigNumber
    const amountInWei = ethers.utils.parseEther(amount.toString());

    // Define a transaction object
    const transaction = {
        to: recipient,
        value: amountInWei,
        gasLimit: ethers.utils.hexlify(1000000), // Estimate gas
        gasPrice: await zkSyncProvider.getGasPrice(), // Get current gas price
    };

    try {
        // Create transaction with Paymaster logic
        const tx = await wallet.sendTransaction(transaction);
        await tx.wait();
        return tx;
    } catch (error) {
        console.error('Payment failed:', error);
        throw new Error('Transaction failed');
    }
}

module.exports = {
    processZkSyncPayment
};
