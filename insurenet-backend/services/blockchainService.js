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

exports.getInsurancePoolDataBase = async () => {
    const contract = getContract(config.base.insurancePoolAddress, InsurancePoolABI.abi, 'base');
    const totalPremiums = await contract.totalPremiums();
    const totalPayouts = await contract.totalPayouts();
    const poolBalance = await contract.getPoolBalance();
    return { totalPremiums, totalPayouts, poolBalance };
};

exports.getInsurancePoolDataOptimism = async () => {
    const contract = getContract(config.optimism.insurancePoolAddress, InsurancePoolABI.abi, 'optimism');
    const totalPremiums = await contract.totalPremiums();
    const totalPayouts = await contract.totalPayouts();
    const poolBalance = await contract.getPoolBalance();
    return { totalPremiums, totalPayouts, poolBalance };
};

exports.getClaimsByStatusBase = async (status) => {
    const contract = getContract(config.base.claimsManagementAddress, ClaimsManagementABI.abi, 'base');
    return await contract.getClaimsByStatus(status);
};

exports.getClaimsByStatusOptimism = async (status) => {
    const contract = getContract(config.optimism.claimsManagementAddress, ClaimsManagementABI.abi, 'optimism');
    return await contract.getClaimsByStatus(status);
};

exports.getProfitSharingDataBase = async () => {
    const contract = getContract(config.base.profitSharingAddress, ProfitSharingABI.abi, 'base');
    const totalShares = await contract.getTotalUndistributedShares();
    const profitDistributed = await contract.profitDistributed();
    return { totalShares, profitDistributed };
};

exports.getProfitSharingDataOptimism = async () => {
    const contract = getContract(config.optimism.profitSharingAddress, ProfitSharingABI.abi, 'optimism');
    const totalShares = await contract.getTotalUndistributedShares();
    const profitDistributed = await contract.profitDistributed();
    return { totalShares, profitDistributed };
};

// Additional utility functions for other contract interactions...