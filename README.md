# ConsensysAcademy 2021 - Final Project
HODL Wallet

# Idea : 
User-friendly monthly dollar-cost averaging wallet + optional user-defined timelock preventing early withdrawals/sales

# Workflow:
1. Users would set up initial wallet portfolio allocation percentages. E.g. users will select the percentage of how much ETH, LINK, and other ERC20 tokens they would like to buy a month. 
2. Going forward, whenever users make a deposit of Dai (likely on a weekly or monthly basis), those funds will be invested according to the user's initial portfolio allocation.
3. At any point, the user can set a timelock on all assets held by the wallet, and this timelock cannot be removed by the user. This timelock is to encourage long-term holding of crypto assets.

# Directory structure:
build - ABI files for final build

contracts - Solidity code for main contract "DCAWallet.sol"

migrations - Migration and deployment instructions

test - Contains tests for DCAWallet. (Note : Tests should be run with )

joepro123.github.io - Contains html and javascript code behind front-end UI


# Deployed front-end:
https://joepro123.github.io/

# Deployed contract on Kovan testnet
0x48d02e28a6C4b138599F4f5734940c70a672B454

# Installing dependencies
npm i @uniswap/v3-periphery

npm i truffle-plugin-verify  (used to verify smart contract ABI on Etherscan)

# Deploying smart contract on Kovan
1. Populate Metamask secret phrases in the .secret file, and etherscan api in .secret_etherscan.
2. In the truffle-config.js file, update the Infura weblinks 
3. Run 'truffle migrate --network kovan'
4. Run 'truffle run verify DCAWallet --network kovan'


# Running truffle tests
1.'truffle test --network kovan'

# Screencast recording links
Part 1 - https://www.loom.com/share/5e39a077e4c34b679fcbe83321b4fd4b
Part 2 - https://www.loom.com/share/23f8629b8ac042d5879572d0950300b8 

# Ethereum address to receive NFT certification
0xB28397E0e9a9CD849A30AF694f46765310274aF5