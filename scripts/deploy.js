async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log('Deploying contracts with the account:', deployer.address);
  
    const InsurancePool = await ethers.getContractFactory('InsurancePool');
    const insurancePool = await InsurancePool.deploy();
  
    console.log('InsurancePool contract deployed to:', insurancePool.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  