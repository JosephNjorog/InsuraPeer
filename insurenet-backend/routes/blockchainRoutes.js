const express = require('express');
const router = express.Router();
const blockchainController = require('./blockchainController');

// Deployment routes
router.post('/deploy/:network/insurancePool', blockchainController.deployInsurancePool);
router.post('/deploy/:network/claimsManagement', blockchainController.deployClaimsManagement);
router.post('/deploy/:network/profitSharing', blockchainController.deployProfitSharing);

// InsurancePool routes
router.post('/:network/insurancePool/addMember', blockchainController.addMemberToInsurancePool);
router.post('/:network/insurancePool/removeMember', blockchainController.removeMemberFromInsurancePool);
router.post('/:network/insurancePool/payPremium', blockchainController.payPremium);
router.get('/:network/insurancePool/balance', blockchainController.getInsurancePoolBalance);
router.get('/:network/insurancePool/memberStatus/:address', blockchainController.getMemberStatus);
router.get('/:network/insurancePool/totalPremiums', blockchainController.getTotalPremiums);
router.get('/:network/insurancePool/totalPayouts', blockchainController.getTotalPayouts);

// ClaimsManagement routes
router.post('/:network/claimsManagement/submitClaim', blockchainController.submitClaim);
router.put('/:network/claimsManagement/updateClaimStatus', blockchainController.updateClaimStatus);
router.post('/:network/claimsManagement/processClaim', blockchainController.processClaim);
router.get('/:network/claimsManagement/claimDetails/:claimId', blockchainController.getClaimDetails);
router.get('/:network/claimsManagement/claimsByStatus/:status', blockchainController.getClaimsByStatus);
router.get('/:network/claimsManagement/claimsByMember/:address', blockchainController.getClaimsByMember);

// ProfitSharing routes
router.post('/:network/profitSharing/distributeProfits', blockchainController.distributeProfits);
router.post('/:network/profitSharing/claimShare', blockchainController.claimShare);
router.get('/:network/profitSharing/memberShare/:address', blockchainController.getMemberShare);
router.get('/:network/profitSharing/totalUndistributedShares', blockchainController.getTotalUndistributedShares);
router.get('/:network/profitSharing/profitDistributionStatus', blockchainController.getProfitDistributionStatus);

// Cross-network operations
router.post('/crossNetwork/transferClaim', blockchainController.transferClaimCrossNetwork);
router.post('/crossNetwork/synchronizeMembers', blockchainController.synchronizeMembersCrossNetwork);

// Utility routes
router.get('/:network/gasPrice', blockchainController.getGasPrice);
router.get('/:network/blockNumber', blockchainController.getBlockNumber);

// Analytics routes
router.get('/:network/analytics/claimFrequency', blockchainController.getClaimFrequency);
router.get('/:network/analytics/premiumTrend', blockchainController.getPremiumTrend);
router.get('/:network/analytics/payoutRatio', blockchainController.getPayoutRatio);

// Admin routes
router.post('/:network/admin/pause', blockchainController.pauseContracts);
router.post('/:network/admin/unpause', blockchainController.unpauseContracts);
router.post('/:network/admin/upgradeContract', blockchainController.upgradeContract);

module.exports = router;