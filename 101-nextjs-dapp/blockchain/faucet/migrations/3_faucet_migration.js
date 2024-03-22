

const FaucetContract = artifacts.require("Faucet");
// 用于部署一个名为"Faucet"的合约

module.exports = function(deployer) {
    deployer.deploy(FaucetContract);
}