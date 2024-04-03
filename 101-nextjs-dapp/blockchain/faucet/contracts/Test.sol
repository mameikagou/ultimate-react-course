// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Test {
    function test(uint testNum) external pure returns (uint) {
        // 内联汇编（inline assembly）是一种在 Solidity 中直接编写汇编代码的方式。
        // 一般是不这么写的, 除非你知道你在干什么;
        // 它允许你直接访问 EVM 的底层操作, 但是也会增加代码的复杂性和难以维护性。
        // 比如直接访问EVM的栈, 内存和存储; 
        assembly {
            let _num := 4
            let _tem := mload(0x40)
        }
        uint8[4] memory items = [1,2,3,4]; 
        // 这里在说, 他开辟了内存, 存到了3个块里面, 从0x0到0x20到0x40
        return testNum;
    }
}