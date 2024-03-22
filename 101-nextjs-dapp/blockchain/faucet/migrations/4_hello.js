

const HelloWorld = artifacts.require("Hello");
module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
}