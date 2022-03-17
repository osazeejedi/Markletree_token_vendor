import { MerkleTree } from "merkletreejs";
import { keccak256 } from "ethers/lib/utils";


let whitelist = ['0xaFd511df56590e6ab1771A3c0373063aFf7A1260','0x0F188eCe555d848936b968DD0911200F79CE44F6']

const leafnode = whitelist.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafnode, keccak256, { sortPairs: true });

//get the root hash of the markle tree in hex format

const rootHash = merkleTree.getRoot();

console.log("whitelistmarkletree/n", merkleTree.toString());

//let's get the merkleproof

const claimer = leafnode[0];
const proof = merkleTree.getHexProof(claimer);

console.log('proof for first claimer', proof);