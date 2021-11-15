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
  // DuneAvatar deployed to: 0x99E0a3060de3695d819fCFa52CD00aece8236fB2
  // DuneSpices deployed to: 0xB178Becd317302816d7270b9B7186C44Dd1642AD
  // DuneGovernor deployed to: 0xbADa8898BeAD5Ec2Fa763072fd7EC52d34d876fB
  // DuneLand deployed to: 0xeD9950f548B4b5cC514DaaE3FE8fB84394bEF57d

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
  console.log("DuneSpices deployed to:", duneSpices.address);
  console.log("DuneGovernor deployed to:", duneGovernor.address);
  console.log("DuneLand deployed to:", duneLand.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
