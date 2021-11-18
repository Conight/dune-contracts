import { ethers, upgrades } from "hardhat";

async function main() {
  // deploy upgradeable DuneAvatar
  const DuneAvatar = await ethers.getContractFactory("DuneAvatar");
  const da = await upgrades.deployProxy(DuneAvatar);
  await da.deployed();
  console.log("DuneAvatar deployed to:", da.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
