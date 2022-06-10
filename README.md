# Image gallery dApp

This template uses following versions

* Angular 13
* Hardhat 2.8
* Ethers 5.5
* Solidity 0.8.4

## Getting started

1. Clone this repository 

```
git clone git@github.com:ray-blue/image-gallery-polygon.git
```

2. Install dependencies

```
npm install
```

3. Install Metamask (if you not already did) https://metamask.io/download/
4. Configure Polygon in Metamask https://docs.matic.today/docs/develop/metamask/config-polygon-on-metamask/ (switch to the Mumbai-Testnet Tab)
5. Rename .env.dist to .env and paste your Metamask private key into PRIVATE_KEY
6. Upload the contract to the Polygon Mumbai Testnet, make sure you have enough MATIC in Metamask (you can get test MATIC from here https://faucet.polygon.technology/)

```
npm run deploy:testnet
```

7. Paste the contract address, you get on the command line, into src/environments/environment.ts

```typescript
export const environment = {
  // ...
  contractAddress: '0x882537CB9A3758fFa2cFd501343b63802798C15c',
  // ...
};
```

8. Run angular application and test the app under http://localhost:4200

```
ng serve
```

## The dApp has three pages

### The Homepage

A list of all uploaded images.

### The authors page

Only images are shown on this page that are uploaded by the selected account in Metamask.

### The upload form

Here anybody who is connected via Metamask can upload an image with title and description. The image and the image metadata get uploaded to IPFS.

## Hardhat config

The default config hardhat.config.js is configured for the Polygon Network.

