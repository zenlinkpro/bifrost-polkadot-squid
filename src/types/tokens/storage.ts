import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const totalIssuance =  {
    /**
     *  The total issuance of a token type.
     */
    v952: new StorageType('Tokens.TotalIssuance', 'Default', [v952.CurrencyId], sts.bigint()) as TotalIssuanceV952,
    /**
     *  The total issuance of a token type.
     */
    v956: new StorageType('Tokens.TotalIssuance', 'Default', [v956.CurrencyId], sts.bigint()) as TotalIssuanceV956,
    /**
     *  The total issuance of a token type.
     */
    v962: new StorageType('Tokens.TotalIssuance', 'Default', [v962.CurrencyId], sts.bigint()) as TotalIssuanceV962,
    /**
     *  The total issuance of a token type.
     */
    v980: new StorageType('Tokens.TotalIssuance', 'Default', [v980.CurrencyId], sts.bigint()) as TotalIssuanceV980,
    /**
     *  The total issuance of a token type.
     */
    v990: new StorageType('Tokens.TotalIssuance', 'Default', [v990.CurrencyId], sts.bigint()) as TotalIssuanceV990,
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV952  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v952.CurrencyId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v952.CurrencyId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v952.CurrencyId[]>
    getKeys(block: Block, key: v952.CurrencyId): Promise<v952.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v952.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v952.CurrencyId): AsyncIterable<v952.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v952.CurrencyId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v952.CurrencyId): Promise<[k: v952.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v952.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v952.CurrencyId): AsyncIterable<[k: v952.CurrencyId, v: (bigint | undefined)][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV956  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v956.CurrencyId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v956.CurrencyId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v956.CurrencyId[]>
    getKeys(block: Block, key: v956.CurrencyId): Promise<v956.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v956.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v956.CurrencyId): AsyncIterable<v956.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v956.CurrencyId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v956.CurrencyId): Promise<[k: v956.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v956.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v956.CurrencyId): AsyncIterable<[k: v956.CurrencyId, v: (bigint | undefined)][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV962  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v962.CurrencyId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v962.CurrencyId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v962.CurrencyId[]>
    getKeys(block: Block, key: v962.CurrencyId): Promise<v962.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v962.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v962.CurrencyId): AsyncIterable<v962.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v962.CurrencyId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v962.CurrencyId): Promise<[k: v962.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v962.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v962.CurrencyId): AsyncIterable<[k: v962.CurrencyId, v: (bigint | undefined)][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV980  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v980.CurrencyId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v980.CurrencyId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v980.CurrencyId[]>
    getKeys(block: Block, key: v980.CurrencyId): Promise<v980.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v980.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v980.CurrencyId): AsyncIterable<v980.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v980.CurrencyId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v980.CurrencyId): Promise<[k: v980.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v980.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v980.CurrencyId): AsyncIterable<[k: v980.CurrencyId, v: (bigint | undefined)][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TotalIssuanceV990  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block, key: v990.CurrencyId): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v990.CurrencyId[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v990.CurrencyId[]>
    getKeys(block: Block, key: v990.CurrencyId): Promise<v990.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v990.CurrencyId[]>
    getKeysPaged(pageSize: number, block: Block, key: v990.CurrencyId): AsyncIterable<v990.CurrencyId[]>
    getPairs(block: Block): Promise<[k: v990.CurrencyId, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v990.CurrencyId): Promise<[k: v990.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v990.CurrencyId, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v990.CurrencyId): AsyncIterable<[k: v990.CurrencyId, v: (bigint | undefined)][]>
}

