async function main() {
  const GGWP = await ethers.getContractFactory("GGWP");

  //Start deployment, returning a promise that resolves to a contract object
  const contract = await GGWP.deploy("GGWP");

  console.log("Contract deployed to address: ", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });