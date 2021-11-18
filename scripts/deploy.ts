// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const DuneAvatar = await ethers.getContractFactory("DuneAvatar");
  const duneAvatarProxy = await upgrades.deployProxy(DuneAvatar);
  await duneAvatarProxy.deployed();
  const DuneSpices = await ethers.getContractFactory("DuneSpices");
  const duneSpicesProxy = await upgrades.deployProxy(DuneSpices);
  await duneSpicesProxy.deployed();
  // const DuneGovernor = await ethers.getContractFactory("DuneGovernor");
  // const duneGovernor = await DuneGovernor.deploy(duneSpices.address, );
  // await duneGovernor.deployed();
  const DuneLand = await ethers.getContractFactory("DuneLand");
  const duneLandProxy = await upgrades.deployProxy(DuneLand);
  await duneLandProxy.deployed();

  console.log("DuneAvatarProxy deployed to:", duneAvatarProxy.address);
  // console.log("DuneGovernor deployed to:", duneGovernor.address);
  console.log("DuneLandProxy deployed to:", duneLandProxy.address);
  console.log("DuneSpicesProxy deployed to:", duneSpicesProxy.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
