// SPDX-License-Identifier: MIT
// pragma solidity >=0.4.22 <0.9.0;
pragma solidity 0.8.19;

// 水龙头; 
// 获取小额加密货币的合约; 
// 一般用于测试网络
// 合约名字就是编译出的json名字
contract Faucet {
//     uint public funds = 1000; // positives values only
//     int public counter = -10;

//     // int256: min: -2^255, max: 2^255-1

//     uint32 public test = 4294967295; // 2^32-1

    // it's called when you make a tx that 
    // doesn't specifty function name to call
    // tx = transaction



    // mapping(address => bool) public funders;
    address[] public funders;
    // External functions are part of the contract interface, 
    // which means they can be called from other contracts and via transactions.
    // via是个介词, 表示某种途径; 
    receive() external payable {
        // 接收以太坊的函数;
    }
    function addFunds() public payable {
        // funders[add]=true;
        funders.push(msg.sender);
    }

    // memory是一个指定变量存储位置的关键字, 
    // memory(函数调用的临时数据, 函数执行结束后被销毁), 
    // storage(区块链上永久存储, 如合约的状态变量), 
    // calldata(只读, 用于函数的参数和返回值, 不能被修改); 
    function getAllFunders() public view  returns (address[] memory) {
        return funders;
    }

    function getFunderAtIndex(uint8 index) external view returns(address) {
        address[] memory _funders = getAllFunders();
        return _funders[index];
    }
    
}


// external: 函数只能被合约外部调用, 不能被合约内部调用; 需要通过交易调用;
// 或者内部使用this.f();
// public: 函数可以被合约内部和外部调用;