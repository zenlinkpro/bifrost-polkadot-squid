export const CHAIN_NODE = process.env.BIFROST_POLKADOT_CHAIN_NODE || 'wss://bifrost-polkadot-rpc.dwellir.com'

export const config = {
  chainName: 'bifrost',
  prefix: 'bifrost',
}

export const SUBSCAN_ENDPOINT = 'https://bifrost.api.subscan.io'

export const SUBSCAN_API_KEY = process.env.SUBSCAN_API_KEY

if(!SUBSCAN_API_KEY) {
  throw new Error("No SUBSCAN_API_KEY")
}
