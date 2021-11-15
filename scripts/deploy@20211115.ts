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
  await duneAvatar.deployed();
  const DuneSpices = await ethers.getContractFactory("DuneSpices");
  const duneSpices = await DuneSpices.deploy();
  await duneSpices.deployed();
  const DuneGovernor = await ethers.getContractFactory("DuneGovernor");
  const duneGovernor = await DuneGovernor.deploy(duneSpices.address);
  await duneGovernor.deployed();
  const DuneLand = await ethers.getContractFactory("DuneLand");
  const duneLand = await DuneLand.deploy();
  await duneLand.deployed();

  console.log("DuneAvatar deployed to:", duneAvatar.address);
  console.log("DuneGovernor deployed to:", duneGovernor.address);
  console.log("DuneLand deployed to:", duneLand.address);
  console.log("DuneSpices deployed to:", duneSpices.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
