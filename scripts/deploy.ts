
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Dist = await ethers.getContractFactory("Merkle");
  const dist = await Dist.deploy();

  await dist.deployed();

  console.log("dist deployed to:", dist.address);

  const claimer = "0xaFd511df56590e6ab1771A3c0373063aFf7A1260";
  const amount = '10000000000000000000';

  const getToken= await dist.claimToken(['0xeeec69a26eecbc1b4fcd220601e5f30022abbf6cd2e95ee090e75941b2db1f1d'], claimer, amount)





}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
