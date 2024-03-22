
###
truffle init 初始化一些东西

###
truffle compile 单独编译;

###
使用
```
truffle migrate 
```
遇到了三个报错: 
#### 其一
```
This version of µWS is not compatible with your Node.js build:
```
解决方式: 

使用
```
nvm use --lts
```

#### 其二
```
Error [ERR_REQUIRE_ESM]: require() of ES Module /Users/lonely/learn/react/ultimate-react-course/101-nextjs-dapp/blockchain/faucet/truffle-config.js from /opt/homebrew/lib/node_modules/truffle/node_modules/original-require/index.js not supported.
truffle-config.js is treated as an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which declares all .js files in that package scope as ES modules.
Instead rename truffle-config.js to end in .cjs, change the requiring code to use dynamic import() which is available in all CommonJS modules, or change "type": "module" to "type": "commonjs" in /Users/lonely/learn/react/ultimate-react-course/101-nextjs-dapp/blockchain/faucet/package.json to treat all .js files as CommonJS (using .mjs for all ES modules instead).
```

解决方式: 
```
在package.json里面:
type:"module" -> type:"commandjs"
```

#### 其三
```
> Everything is up to date, there is nothing to compile.
> Something went wrong while attempting to connect to the network at http://127.0.0.1:8545. Check your network configuration.
CONNECTION ERROR: Couldn't connect to node http://127.0.0.1:8545.
```

解决方式:
修改truffle-config.js里面的代码跟Ganache里面一样即可; 


#### truffle migrate运行报错:
```
 "某某contract"hit an invalid opcode while deploying. Try:
    * Verifying that your constructor params satisfy all assert conditions.
   * Verifying your constructor code doesn't access an array out of bounds.
   * Adding reason strings to your assert statements.
```

解决方式:修改truffle-config.js
中的solc字段和solidity的版本号
让二者的版本相协调:

就是其中一个版本有opcode但是另一个版本不支持; 

```
  compilers: {
    solc: {
        version:"0.8.19"
    }
  },
```

```
// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
```




### 合约调用失败: 
```
const instance = await Faucet.deployed()

instance.getFunderAtIndex(0)
```
报错: 
```
Uncaught Error: VM Exception while processing transaction: revert
```
可能原因: 
```
1, 合约内部的require, asset失败, 触发了回滚; 
2, gas不足, 函数调用条件不满足; 
3, (实际原因,没有addFunds, 该数组为空 )
```
