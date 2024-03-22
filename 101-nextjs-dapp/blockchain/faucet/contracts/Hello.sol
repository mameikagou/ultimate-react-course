// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.22 <0.9.0;
pragma solidity 0.8.19;

contract Hello {
  /**
   * @dev Prints Hello World string
   pure: mentioned that this function will not modifu the state of the contract;
   */
  function sayHello() public pure returns (string memory) {
    return "Hello World";
  }
}
