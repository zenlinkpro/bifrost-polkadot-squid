import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v954 from '../v954'

export const liquidityPairs =  {
    v954: new StorageType('ZenlinkProtocol.LiquidityPairs', 'Default', [sts.tuple(() => [v954.AssetId, v954.AssetId])], sts.option(() => v954.AssetId)) as LiquidityPairsV954,
}

export interface LiquidityPairsV954  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v954.AssetId | undefined)
    get(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<((v954.AssetId | undefined) | undefined)>
    getMany(block: Block, keys: [v954.AssetId, v954.AssetId][]): Promise<((v954.AssetId | undefined) | undefined)[]>
    getKeys(block: Block): Promise<[v954.AssetId, v954.AssetId][]>
    getKeys(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getPairs(block: Block): Promise<[k: [v954.AssetId, v954.AssetId], v: ((v954.AssetId | undefined) | undefined)][]>
    getPairs(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<[k: [v954.AssetId, v954.AssetId], v: ((v954.AssetId | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: ((v954.AssetId | undefined) | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: ((v954.AssetId | undefined) | undefined)][]>
}

export const pairStatuses =  {
    /**
     *  (AssetId, AssetId) -> PairStatus
     */
    v954: new StorageType('ZenlinkProtocol.PairStatuses', 'Default', [sts.tuple(() => [v954.AssetId, v954.AssetId])], v954.PairStatus) as PairStatusesV954,
}

/**
 *  (AssetId, AssetId) -> PairStatus
 */
export interface PairStatusesV954  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v954.PairStatus
    get(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<(v954.PairStatus | undefined)>
    getMany(block: Block, keys: [v954.AssetId, v954.AssetId][]): Promise<(v954.PairStatus | undefined)[]>
    getKeys(block: Block): Promise<[v954.AssetId, v954.AssetId][]>
    getKeys(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, block: Block, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getPairs(block: Block): Promise<[k: [v954.AssetId, v954.AssetId], v: (v954.PairStatus | undefined)][]>
    getPairs(block: Block, key: [v954.AssetId, v954.AssetId]): Promise<[k: [v954.AssetId, v954.AssetId], v: (v954.PairStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: (v954.PairStatus | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: (v954.PairStatus | undefined)][]>
}
