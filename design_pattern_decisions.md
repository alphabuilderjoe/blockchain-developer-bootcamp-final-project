# Design patterns

## Inter-contract execution
The function exactInputSingle of the Uniswap router (hosted on the Kovan testnet at 0xE592427A0AEce92De3Edee1F18E0157C05861564) is called when executing trades.


## Inheritance and interfaces
The interface IUniswapRouter inherites from ISwapRouter (which was provided by Uniswap). IUniswapRouter adds the function refundEth which allows the contract to refund any unused ETH back to the original message caller.

## Access Control Design Patterns
All portfolio allocation decisions, deposits, setting of timelock, and withdrawals, are linked to the msg.sender address. This prevents non-owners from assessing the funds of the original user.
