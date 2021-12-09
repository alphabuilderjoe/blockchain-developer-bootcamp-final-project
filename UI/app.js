// contract address on Kovan:
const dcaAddress = '0x48d02e28a6C4b138599F4f5734940c70a672B454'


const dcaABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_portfolio_allocation",
        "type": "uint256[]"
      }
    ],
    "name": "createPortfolioAllocation",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "daiDeposited",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "daiDepositedAndExecute",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "executePortfolioBuys",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amountIn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token_index",
        "type": "uint256"
      }
    ],
    "name": "swapExactInputSingle",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_unlockDate",
        "type": "uint256"
      }
    ],
    "name": "setTimelockByDate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_hoursToLock",
        "type": "uint256"
      }
    ],
    "name": "setTimelockByHours",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_daysToLock",
        "type": "uint256"
      }
    ],
    "name": "setTimelockByDays",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token_index",
        "type": "uint256"
      }
    ],
    "name": "withdrawTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "convertExactEthToDai",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "token_index",
        "type": "uint256"
      }
    ],
    "name": "getTokenBalances",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getPortfolioAllocation",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "getUserTimelock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]



var token_names = new Array("DAI", "WETH", "LINK")
const NUM_OF_TOKENS = 3


const daiAddress = "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa"

const daiABI = [{"inputs":[{"internalType":"uint256","name":"chainId_","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":true,"inputs":[{"indexed":true,"internalType":"bytes4","name":"sig","type":"bytes4"},{"indexed":true,"internalType":"address","name":"usr","type":"address"},{"indexed":true,"internalType":"bytes32","name":"arg1","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"arg2","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"LogNote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"deny","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"move","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"pull","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"push","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"guy","type":"address"}],"name":"rely","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]

  // Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += ''
  
        // add in web3 here
        var web3 = new Web3(window.ethereum)
  
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Not Available!'
        // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
        // mmDetected.appendChild(node)
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
    }
  })
  
  
  var web3 = new Web3(window.ethereum)

  const dcaContract = new web3.eth.Contract(dcaABI, dcaAddress)
  dcaContract.setProvider(window.ethereum)
    
  // Grabbing the button object,  
  
  const mmEnable = document.getElementById('mm-connect')
  
  // since MetaMask has been detected, we know
  // `ethereum` is an object, so we'll do the canonical
  // MM request to connect the account. 
  // 
  // typically we only request access to MetaMask when we
  // need the user to do something, but this is just for
  // an example
   
  mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts'})
    // grab mm-current-account
    // and populate it with the current address
    var mmCurrentAccount = document.getElementById('mm-current-account')
    mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
  
    var btnRefreshBalances = document.getElementById('btn-refresh-balances')
    btnRefreshBalances.click()
  }



  const btnRefreshBalances = document.getElementById('btn-refresh-balances')
  btnRefreshBalances.onclick = async () => {
    var i;
    var token_amount;
    var string_balances = "Token Balances <br>";

    for(i=0; i < NUM_OF_TOKENS; i++){
      token_amount = await dcaContract.methods.getTokenBalances(ethereum.selectedAddress,i).call()
      string_balances += token_names[i] + " : " + token_amount/10**18 + "<br>"
    }
    
    var portfolio_array = token_amount = await dcaContract.methods.getPortfolioAllocation(ethereum.selectedAddress).call()
    string_balances += "<br> Portfolio Allocation: " + portfolio_array + "<br>"

    var timelock = token_amount = await dcaContract.methods.getUserTimelock(ethereum.selectedAddress).call()
    var date = new Date(timelock * 1000)
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    string_balances += "<br> Timelock until: " + date + " " + hours + ":" + minutes.substr(-2) + "<br>"


    var displayBalances = document.getElementById('display-balances')
    displayBalances.innerHTML = string_balances
  }

  const btnCreateAlloc = document.getElementById('dca-create-allocation-button');
  btnCreateAlloc.onclick = async() => {
    const daiAlloc = document.getElementById('dai-allocation').value;
    const wethAlloc = document.getElementById('weth-allocation').value;
    const linkAlloc = document.getElementById('link-allocation').value;

    //var alloc_array = JSON.parse(allocString)

    await dcaContract.methods.createPortfolioAllocation([daiAlloc, wethAlloc, linkAlloc]).send({from: ethereum.selectedAddress})

    var btnRefreshBalances = document.getElementById('btn-refresh-balances')
    btnRefreshBalances.click()
  }

  const btnInvestDai = document.getElementById('dca-invest-dai-button');
  btnInvestDai.onclick = async() => {
    const dai_to_invest = document.getElementById('dca-invest-dai').value;

    await dcaContract.methods.daiDepositedAndExecute(web3.utils.toBN(dai_to_invest*10**18)).send({from: ethereum.selectedAddress})

    var btnRefreshBalances = document.getElementById('btn-refresh-balances')
    btnRefreshBalances.click()

    const dai_status = document.getElementById('dca-dai-approved')
    dai_status.innerHTML = ""
  }


  const btnTimelock = document.getElementById('dca-timelock-button');
  btnTimelock.onclick = async() => {
    const days_to_lock = document.getElementById('dca-timelock-days').value;
    const hours_to_lock = document.getElementById('dca-timelock-hours').value;


    await dcaContract.methods.setTimelockByHours(24*days_to_lock+hours_to_lock).send({from: ethereum.selectedAddress})

    var btnRefreshBalances = document.getElementById('btn-refresh-balances')
    btnRefreshBalances.click()
  }

  const btnWithdraw = document.getElementById('dca-withdrawal-token-button');
  btnWithdraw.onclick = async() => {
    var radioButtons = document.getElementsByName('withdawal_token');
    var token_index;
    var i;

    for( i = 0; i < radioButtons.length; i++){
      if(radioButtons[i].checked){
        token_index = i;
      }
    }

    const amt_to_withdraw = document.getElementById('dca-withdraw-amt').value;


    await dcaContract.methods.withdrawTokens(web3.utils.toBN(amt_to_withdraw*10**18),token_index).send({from: ethereum.selectedAddress})

    var btnRefreshBalances = document.getElementById('btn-refresh-balances')
    btnRefreshBalances.click()
  }


  const daiApprove = document.getElementById('btn-dai-approve')

  daiApprove.onclick = async () => {
    const dai_status = document.getElementById('dca-dai-approved')
    dai_status.innerHTML = ""

    const dai_to_invest = document.getElementById('dca-invest-dai').value;

    const daiContract = new web3.eth.Contract(daiABI, daiAddress)
    daiContract.setProvider(window.ethereum)


    await daiContract.methods.approve(dcaAddress, web3.utils.toBN(dai_to_invest*10**18)).send({from: ethereum.selectedAddress})

    
    dai_status.innerHTML = "Dai spending approved, next please click 'Send Dai and Execute Buys'"

  }


  const btnSwapEther = document.getElementById('swap-ether-button')
  btnSwapEther.onclick = async () => {
    const swap_ether_amt =  document.getElementById('swap-ether').value;

    await dcaContract.methods.convertExactEthToDai().send({from: ethereum.selectedAddress, value:web3.utils.toBN(swap_ether_amt*10**18)})
  }

  

  