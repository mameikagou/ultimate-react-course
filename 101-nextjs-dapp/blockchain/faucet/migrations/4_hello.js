
// eslint-disable-next-line no-undef
const HelloWorld = artifacts.require("Hello");
// eslint-disable-next-line no-undef
module.exports = function(deployer) {
    deployer.deploy(HelloWorld);
}