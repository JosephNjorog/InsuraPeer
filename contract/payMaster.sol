// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@zksync/contracts/interfaces/IZkSync.sol";

contract Paymaster {
    address public admin;
    IERC20 public token;
    IZkSync public zkSync;

    constructor(address _token, address _zkSync) {
        admin = msg.sender;
        token = IERC20(_token);
        zkSync = IZkSync(_zkSync);
    }

    function payFees(uint256 amount) external {
        require(token.transferFrom(msg.sender, address(this), amount), "Payment failed");

        // Pay gas fees in ERC-20 tokens
        zkSync.depositFunds{value: amount}(msg.sender, token);
    }
}
