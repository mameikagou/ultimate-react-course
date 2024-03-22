// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.22 <0.9.0;
pragma solidity 0.8.19;

contract Migrations {
  /**
   * @dev Prints Hello World string
   */
  // uint256 number;
  // // 创建的交易才能改变以太坊状态;
  // function store(uint256 num)public {
  //   number = num;
  // }

  // // 这是只是简单call一下, 并未更改状态; 
  // function retrieve() public view returns (uint256){ 
  //   return  number;
  // }

  address public owner = msg.sender;
  // msg.sender 是一个全局变量, 代表了当前调用者的地址;
  // 当创建公共变量(public)的时候, 也会自动创建getter函数来访问这些值;
  uint public last_completed_migration;

  modifier restricted() {
    // 定义了一个修饰符, 可以用来修改函数的行为;
    // 限制了只有owner调用者才能调用这个函数;
    require(msg.sender == owner, 
    "This function is restricted to the contract's owner"
    );
    _;
  }

  // 引用那个修饰符, 限制只有owner才能调用这个函数;
  // 这是一个查看migrate状态的函数;
  // 一般一次migrant就是一个合约, 要使用对应开头规范的js代码来部署; 
  // js规范如: 1_initial_migration.js
  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }
}
      