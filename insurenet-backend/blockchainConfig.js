module.exports = {
    base: {
        url: 'https://mainnet.base.org',
        privateKey: process.env.BASE_PRIVATE_KEY,
        insurancePoolAddress: process.env.BASE_INSURANCE_POOL_ADDRESS,
        claimsManagementAddress: process.env.BASE_CLAIMS_MANAGEMENT_ADDRESS,
        profitSharingAddress: process.env.BASE_PROFIT_SHARING_ADDRESS
    },
    optimism: {
        url: 'https://mainnet.optimism.io',
        privateKey: process.env.OPTIMISM_PRIVATE_KEY,
        insurancePoolAddress: process.env.OPTIMISM_INSURANCE_POOL_ADDRESS,
        claimsManagementAddress: process.env.OPTIMISM_CLAIMS_MANAGEMENT_ADDRESS,
        profitSharingAddress: process.env.OPTIMISM_PROFIT_SHARING_ADDRESS
    }
};