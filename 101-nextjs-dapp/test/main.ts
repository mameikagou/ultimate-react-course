import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();

export const demo = async()=>{
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
}

demo();