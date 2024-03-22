
###
智能合约每次调用, 都要付gas费, 这也是一种防黑客的机制, 防止无限循环的代码出现;

交易有slow, average, fast之分; 

### 工作量证明
就是一群矿工在矿池中挖矿, 通过去争夺一个区块; 

有一个nonce值, 如果大于target值, 就认为这个区块被找到了; 

你就可以在区块链中加一个区块; 

nonce 0~2^64

nonce = (nonce + 1) % (2^64); 这个其实是为了防止过大, 它其实上一行就以及找到了合适的nonce值; 
```

def mine(full_size, dataset, header, difficulty):
    # zero-pad target to compare with hash on the same digit
    target = zpad(encode_int(2**256 // difficulty), 64)[::-1]
    from random import randint
    nonce = randint(0, 2**64)
    while hashimoto_full(full_size, dataset, header, nonce) > target:
        nonce = (nonce + 1) % 2**64
    return nonce

```
###

web3js is collection of libs that allow you to interact with a local or remote ethereum node; 


###
truffle 就像一个client, 通过web3 api与区块链交互; 


