const { ethers } = require('ethers');

// Generate a random wallet
const wallet = ethers.Wallet.createRandom();

// Get the private key
const privateKey = wallet.privateKey;

console.log(`Your new private key: ${privateKey}`);
