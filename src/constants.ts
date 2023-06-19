import { TokenBase } from "./types";
import { Big as BigDecimal } from 'big.js'
import { AssetId } from "./types/v954";
import { zenlinkAssetIdToCurrencyId } from "./utils/token";

export const CHAIN_ID = 2030

export const TOKEN_METADATA_MAP: { [address: string]: TokenBase } = {
  '2030-0-0': { name: 'Bifrost', symbol: 'BNC', decimals: 12 },
  // '2030-2-770': { name: 'Karura Dollar', symbol: 'aUSD', decimals: 12 },
  '2030-2-519': { name: 'Zenlink Network Token', symbol: 'ZLK', decimals: 18 },
  '2030-2-2048': { name: 'DOT', symbol: 'DOT', decimals: 10 },
  '2030-2-2050': { name: 'USDT', symbol: 'USDT', decimals: 6 },
  '2030-2-2304': { name: 'vDOT', symbol: 'vDOT', decimals: 10 },
  '2030-2-2560': { name: 'vsDOT', symbol: 'vsDOT', decimals: 10 },
}

export const ZLK_ASSET_ID: AssetId = {
  chainId: 2030,
  assetType: 2,
  assetIndex: 519n
}

export const ZLK_CURRENCY_ID = zenlinkAssetIdToCurrencyId(ZLK_ASSET_ID);

export const ZLK_GOV_ACCOUNT = ['cRzg4nyCBKbCZaCYmNQksWGMJuectrHom15ZiuYd7h6NtvW'];

export const ZERO_BI = 0n
export const ONE_BI = 1n
export const ZERO_BD = BigDecimal(0)
export const ONE_BD = BigDecimal(1)
export const BI_18 = 1000000000000000000n
