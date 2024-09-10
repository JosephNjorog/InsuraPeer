const { ethers } = require('ethers');
const config = require('./blockchainConfig');
const InsurancePoolABI = require('../abis/InsurancePool.json');
const ClaimsManagementABI = require('../abis/ClaimsManagement.json');
const ProfitSharingABI = require('../abis/ProfitSharing.json');

const getProvider = (network) => {
    return new ethers.providers.JsonRpcProvider(config[network].url);
};

const getContract = (address, abi, network) => {
    const provider = getProvider(network);
    return new ethers.Contract(address, abi, provider);
};

const deployContract = async (contractName, args, network) => {
    const provider = getProvider(network);
    const wallet = new ethers.Wallet(config[network].privateKey, provider);
    const Factory = new ethers.ContractFactory(
        contractName === 'InsurancePool' ? InsurancePoolABI.abi : 
        contractName === 'ClaimsManagement' ? ClaimsManagementABI.abi : 
        ProfitSharingABI.abi,
        contractName === 'InsurancePool' ? InsurancePoolABI.bytecode : 
        contractName === 'ClaimsManagement' ? ClaimsManagementABI.bytecode : 
        ProfitSharingABI.bytecode,
        wallet
    );
    const contract = await Factory.deploy(...args);
    await contract.deployed();
    return contract.address;
};

exports.deployInsurancePoolOnBase = async (req, res) => {
    try {
        const address = await deployContract('InsurancePool', [req.body.tokenAddress], 'base');
        res.json({ success: true, address });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.deployInsurancePoolOnOptimism = async (req, res) => {
    try {
        const address = await deployContract('InsurancePool', [req.body.tokenAddress], 'optimism');
        res.json({ success: true, address });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Similar functions for deploying ClaimsManagement and ProfitSharing on both networks...

exports.addMemberToInsurancePoolBase = async (req, res) => {
    try {
        const contract = getContract(config.base.insurancePoolAddress, InsurancePoolABI.abi, 'base');
        const tx = await contract.addMember(req.body.memberAddress);
        await tx.wait();
        res.json({ success: true, transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.addMemberToInsurancePoolOptimism = async (req, res) => {
    try {
        const contract = getContract(config.optimism.insurancePoolAddress, InsurancePoolABI.abi, 'optimism');
        const tx = await contract.addMember(req.body.memberAddress);
        await tx.wait();
        res.json({ success: true, transactionHash: tx.hash });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Similar functions for other InsurancePool, ClaimsManagement, and ProfitSharing interactions on both networks...

exports.getClaimDetailsBase = async (req, res) => {
    try {
        const contract = getContract(config.base.claimsManagementAddress, ClaimsManagementABI.abi, 'base');
        const claimDetails = await contract.getClaimDetails(req.params.claimId);
        res.json({ success: true, claimDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.getClaimDetailsOptimism = async (req, res) => {
    try {
        const contract = getContract(config.optimism.claimsManagementAddress, ClaimsManagementABI.abi, 'optimism');
        const claimDetails = await contract.getClaimDetails(req.params.claimId);
        res.json({ success: true, claimDetails });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Additional functions for other contract interactions...