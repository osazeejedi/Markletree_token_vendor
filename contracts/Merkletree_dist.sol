//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


contract Merkle is ERC20{
    address _owner= msg.sender;
    uint256 _supply= 1000000000000000000000;
   
    constructor() ERC20("JEDI", "JD") 
        public
    { 
        _mint(_owner, _supply);
    }

//lets create our markle-tree distributor.


 bytes32 public Merkleroot = 0x8f55b2d91532b9c79edf5aaa1b303680f3411bdb90730695dedf18bb0c78f14a;



function claimToken (bytes32[] calldata proof, address claimer, uint256 amount) public {

    bytes32 leaf = keccak256(abi.encodePacked(claimer));
    require (MerkleProof.verify(proof, Merkleroot, leaf),"invalid proof");

    _mint (claimer, amount);



}




}