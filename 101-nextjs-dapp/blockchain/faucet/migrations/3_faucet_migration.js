

// eslint-disable-next-line no-undef
const FaucetContract = artifacts.require("Faucet");
// 用于部署一个名为"Faucet"的合约

// eslint-disable-next-line no-undef
module.exports = function(deployer) {
    deployer.deploy(FaucetContract);
}