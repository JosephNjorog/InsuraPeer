// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./InsurancePool.sol";

contract ClaimsManagement is Ownable {
    InsurancePool public insurancePool;
    
    enum ClaimStatus { Submitted, UnderReview, Approved, Rejected, Paid }
    
    struct Claim {
        address claimant;
        uint256 amount;
        string description;
        uint256 submissionDate;
        ClaimStatus status;
    }
    
    mapping(uint256 => Claim) public claims;
    uint256 public claimCount;
    
    event ClaimSubmitted(uint256 indexed claimId, address indexed claimant, uint256 amount);
    event ClaimStatusUpdated(uint256 indexed claimId, ClaimStatus newStatus);
    event ClaimPaid(uint256 indexed claimId, address indexed claimant, uint256 amount);
    
    constructor(address _insurancePool) {
        insurancePool = InsurancePool(_insurancePool);
    }
    
    function submitClaim(uint256 _amount, string memory _description) external {
        require(insurancePool.isMember(msg.sender), "Not a member of the insurance pool");
        
        uint256 claimId = claimCount++;
        claims[claimId] = Claim({
            claimant: msg.sender,
            amount: _amount,
            description: _description,
            submissionDate: block.timestamp,
            status: ClaimStatus.Submitted
        });
        
        emit ClaimSubmitted(claimId, msg.sender, _amount);
    }
    
    function updateClaimStatus(uint256 _claimId, ClaimStatus _newStatus) external onlyOwner {
        require(_claimId < claimCount, "Invalid claim ID");
        require(_newStatus != ClaimStatus.Paid, "Use processClaim for payments");
        
        claims[_claimId].status = _newStatus;
        emit ClaimStatusUpdated(_claimId, _newStatus);
    }
    
    function processClaim(uint256 _claimId) external onlyOwner {
        require(_claimId < claimCount, "Invalid claim ID");
        Claim storage claim = claims[_claimId];
        require(claim.status == ClaimStatus.Approved, "Claim not approved");
        
        claim.status = ClaimStatus.Paid;
        insurancePool.processClaim(claim.claimant, claim.amount);
        
        emit ClaimPaid(_claimId, claim.claimant, claim.amount);
    }
    
    function getClaimDetails(uint256 _claimId) external view returns (Claim memory) {
        require(_claimId < claimCount, "Invalid claim ID");
        return claims[_claimId];
    }
    
    function getClaimsByStatus(ClaimStatus _status) external view returns (uint256[] memory) {
        uint256[] memory matchingClaims = new uint256[](claimCount);
        uint256 matchCount = 0;
        
        for (uint256 i = 0; i < claimCount; i++) {
            if (claims[i].status == _status) {
                matchingClaims[matchCount] = i;
                matchCount++;
            }
        }
        
        // Resize the array to remove empty slots
        assembly {
            mstore(matchingClaims, matchCount)
        }
        
        return matchingClaims;
    }
}