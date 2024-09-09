require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: '0.8.4',
  networks: {
    hardhat: {},
    base: {
      url: 'https://base-goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    optimism: {
      url: 'https://optimism-goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: 'YOUR_ETHERSCAN_API_KEY',
  },
};
