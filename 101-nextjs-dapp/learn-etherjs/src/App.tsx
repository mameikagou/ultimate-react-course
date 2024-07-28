import "./App.css";
import { ProviderDemo } from "@/ethers-api/ProviderDemo";
import { ContractDemo } from "@/ethers-api/ContractDemo";
import { InterfaceAbi } from "ethers";
import { useState } from "react";
function App() {
  // ProviderDemo();
  const abiERC20:InterfaceAbi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
  ];
  const [abiWETH] = useState<InterfaceAbi>(abiERC20);
  return (
    <>
    渲染成功!
      <ContractDemo abiWETH={abiWETH} />
    </>
  );
}

export default App;
