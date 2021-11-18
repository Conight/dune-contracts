// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function main() {
  // Prepare to deploy
  const [deployer] = await ethers.getSigners();
  console.log("Deploying account:", await deployer.getAddress());
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );
  const DuneAvatar = await ethers.getContractFactory("DuneAvatar");
  const duneAvatarProxy = await upgrades.deployProxy(DuneAvatar, {
    kind: "uups",
  });
  await duneAvatarProxy.deployed();
  console.log("DuneAvatarProxy deployed to:", duneAvatarProxy.address);
  const DuneSpices = await ethers.getContractFactory("DuneSpices");
  const duneSpicesProxy = await upgrades.deployProxy(DuneSpices, {
    kind: "uups",
  });
  await duneSpicesProxy.deployed();
  console.log("DuneSpicesProxy deployed to:", duneSpicesProxy.address, "\n");
  // const DuneGovernor = await ethers.getContractFactory("DuneGovernor");
  // const duneGovernor = await DuneGovernor.deploy(duneSpices.address, );
  // await duneGovernor.deployed();
  const DuneLand = await ethers.getContractFactory("DuneLand");
  const duneLandProxy = await upgrades.deployProxy(DuneLand, {
    kind: "uups",
  });
  await duneLandProxy.deployed();
  console.log("DuneLandProxy deployed to:", duneLandProxy.address);
  // console.log("DuneGovernor deployed to:", duneGovernor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
