import { ethers } from "ethers";
// import { InterfaceAbi } from "node_modules/ethers/lib.commonjs";
import { InterfaceAbi } from "ethers";
import { memo, useCallback, useEffect, useState } from "react";

export const ContractDemo = memo(({ abiWETH }: { abiWETH: InterfaceAbi }) => {
  // 只读合约, 调用的是带view和pure的函数; 三个参数`address`, `abi`, `provider`
  // const contract = new ethers.Contract(`address`, `abi`, `provider`)
  // 连接以太坊主网
  // const [nameWETH, setNameWETH] = useState();

  // TODO 这些console为什么不执行? 已经修好了, 是abi的问题; 应该多使用"人类可读abi"
  const initializeContract = useCallback(async () => {
    // 填入Infura API Key, 教程：https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL02_Infura/readme.md
    const INFURA_ID = import.meta.env.VITE_INFURA_ID;
    const providerETH = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_ID}`
    );
    // 第1种输入abi的方式: 复制abi全文
    // WETH的abi可以在这里复制：https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code
    //   第一种, 直接复制abi
    // const abiWETH =
    //   '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view",...太长后面省略...';
    const addressWETH = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // WETH Contract
    //  创建合约
    const contractWETH = new ethers.Contract(addressWETH, abiWETH, providerETH);

    // 第2种输入abi的方式：输入程序需要用到的合约代码，逗号分隔，ethers会自动帮你转换成相应的abi
    // 人类可读abi，以ERC20合约为例
    // const abiERC20 = [
    //   "function name() view returns (string)",
    //   "function symbol() view returns (string)",
    //   "function totalSupply() view returns (uint256)",
    //   "function balanceOf(address) view returns (uint)",
    // ];
    // const addressDAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI Contract
    // const contractDAI = new ethers.Contract(addressDAI, abiERC20, providerETH);

    const nameWETH = await contractWETH.name();
    const symbolWETH = await contractWETH.symbol();
    const totalSupplyWETH = await contractWETH.totalSupply();
    console.log("\n读取WETH合约信息");
    console.log(`合约地址: ${addressWETH}`);
    console.log(`名称: ${nameWETH}`);
    console.log(`代号: ${symbolWETH}`);
    console.log(`总供给: ${ethers.formatEther(totalSupplyWETH)}`);
    const balanceWETH = await contractWETH.balanceOf("vitalik.eth");
    console.log(`Vitalik持仓: ${ethers.formatEther(balanceWETH)}\n`);
  }, [abiWETH]);

  useEffect(() => {
    initializeContract();
  }, [initializeContract]);

  return <></>;
});
