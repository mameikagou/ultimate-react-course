

// 这样命名是有规范的，1_开头的文件会被优先执行
// 然后优先部署; 

const Migrations = artifacts.require('Migrations');

// artifacts is a global truffle object that is used to access the contract artifacts
// 
module.exports = function(deployer){
    deployer.deploy(Migrations);
}