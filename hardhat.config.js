require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  networks: {
    base: {
      url: "https://base-goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0xfeb7fc04d20f2d2ee36f49313c89d6ef60fb50f53be0e4033ba0363946f7cbbd`]
    },
    optimism: {
      url: "https://optimism-goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID",
      accounts: [`0xfeb7fc04d20f2d2ee36f49313c89d6ef60fb50f53be0e4033ba0363946f7cbbd`]
    },
  },
  etherscan: {
    apiKey: "your_etherscan_api_key"
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
