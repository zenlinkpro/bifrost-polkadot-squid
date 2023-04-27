import { ProcessorConfig } from "./types";
import {lookupArchive} from "@subsquid/archive-registry"

export const CHAIN_NODE = process.env.BIFROST_POLKADOT_CHAIN_NODE || 'wss://bifrost-polkadot.api.onfinality.io/public-ws'

export const config: ProcessorConfig = {
  chainName: 'bifrost',
  prefix: 'bifrost',
  dataSource: {
    archive: lookupArchive('bifrost-polkadot', {type: "Substrate"} ),
    chain: CHAIN_NODE,
  },
}

export const SUBSCAN_ENDPOINT = 'https://bifrost.api.subscan.io'

export const SUBSCAN_API_KEY = process.env.SUBSCAN_API_KEY

if(!SUBSCAN_API_KEY) {
  throw new Error("No SUBSCAN_API_KEY")
}
