async function main() {
  // Grab the contract factory 
  const ArbNFT = await ethers.getContractFactory("ArbNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const arbNFT = await ArbNFT.deploy(); // Instance of the contract 
  console.log("Contract deployed to address:", arbNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });