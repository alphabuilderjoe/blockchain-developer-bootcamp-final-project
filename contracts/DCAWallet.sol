// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DCAWallet {
  
  enum TokenType{ WETH, WBTC, DPI, UNI, AAVE, YFI, SNX}


  // Each deposit has an individual vault created 
  struct Vault {
    address ERC20_address;   // address of ERC20 token to be locked
    uint num_of_tokens;
    uint time_of_maturity;
  }

  struct User{
    address owner_address;
    mapping(address => uint) portfolio_allocation; //percentage of each ERC20 token to purchase
    //Vault vaults[] = new Vault[]; // list of all vaults 
  }

  constructor() public {
  }

  //User sets up/modifies portfolio allocation
  function createPortfolioAllocation() public{

  }


  //Any USDC deposited to contract is used to 
  function tradeExecution() payable public {

  }


  //Withdraw/spend tokens from maturing vault
  function withdrawTokens() public {

  }


  //Check total tokens locked and vesting date schedules
  function checkTokenBalances() public {

  }

}