export const accounts =  {
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v952: new StorageType('Tokens.Accounts', 'Default', [v952.AccountId32, v952.CurrencyId], v952.Type_445) as AccountsV952,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v956: new StorageType('Tokens.Accounts', 'Default', [v956.AccountId32, v956.CurrencyId], v956.Type_526) as AccountsV956,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v962: new StorageType('Tokens.Accounts', 'Default', [v962.AccountId32, v962.CurrencyId], v962.Type_536) as AccountsV962,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v980: new StorageType('Tokens.Accounts', 'Default', [v980.AccountId32, v980.CurrencyId], v980.Type_579) as AccountsV980,
    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    v990: new StorageType('Tokens.Accounts', 'Default', [v990.AccountId32, v990.CurrencyId], v990.Type_683) as AccountsV990,
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV952  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v952.Type_445
    get(block: Block, key1: v952.AccountId32, key2: v952.CurrencyId): Promise<(v952.Type_445 | undefined)>
    getMany(block: Block, keys: [v952.AccountId32, v952.CurrencyId][]): Promise<(v952.Type_445 | undefined)[]>
    getKeys(block: Block): Promise<[v952.AccountId32, v952.CurrencyId][]>
    getKeys(block: Block, key1: v952.AccountId32): Promise<[v952.AccountId32, v952.CurrencyId][]>
    getKeys(block: Block, key1: v952.AccountId32, key2: v952.CurrencyId): Promise<[v952.AccountId32, v952.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v952.AccountId32, v952.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v952.AccountId32): AsyncIterable<[v952.AccountId32, v952.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v952.AccountId32, key2: v952.CurrencyId): AsyncIterable<[v952.AccountId32, v952.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
    getPairs(block: Block, key1: v952.AccountId32): Promise<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
    getPairs(block: Block, key1: v952.AccountId32, key2: v952.CurrencyId): Promise<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v952.AccountId32): AsyncIterable<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v952.AccountId32, key2: v952.CurrencyId): AsyncIterable<[k: [v952.AccountId32, v952.CurrencyId], v: (v952.Type_445 | undefined)][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV956  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v956.Type_526
    get(block: Block, key1: v956.AccountId32, key2: v956.CurrencyId): Promise<(v956.Type_526 | undefined)>
    getMany(block: Block, keys: [v956.AccountId32, v956.CurrencyId][]): Promise<(v956.Type_526 | undefined)[]>
    getKeys(block: Block): Promise<[v956.AccountId32, v956.CurrencyId][]>
    getKeys(block: Block, key1: v956.AccountId32): Promise<[v956.AccountId32, v956.CurrencyId][]>
    getKeys(block: Block, key1: v956.AccountId32, key2: v956.CurrencyId): Promise<[v956.AccountId32, v956.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v956.AccountId32, v956.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v956.AccountId32): AsyncIterable<[v956.AccountId32, v956.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v956.AccountId32, key2: v956.CurrencyId): AsyncIterable<[v956.AccountId32, v956.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
    getPairs(block: Block, key1: v956.AccountId32): Promise<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
    getPairs(block: Block, key1: v956.AccountId32, key2: v956.CurrencyId): Promise<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v956.AccountId32): AsyncIterable<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v956.AccountId32, key2: v956.CurrencyId): AsyncIterable<[k: [v956.AccountId32, v956.CurrencyId], v: (v956.Type_526 | undefined)][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV962  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v962.Type_536
    get(block: Block, key1: v962.AccountId32, key2: v962.CurrencyId): Promise<(v962.Type_536 | undefined)>
    getMany(block: Block, keys: [v962.AccountId32, v962.CurrencyId][]): Promise<(v962.Type_536 | undefined)[]>
    getKeys(block: Block): Promise<[v962.AccountId32, v962.CurrencyId][]>
    getKeys(block: Block, key1: v962.AccountId32): Promise<[v962.AccountId32, v962.CurrencyId][]>
    getKeys(block: Block, key1: v962.AccountId32, key2: v962.CurrencyId): Promise<[v962.AccountId32, v962.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v962.AccountId32, v962.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v962.AccountId32): AsyncIterable<[v962.AccountId32, v962.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v962.AccountId32, key2: v962.CurrencyId): AsyncIterable<[v962.AccountId32, v962.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
    getPairs(block: Block, key1: v962.AccountId32): Promise<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
    getPairs(block: Block, key1: v962.AccountId32, key2: v962.CurrencyId): Promise<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v962.AccountId32): AsyncIterable<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v962.AccountId32, key2: v962.CurrencyId): AsyncIterable<[k: [v962.AccountId32, v962.CurrencyId], v: (v962.Type_536 | undefined)][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV980  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v980.Type_579
    get(block: Block, key1: v980.AccountId32, key2: v980.CurrencyId): Promise<(v980.Type_579 | undefined)>
    getMany(block: Block, keys: [v980.AccountId32, v980.CurrencyId][]): Promise<(v980.Type_579 | undefined)[]>
    getKeys(block: Block): Promise<[v980.AccountId32, v980.CurrencyId][]>
    getKeys(block: Block, key1: v980.AccountId32): Promise<[v980.AccountId32, v980.CurrencyId][]>
    getKeys(block: Block, key1: v980.AccountId32, key2: v980.CurrencyId): Promise<[v980.AccountId32, v980.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v980.AccountId32, v980.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v980.AccountId32): AsyncIterable<[v980.AccountId32, v980.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v980.AccountId32, key2: v980.CurrencyId): AsyncIterable<[v980.AccountId32, v980.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
    getPairs(block: Block, key1: v980.AccountId32): Promise<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
    getPairs(block: Block, key1: v980.AccountId32, key2: v980.CurrencyId): Promise<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v980.AccountId32): AsyncIterable<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v980.AccountId32, key2: v980.CurrencyId): AsyncIterable<[k: [v980.AccountId32, v980.CurrencyId], v: (v980.Type_579 | undefined)][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface AccountsV990  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v990.Type_683
    get(block: Block, key1: v990.AccountId32, key2: v990.CurrencyId): Promise<(v990.Type_683 | undefined)>
    getMany(block: Block, keys: [v990.AccountId32, v990.CurrencyId][]): Promise<(v990.Type_683 | undefined)[]>
    getKeys(block: Block): Promise<[v990.AccountId32, v990.CurrencyId][]>
    getKeys(block: Block, key1: v990.AccountId32): Promise<[v990.AccountId32, v990.CurrencyId][]>
    getKeys(block: Block, key1: v990.AccountId32, key2: v990.CurrencyId): Promise<[v990.AccountId32, v990.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v990.AccountId32, v990.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v990.AccountId32): AsyncIterable<[v990.AccountId32, v990.CurrencyId][]>
    getKeysPaged(pageSize: number, block: Block, key1: v990.AccountId32, key2: v990.CurrencyId): AsyncIterable<[v990.AccountId32, v990.CurrencyId][]>
    getPairs(block: Block): Promise<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
    getPairs(block: Block, key1: v990.AccountId32): Promise<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
    getPairs(block: Block, key1: v990.AccountId32, key2: v990.CurrencyId): Promise<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v990.AccountId32): AsyncIterable<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v990.AccountId32, key2: v990.CurrencyId): AsyncIterable<[k: [v990.AccountId32, v990.CurrencyId], v: (v990.Type_683 | undefined)][]>
}
