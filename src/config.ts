import { ProcessorConfig } from "./types";
import {lookupArchive} from "@subsquid/archive-registry"

export const config: ProcessorConfig = {
  chainName: 'bifrost',
  prefix: 'bifrost',
  dataSource: {
    archive: lookupArchive('bifrost-polkadot', {type: "Substrate"} ),
    chain: 'wss://bifrost-polkadot.api.onfinality.io/public-ws',
  },
}
