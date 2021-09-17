# ConsensysAcademy 2021 - Final Project


# Idea : 
Dark pool exchange to match large block trades (starting with ETH-USD trading)

# Workflow:
1. Users deposit roughly equal values of ETH and USD into the smart contract. (Both ETH and USD are deposited to obscure the buying/selling intention of the user). Users also tell the contract whether they are looking to buy or sell ETH.
2. After a set fixing time, trades will be matched, and filled at the current oracle price for ETH-USD (minus some fees). If the total buying and selling amounts don't match, the excess buying/selling amounts won't be filled. Traders will be able to withdraw all the funds after this time, whether orders were filled or not.

# Scope of project:
1. Managing deposits and withdrawals of ETH and ERC20 tokens.
2. Collecting buy or sell intention of users without broadcasting it ahead of the fixing time.
3. Obtain oracle price at fixing time (might need a "keeper" to interact with the contract)
4. Match buyers and sellers, and update their token balances.

Future possibilities:
1. Use "tornado cash-like" deposits to obscure deposits, so that users dont need to deposit both sides of the trade.

