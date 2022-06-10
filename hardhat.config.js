require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const privateKey = process.env.PRIVATE_KEY

module.exports = {
  networks: {
    hardhat: {
      chainId: 137,
    },
    testnet: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/9ue0qc1c1dcfVpEIdLDYIivPP0BN9eGK',
      accounts: [privateKey],
    },
    mainnet: {
      url: 'https://polygon-rpc.com',
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
}
