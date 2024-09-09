// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract InsurancePool is Ownable {
    IERC20 public premiumToken;
    uint256 public totalPremiums;
    uint256 public totalPayouts;
    mapping(address => uint256) public premiumsPaid;
    mapping(address => bool) public isMember;
    uint256 public memberCount;

    event PremiumPaid(address indexed member, uint256 amount);
    event ClaimPaid(address indexed claimant, uint256 amount);
    event MemberAdded(address indexed member);
    event MemberRemoved(address indexed member);

    constructor(address _premiumToken) {
        premiumToken = IERC20(_premiumToken);
    }

    function addMember(address _member) external onlyOwner {
        require(!isMember[_member], "Already a member");
        isMember[_member] = true;
        memberCount++;
        emit MemberAdded(_member);
    }

    function removeMember(address _member) external onlyOwner {
        require(isMember[_member], "Not a member");
        isMember[_member] = false;
        memberCount--;
        emit MemberRemoved(_member);
    }

    function payPremium(uint256 _amount) external {
        require(isMember[msg.sender], "Not a member");
        require(premiumToken.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        premiumsPaid[msg.sender] += _amount;
        totalPremiums += _amount;
        emit PremiumPaid(msg.sender, _amount);
    }

    function processClaim(address _claimant, uint256 _amount) external onlyOwner {
        require(isMember[_claimant], "Not a member");
        require(_amount <= address(this).balance, "Insufficient funds");
        require(premiumToken.transfer(_claimant, _amount), "Transfer failed");
        totalPayouts += _amount;
        emit ClaimPaid(_claimant, _amount);
    }

    function getPoolBalance() public view returns (uint256) {
        return premiumToken.balanceOf(address(this));
    }

    function withdrawExcessFunds(uint256 _amount) external onlyOwner {
        require(_amount <= getPoolBalance() - totalPayouts, "Insufficient excess funds");
        require(premiumToken.transfer(owner(), _amount), "Transfer failed");
    }
}