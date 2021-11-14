// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DuneAvatar = await ethers.getContractFactory("DuneAvatar");
  const duneAvatar = await DuneAvatar.deploy();
  const DuneGovernor = await ethers.getContractFactory("DuneGovernor");
  const duneGovernor = await DuneGovernor.deploy();
  const DuneItems = await ethers.getContractFactory("DuneItems");
  const duneItems = await DuneItems.deploy();
  const DuneLand = await ethers.getContractFactory("DuneLand");
  const duneLand = await DuneLand.deploy();
  const DuneSpices = await ethers.getContractFactory("DuneSpices");
  const duneSpices = await DuneSpices.deploy();
  await duneAvatar.deployed();
  await duneGovernor.deployed();
  await duneItems.deployed();
  await duneLand.deployed();
  await duneSpices.deployed();

  console.log("DuneAvatar deployed to:", duneAvatar.address);
  console.log("DuneGovernor deployed to:", duneGovernor.address);
  console.log("DuneItems deployed to:", duneItems.address);
  console.log("DuneLand deployed to:", duneLand.address);
  console.log("DuneSpices deployed to:", duneSpices.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
