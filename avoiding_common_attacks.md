# Avoiding common attacks


## Using Specific Compiler Pragma 
Solidity version 0.7.6 was specified for the DCA Wallet main contract.

## Proper Use of Require, Assert and Revert 
Require is used to ensure msg.sender has sufficient balances before withdrawing funds. Also, user's token balance in DCA Wallet is deducted first before transferring funds to the user, as a safety measure to prevent potential re-entrancy attacks.
