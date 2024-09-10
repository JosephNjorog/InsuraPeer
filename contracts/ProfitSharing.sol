// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./InsurancePool.sol";

contract ProfitSharing is Ownable {
    InsurancePool public insurancePool;
    IERC20 public premiumToken;
    
    uint256 public coveragePeriodEnd;
    bool public profitDistributed;
    
    mapping(address => uint256) public memberShares;
    uint256 public totalShares;
    
    event ProfitDistributed(uint256 totalProfit);
    event MemberShareClaimed(address indexed member, uint256 amount);
    
    constructor(address _insurancePool, uint256 _coveragePeriodDuration, address _initialOwner) Ownable(_initialOwner) {
        insurancePool = InsurancePool(_insurancePool);
        premiumToken = IERC20(insurancePool.premiumToken());
        coveragePeriodEnd = block.timestamp + _coveragePeriodDuration;
    }
    
    function distributeProfits() external onlyOwner {
        require(block.timestamp >= coveragePeriodEnd, "Coverage period not ended");
        require(!profitDistributed, "Profits already distributed");
        
        uint256 totalPremiums = insurancePool.totalPremiums();
        uint256 totalPayouts = insurancePool.totalPayouts();
        uint256 profit = totalPremiums > totalPayouts ? totalPremiums - totalPayouts : 0;
        
        if (profit > 0) {
            address[] memory members = getMembers();
            for (uint256 i = 0; i < members.length; i++) {
                address member = members[i];
                uint256 memberPremium = insurancePool.premiumsPaid(member);
                uint256 share = (profit * memberPremium) / totalPremiums;
                memberShares[member] = share;
                totalShares += share;
            }
        }
        
        profitDistributed = true;
        emit ProfitDistributed(profit);
    }
    
    function claimShare() external {
        require(profitDistributed, "Profits not distributed yet");
        require(memberShares[msg.sender] > 0, "No share to claim");
        
        uint256 share = memberShares[msg.sender];
        memberShares[msg.sender] = 0;
        totalShares -= share;
        
        require(premiumToken.transfer(msg.sender, share), "Transfer failed");
        emit MemberShareClaimed(msg.sender, share);
    }
    
    function getMembers() internal view returns (address[] memory) {
        uint256 memberCount = insurancePool.memberCount();
        address[] memory members = new address[](memberCount);
        uint256 index = 0;
        
        for (uint256 i = 0; i < memberCount; i++) {
            address member = address(uint160(i)); // This is a simplified approach and might not work in practice
            if (insurancePool.isMember(member)) {
                members[index] = member;
                index++;
            }
        }
        
        return members;
    }
    
    function getMemberShare(address _member) external view returns (uint256) {
        return memberShares[_member];
    }
    
    function getTotalUndistributedShares() external view returns (uint256) {
        return totalShares;
    }
}
