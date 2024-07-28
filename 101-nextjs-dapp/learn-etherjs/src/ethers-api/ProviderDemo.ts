import { ethers } from "ethers";

// 使用默认rpc连接以太坊网络;
// const provider = ethers.getDefaultProvider();

export const ProviderDemo = async () => {
  // const balance = await provider.getBalance(`vitalik.eth`);
  // console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);

  // 利用Infura的rpc节点连接以太坊网络
  // 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
  const INFURA_ID = "33f7bfc442094c448d55a416ebddc2d9";
  // 连接以太坊主网
  const providerETH = new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_ID}`
  );
  // 连接Goerli测试网
  const providerGoerli = new ethers.JsonRpcProvider(
    `https://goerli.infura.io/v3/${INFURA_ID}`
  );
  //   使用getBalance, 查询余额
  const balanceETH = await providerETH.getBalance(`vitalik.eth`);
  // 转化为eth
  console.log(`ETH Balance of vitalik: ${ethers.formatEther(balanceETH)} ETH`);
  // 获取网络信息
  const network = await providerETH.getNetwork();
  console.log(network.toJSON());
  // 获取区块高度
  console.log("\n3. 查询区块高度");
  const blockNumber = await providerETH.getBlockNumber();
  console.log(blockNumber);

  // 4. 查询 vitalik 钱包历史交易次数
  console.log("\n4. 查询 vitalik 钱包历史交易次数");
  const txCount = await providerETH.getTransactionCount("vitalik.eth");
  console.log(txCount);

  // 5. 查询当前建议的gas设置
  console.log("\n5. 查询当前建议的gas设置");
  const feeData = await providerETH.getFeeData();
  console.log(feeData);

  // 6. 查询区块信息
  console.log("\n6. 查询区块信息");
  const block = await providerETH.getBlock(0);
  console.log(block);
  // 7. 给定合约地址查询合约bytecode，例子用的WETH地址
  console.log("\n7. 给定合约地址查询合约bytecode，例子用的WETH地址");
  const code = await providerETH.getCode(
    "0xc778417e063141139fce010982780140aa0cd5ab"
  );
  console.log(code);
};
