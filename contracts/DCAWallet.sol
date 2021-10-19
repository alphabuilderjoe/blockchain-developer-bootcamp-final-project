// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import "@uniswap/v3-periphery/contracts/interfaces/IQuoter.sol";

interface IUniswapRouter is ISwapRouter {
    function refundETH() external payable;
}

interface ErcToken {
      function transfer(address dst, uint wad) external returns (bool);
      function transferFrom(address src, address dst, uint wad) external returns (bool);
      function balanceOf(address guy) external view returns (uint);
}


contract DCAWallet {

  // Kovan addresses
  IUniswapRouter internal constant uniswapRouter = IUniswapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
  IQuoter internal constant quoter = IQuoter(0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6);
  address[] internal token_addresses = [0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa,  //DAI
                                0xd0A1E359811322d97991E03f863a0C30C2cF029C,  //WETH
                                0xa36085F69e2889c224210F603D836748e7dC0088];  //LINK

  

  mapping(address => mapping(uint => uint)) public tokenBalances; //owner address => tokenType enum => tokenbalance
  mapping(address => uint[]) public portfolioAllocation;  // investment strategy for each owner
  mapping(address => uint) public userTimelock;   //timelock where user can't withdraw tokens 

  uint24 internal constant poolFee = 3000;
  
  enum TokenType{ DAI, WETH, LINK}

  ErcToken internal daiToken;
  ErcToken internal wethToken;
  ErcToken internal linkToken;

  constructor() {
     
    daiToken = ErcToken(token_addresses[0]);  
    wethToken = ErcToken(token_addresses[1]);  
    linkToken = ErcToken(token_addresses[2]);  
  }

  //User sets up/modifies portfolio allocation
  function createPortfolioAllocation(uint[] memory _portfolio_allocation) public{
    require(_portfolio_allocation.length == 3); // number of tokens under TokenType enum

    uint i;
    uint sum = 0;

    for(i = 0; i<_portfolio_allocation.length; i++ ){
      sum += _portfolio_allocation[i];
    }

    require(sum == 100);

    portfolioAllocation[msg.sender] = _portfolio_allocation;

  }

  //Handle deposits of dai
  function daiDeposited(uint _amount) public {
    require(_amount > 0, "amount should be greater than 0");

    // Need owner to approve token transfer via javascript UI first
    daiToken.transferFrom(msg.sender, address(this), _amount);

    tokenBalances[msg.sender][uint(TokenType.DAI)] += _amount;

  }

  //Handle deposits of dai
  function daiDepositedAndExecute(uint _amount) public {
    require(_amount > 0, "amount should be greater than 0");

    // Need owner to approve token transfer via javascript UI first
    daiToken.transferFrom(msg.sender, address(this), _amount);

    tokenBalances[msg.sender][uint(TokenType.DAI)] += _amount;

    executePortfolioBuys(_amount);
  }

  function executePortfolioBuys(uint _amount) public {
    uint i;
    
    for(i = 1; i<portfolioAllocation[msg.sender].length; i++ ){
      swapExactInputSingle( portfolioAllocation[msg.sender][i] * _amount / 100, i);
    }



  }

  function swapExactInputSingle(uint256 _amountIn, uint token_index) public returns (uint256 amountOut) {
        // msg.sender must approve this contract

        //Deduct dai balance from sender
        tokenBalances[msg.sender][uint(TokenType.DAI)] -= _amountIn;


        // Approve the router to spend DAI.
        TransferHelper.safeApprove(token_addresses[0], address(uniswapRouter), _amountIn);

        uint256 deadline = block.timestamp + 15; // using 'now' for convenience, for mainnet pass deadline from frontend!
        address tokenIn = token_addresses[0];
        address tokenOut = token_addresses[token_index];
        uint24 fee = 3000;
        address recipient = address(this);
        uint256 amountIn = _amountIn;
        uint256 amountOutMinimum = 0;
        uint160 sqrtPriceLimitX96 = 0;
        
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams(
            tokenIn,
            tokenOut,
            fee,
            recipient,
            deadline,
            amountIn,
            amountOutMinimum,
            sqrtPriceLimitX96
        );
        
        amountOut = uniswapRouter.exactInputSingle(params);
        uniswapRouter.refundETH();
        
        // refund leftover ETH to user
        (bool success,) = msg.sender.call{ value: address(this).balance }("");
        require(success, "refund failed");

        //Add swapped token to senders balance
        tokenBalances[msg.sender][token_index] += amountOut;
    }

  // User can set timelock to prevent any withdrawals/forced to hodl
  function setTimelockByDate(uint _unlockDate) public {
    require(_unlockDate > userTimelock[msg.sender] );
    userTimelock[msg.sender] = _unlockDate;
  }

  function setTimelockByHours(uint _hoursToLock) public {
    require(block.timestamp + _hoursToLock * 1 hours > userTimelock[msg.sender] );
    userTimelock[msg.sender] = block.timestamp + _hoursToLock * 1 hours;
  }

  function setTimelockByDays(uint _daysToLock) public {
    require(block.timestamp + _daysToLock * 1 days > userTimelock[msg.sender] );
    userTimelock[msg.sender] = block.timestamp + _daysToLock * 1 days;
  }


  //Withdraw/spend tokens from maturing vault
  function withdrawTokens(uint amount, uint token_index) public {
    require(block.timestamp >= userTimelock[msg.sender]);
    require(tokenBalances[msg.sender][token_index] >= amount);

    tokenBalances[msg.sender][token_index] -= amount;
    ErcToken withdrawal_token = ErcToken(token_addresses[token_index]);
    withdrawal_token.transfer(msg.sender, amount);
  }


  //convenience function to swap eth to dai for test cases
  function convertExactEthToDai() external payable {
    require(msg.value > 0, "Must pass non 0 ETH amount");

    uint256 deadline = block.timestamp + 15; // using 'now' for convenience, for mainnet pass deadline from frontend!
    address tokenIn = token_addresses[1];
    address tokenOut = token_addresses[0];
    uint24 fee = 3000;
    address recipient = msg.sender;
    uint256 amountIn = msg.value;
    uint256 amountOutMinimum = 0;
    uint160 sqrtPriceLimitX96 = 0;
    
    ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams(
        tokenIn,
        tokenOut,
        fee,
        recipient,
        deadline,
        amountIn,
        amountOutMinimum,
        sqrtPriceLimitX96
    );
    
    uint amountOut = uniswapRouter.exactInputSingle{ value: msg.value }(params);
    uniswapRouter.refundETH();
    
    // refund leftover ETH to user
    (bool success,) = msg.sender.call{ value: address(this).balance }("");
    require(success, "refund failed");
  }

  //getters for mapping
  function getTokenBalances(address user, uint token_index) public view returns (uint256) {
    return tokenBalances[user][token_index];
  }

  function getPortfolioAllocation(address user) public view returns (uint256[] memory) {
    return portfolioAllocation[user];
  }

  function getUserTimelock(address user) public view returns (uint256) {
    return userTimelock[user];
  }


}
