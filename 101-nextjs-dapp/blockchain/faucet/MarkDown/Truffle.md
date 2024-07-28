### truffle init
初始化

### truffle test
测试合约

### truffle develop
与合约进行交互

### truffle migrate --reset
truffle migrate --reset --network development
部署到指定网络

### truffle console

然后运行js代码: 
```
const instance = await Faucet.deployed()
instance
```
然后查看instance, 可以看到部署情况; 


public的代码, 默认有getter方法
```
const funds = await instance.funds();
funds

输出: 
BN {
  negative: 0,
  words: [ 1000, <1 empty item> ],
  length: 1,
  red: null
}
```
其他变量也可; 

```
创建合约实例:
const instance = new web3.eth.Contract(abi,"address")

const instance = new web3.eth.Contract(Faucet.abi,"0xF42691034b03e3363269dE9A3F1c091980cbF711")
instance
```

```
调用合约方法: 

这里funds因为设置为了public, 故默认为一个方法; 
call是来发送一个只读请求的; 
const funds = await instance.methods.funds().call()
```

```
查看交易并发送交易
accounts

from参数, 指定accounts[]中的账户地址

to参数, 这里是Fauset合约的address

value是wei

创建交易的时候, 也会创建区块; 

web3.eth.sendTransaction({from: accounts[2], to: "0xA8563277c6706D3c7c6f51a9830BAc2eAA6C1294", value:"10000000000000000000"});
```

```
获取区块9
web3.eth.getBlock(9)
```

```
创建实例调函数
const instance = await Faucet.deployed()
instance.addFunds({value: "20000",from:accounts[1]}) //accounts不带引号

```