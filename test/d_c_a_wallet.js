const DCAWallet = artifacts.require("DCAWallet");
const toBN = web3.utils.toBN;

const daiAddress = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa"
const daiABI = [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],
"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,
"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},
{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],
"name":"Approval","type":"event"},
{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},
{"indexed":true,"internalType":"address","name":"usr","type":"address"},
{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},
{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},
{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]



contract("DCAWallet", function (accounts) {

  
  /// Ensure DCAWallet code is deployed
  it("should assert true", async function () {
    await DCAWallet.deployed();
    return assert.isTrue(true);
  });


  it("should allow user to set up portfolio allocation correctly", async function (){
    let dca = await DCAWallet.deployed();
    await dca.createPortfolioAllocation([60,30,10], {from: accounts[0]});

    let portAllocation = await dca.getPortfolioAllocation(accounts[0]);

    return assert.equal(
      portAllocation.toString(),
      [toBN(60).toString(), toBN(30).toString(), toBN(10).toString()]);
  });

  it("should allow users to swap eth for dai", async function () {
    let dca = await DCAWallet.deployed();
    await dca.convertExactEthToDai({from: accounts[0], value: web3.utils.toBN(1*10**16) })

    const daiContract = new web3.eth.Contract(daiABI, daiAddress)
    let tokenBalances = await daiContract.methods.balanceOf(accounts[0]).call()


    return assert.notEqual(
      tokenBalances.toString(),
      0);

  });


  it("should allow users to deposit dai and invest it automatically for other tokens", async function () {
    let dca = await DCAWallet.deployed();

    await dca.createPortfolioAllocation([60,30,10], {from: accounts[0]});
    await dca.convertExactEthToDai({from: accounts[0], value: web3.utils.toBN(1*10**16) })

    const daiContract = new web3.eth.Contract(daiABI, daiAddress)
    let daiBalances = await daiContract.methods.balanceOf(accounts[0]).call()

    await daiContract.methods.approve(dca.address, daiBalances).send({from: accounts[0]})
    await dca.daiDepositedAndExecute(daiBalances, {from: accounts[0]})

    let wallet_dai = await dca.getTokenBalances(accounts[0], 0);
    let wallet_weth = await dca.getTokenBalances(accounts[0], 1);
    let wallet_link = await dca.getTokenBalances(accounts[0], 2);

    assert.notEqual(
      wallet_dai.toString(),
      0);

    assert.notEqual(
      wallet_weth.toString(),
      0);

    assert.notEqual(
      wallet_link.toString(),
      0);

  });


  it("should allow users to withdraw funds", async function () {
    let dca = await DCAWallet.deployed();

    await dca.createPortfolioAllocation([60,30,10], {from: accounts[0]});
    await dca.convertExactEthToDai({from: accounts[0], value: web3.utils.toBN(1*10**16) })

    const daiContract = new web3.eth.Contract(daiABI, daiAddress)
    let daiBalances = await daiContract.methods.balanceOf(accounts[0]).call()

    await daiContract.methods.approve(dca.address, daiBalances).send({from: accounts[0]})
    await dca.daiDepositedAndExecute(daiBalances, {from: accounts[0]})

    let wallet_dai_initial = await dca.getTokenBalances(accounts[0], 1);

    //await dca.setTimelockByHours(1, {from: accounts[0]});

    await dca.withdrawTokens(wallet_dai_initial, 0, {from: accounts[0]}); 

    

    let wallet_dai_final = await dca.getTokenBalances(accounts[0], 1);
    let address0_dai = await daiContract.methods.balanceOf(accounts[0]).call()

    assert.notEqual( 
      wallet_dai_initial,
      wallet_dai_final
    )

    assert.equal(
      wallet_dai_initial,
      address0_dai
    )

  });


});



