var DCAWallet = artifacts.require("./DCAWallet.sol");

module.exports = function(deployer) {
  deployer.deploy(DCAWallet);
};