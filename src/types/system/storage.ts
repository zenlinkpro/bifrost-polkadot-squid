import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v932 from '../v932'
import * as v978 from '../v978'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    v932: new StorageType('System.Account', 'Default', [v932.AccountId32], v932.AccountInfo) as AccountV932,
    /**
     *  The full account information for a particular account ID.
     */
    v978: new StorageType('System.Account', 'Default', [v978.AccountId32], v978.AccountInfo) as AccountV978,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV932  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v932.AccountInfo
    get(block: Block, key: v932.AccountId32): Promise<(v932.AccountInfo | undefined)>
    getMany(block: Block, keys: v932.AccountId32[]): Promise<(v932.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v932.AccountId32[]>
    getKeys(block: Block, key: v932.AccountId32): Promise<v932.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v932.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v932.AccountId32): AsyncIterable<v932.AccountId32[]>
    getPairs(block: Block): Promise<[k: v932.AccountId32, v: (v932.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v932.AccountId32): Promise<[k: v932.AccountId32, v: (v932.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v932.AccountId32, v: (v932.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v932.AccountId32): AsyncIterable<[k: v932.AccountId32, v: (v932.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV978  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v978.AccountInfo
    get(block: Block, key: v978.AccountId32): Promise<(v978.AccountInfo | undefined)>
    getMany(block: Block, keys: v978.AccountId32[]): Promise<(v978.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v978.AccountId32[]>
    getKeys(block: Block, key: v978.AccountId32): Promise<v978.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v978.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v978.AccountId32): AsyncIterable<v978.AccountId32[]>
    getPairs(block: Block): Promise<[k: v978.AccountId32, v: (v978.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v978.AccountId32): Promise<[k: v978.AccountId32, v: (v978.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v978.AccountId32, v: (v978.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v978.AccountId32): AsyncIterable<[k: v978.AccountId32, v: (v978.AccountInfo | undefined)][]>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    v932: new StorageType('System.BlockHash', 'Default', [sts.number()], v932.H256) as BlockHashV932,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashV932  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v932.H256
    get(block: Block, key: number): Promise<(v932.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(v932.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (v932.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (v932.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (v932.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (v932.H256 | undefined)][]>
}
