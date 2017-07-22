pragma solidity ^0.4.11;


import 'zeppelin-solidity/contracts/token/StandardToken.sol';

contract Token is StandardToken {

  string public name = "CoffeeCoin";
  string public symbol = "CCO";
  uint256 public decimals = 18;
  uint256 public INITIAL_SUPPLY = 10000;

  function Token() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}
