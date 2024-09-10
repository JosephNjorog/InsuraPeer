// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract InsurancePool is Ownable {
    IERC20 public premiumToken;
    
    mapping(address => uint256) public premiumsPaid;
    uint256 public totalPremiums;
    uint256 public totalPayouts;
    
    constructor(address _premiumToken, address _initialOwner) Ownable(_initialOwner) {
        premiumToken = IERC20(_premiumToken);
    }
    
    function payPremium(uint256 amount) external {
        premiumToken.transferFrom(msg.sender, address(this), amount);
        premiumsPaid[msg.sender] += amount;
        totalPremiums += amount;
    }
    
    function payout(address to, uint256 amount) external onlyOwner {
        require(premiumToken.transfer(to, amount), "Transfer failed");
        totalPayouts += amount;
    }
    
    function isMember(address member) external view returns (bool) {
        return premiumsPaid[member] > 0;
    }
    
    function memberCount() external view returns (uint256) {
        // Note: This is a simplified approach for example purposes
        // In a real-world scenario, you would need a better way to track members
        uint256 count = 0;
        for (uint256 i = 0; i < totalPremiums; i++) {
            if (premiumsPaid[address(uint160(i))] > 0) {
                count++;
            }
        }
        return count;
    }
}
