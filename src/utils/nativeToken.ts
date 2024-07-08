import axios from "axios"
import dayjs from 'dayjs'
import { SUBSCAN_API_KEY, SUBSCAN_ENDPOINT } from "../config"
import { EventContext } from "../processor";
import { oracle } from "../types/storage";

const FORMAT = "YYYY-MM-DD"

const CACHE_TIME = 3600_000; // ms

const bundleCachePrice = {
  timestamp: 0,
  price: 0,
}

export async function queryBundleBySubScan(timestamp: number) {
  if ((timestamp - bundleCachePrice.timestamp) < CACHE_TIME) {
    return bundleCachePrice.price
  }

  const start = dayjs(timestamp).format(FORMAT)
  const end = dayjs(timestamp).add(1, 'day').format(FORMAT)
  // const hour = Number(dayjs(timestamp).format('HH'))

  const priceData = await axios.post(
    `${SUBSCAN_ENDPOINT}/api/scan/price/history`,
    {
      start,
      end,
      format: "hour",
    },
    { headers: { 'X-API-Key': SUBSCAN_API_KEY } },
  )
  const prices = priceData?.data?.data?.list || [];

  const currentTimestampPrice = prices.reduce((pre: any, cur: any) => {
    if ((Number(cur.feed_at) * 1000) <= timestamp) return cur
    return pre
  }, prices[0])

  if (currentTimestampPrice?.price) {
    bundleCachePrice.timestamp = timestamp
    bundleCachePrice.price = currentTimestampPrice.price
  }

  return bundleCachePrice.price
}

export async function getBundlePriceFromStorage(ctx: EventContext) {
  const oracleStorage = oracle.values.v990
  if (!oracleStorage.is(ctx.block)) return undefined
  const price = await oracleStorage.get(ctx.block, { __kind: 'Native', value: { __kind: 'BNC' } })
  if (!price) return undefined
  return Number(price.value / BigInt(1e18))
}
