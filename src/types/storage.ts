import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v932 from './v932'
import * as v952 from './v952'
import * as v954 from './v954'
import * as v956 from './v956'
import * as v962 from './v962'
import * as v968 from './v968'
import * as v978 from './v978'
import * as v980 from './v980'
import * as v990 from './v990'

export class AssetRegistryCurrencyMetadatasStorage extends StorageBase {
    protected getPrefix() {
        return 'AssetRegistry'
    }

    protected getName() {
        return 'CurrencyMetadatas'
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get isV956(): boolean {
        return this.getTypeHash() === 'e08bc4f3aa66be2b3c650bc88441394e425e6447384c7f6022be4cc6f0185f8c'
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get asV956(): AssetRegistryCurrencyMetadatasStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get isV962(): boolean {
        return this.getTypeHash() === '9119afad27c100216eed976bb02714bc032591d19a759cdbc209d5dc868aa7b2'
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get asV962(): AssetRegistryCurrencyMetadatasStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get isV980(): boolean {
        return this.getTypeHash() === 'e04ecce36a450e213fd34a4e8336f947bbb3895e5fd6629804abc4b70f034297'
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get asV980(): AssetRegistryCurrencyMetadatasStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get isV990(): boolean {
        return this.getTypeHash() === 'a9434230f4211abf71a876e5ec7d8940ad23245c37ffbfdf1cc014ae68caa915'
    }

    /**
     *  The storages for AssetMetadata.
     * 
     *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
     */
    get asV990(): AssetRegistryCurrencyMetadatasStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  The storages for AssetMetadata.
 * 
 *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
 */
export interface AssetRegistryCurrencyMetadatasStorageV956 {
    get(key: v956.CurrencyId): Promise<(v956.AssetMetadata | undefined)>
    getAll(): Promise<v956.AssetMetadata[]>
    getMany(keys: v956.CurrencyId[]): Promise<(v956.AssetMetadata | undefined)[]>
    getKeys(): Promise<v956.CurrencyId[]>
    getKeys(key: v956.CurrencyId): Promise<v956.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v956.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v956.CurrencyId): AsyncIterable<v956.CurrencyId[]>
    getPairs(): Promise<[k: v956.CurrencyId, v: v956.AssetMetadata][]>
    getPairs(key: v956.CurrencyId): Promise<[k: v956.CurrencyId, v: v956.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v956.CurrencyId, v: v956.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: v956.CurrencyId): AsyncIterable<[k: v956.CurrencyId, v: v956.AssetMetadata][]>
}

/**
 *  The storages for AssetMetadata.
 * 
 *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
 */
export interface AssetRegistryCurrencyMetadatasStorageV962 {
    get(key: v962.CurrencyId): Promise<(v962.AssetMetadata | undefined)>
    getAll(): Promise<v962.AssetMetadata[]>
    getMany(keys: v962.CurrencyId[]): Promise<(v962.AssetMetadata | undefined)[]>
    getKeys(): Promise<v962.CurrencyId[]>
    getKeys(key: v962.CurrencyId): Promise<v962.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v962.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v962.CurrencyId): AsyncIterable<v962.CurrencyId[]>
    getPairs(): Promise<[k: v962.CurrencyId, v: v962.AssetMetadata][]>
    getPairs(key: v962.CurrencyId): Promise<[k: v962.CurrencyId, v: v962.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v962.CurrencyId, v: v962.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: v962.CurrencyId): AsyncIterable<[k: v962.CurrencyId, v: v962.AssetMetadata][]>
}

/**
 *  The storages for AssetMetadata.
 * 
 *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
 */
export interface AssetRegistryCurrencyMetadatasStorageV980 {
    get(key: v980.CurrencyId): Promise<(v980.AssetMetadata | undefined)>
    getAll(): Promise<v980.AssetMetadata[]>
    getMany(keys: v980.CurrencyId[]): Promise<(v980.AssetMetadata | undefined)[]>
    getKeys(): Promise<v980.CurrencyId[]>
    getKeys(key: v980.CurrencyId): Promise<v980.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v980.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v980.CurrencyId): AsyncIterable<v980.CurrencyId[]>
    getPairs(): Promise<[k: v980.CurrencyId, v: v980.AssetMetadata][]>
    getPairs(key: v980.CurrencyId): Promise<[k: v980.CurrencyId, v: v980.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v980.CurrencyId, v: v980.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: v980.CurrencyId): AsyncIterable<[k: v980.CurrencyId, v: v980.AssetMetadata][]>
}

/**
 *  The storages for AssetMetadata.
 * 
 *  CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
 */
export interface AssetRegistryCurrencyMetadatasStorageV990 {
    get(key: v990.CurrencyId): Promise<(v990.AssetMetadata | undefined)>
    getAll(): Promise<v990.AssetMetadata[]>
    getMany(keys: v990.CurrencyId[]): Promise<(v990.AssetMetadata | undefined)[]>
    getKeys(): Promise<v990.CurrencyId[]>
    getKeys(key: v990.CurrencyId): Promise<v990.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v990.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v990.CurrencyId): AsyncIterable<v990.CurrencyId[]>
    getPairs(): Promise<[k: v990.CurrencyId, v: v990.AssetMetadata][]>
    getPairs(key: v990.CurrencyId): Promise<[k: v990.CurrencyId, v: v990.AssetMetadata][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v990.CurrencyId, v: v990.AssetMetadata][]>
    getPairsPaged(pageSize: number, key: v990.CurrencyId): AsyncIterable<[k: v990.CurrencyId, v: v990.AssetMetadata][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isV932(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asV932(): BalancesTotalIssuanceStorageV932 {
        assert(this.isV932)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageV932 {
    get(): Promise<bigint>
}

export class FarmingGaugeInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'GaugeInfos'
    }

    get isV954(): boolean {
        return this.getTypeHash() === 'bfcac1c2fc5422a1bb4fc529e0239e7a73cb9de789e8d33533d200ba8dec513f'
    }

    get asV954(): FarmingGaugeInfosStorageV954 {
        assert(this.isV954)
        return this as any
    }
}

export interface FarmingGaugeInfosStorageV954 {
    get(key1: number, key2: Uint8Array): Promise<(v954.GaugeInfo | undefined)>
    getAll(): Promise<v954.GaugeInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v954.GaugeInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v954.GaugeInfo][]>
}

export class FarmingGaugePoolInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'GaugePoolInfos'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get isV954(): boolean {
        return this.getTypeHash() === 'f1cdb6ac784a11773490a50ed09e04a6a427db17a246624f62827710c852e0ff'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get asV954(): FarmingGaugePoolInfosStorageV954 {
        assert(this.isV954)
        return this as any
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get isV956(): boolean {
        return this.getTypeHash() === 'ee55c0fe28b43fc3e0a8f41aa531af729a2ddcc62d7103fd1e067dcd36836146'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get asV956(): FarmingGaugePoolInfosStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get isV962(): boolean {
        return this.getTypeHash() === '1819ce67483f76f3eea7d5cdfd6044cdb9418430a90defed263d6f23aeee72e5'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get asV962(): FarmingGaugePoolInfosStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get isV980(): boolean {
        return this.getTypeHash() === 'aa491b3ad0f8f31d5d65999c3edb6aa6009c27a0649ddf24128b40a948a31c30'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get asV980(): FarmingGaugePoolInfosStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get isV990(): boolean {
        return this.getTypeHash() === '695ebd6efb0e92c33eecec56990e10d0a2bbf8b27f3c9f7fb2cdb960ba775098'
    }

    /**
     *  Record gauge farming pool info.
     * 
     *  map PoolId => GaugePoolInfo
     */
    get asV990(): FarmingGaugePoolInfosStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  Record gauge farming pool info.
 * 
 *  map PoolId => GaugePoolInfo
 */
export interface FarmingGaugePoolInfosStorageV954 {
    get(key: number): Promise<(v954.GaugePoolInfo | undefined)>
    getAll(): Promise<v954.GaugePoolInfo[]>
    getMany(keys: number[]): Promise<(v954.GaugePoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v954.GaugePoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v954.GaugePoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v954.GaugePoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v954.GaugePoolInfo][]>
}

/**
 *  Record gauge farming pool info.
 * 
 *  map PoolId => GaugePoolInfo
 */
export interface FarmingGaugePoolInfosStorageV956 {
    get(key: number): Promise<(v956.GaugePoolInfo | undefined)>
    getAll(): Promise<v956.GaugePoolInfo[]>
    getMany(keys: number[]): Promise<(v956.GaugePoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v956.GaugePoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v956.GaugePoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v956.GaugePoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v956.GaugePoolInfo][]>
}

/**
 *  Record gauge farming pool info.
 * 
 *  map PoolId => GaugePoolInfo
 */
export interface FarmingGaugePoolInfosStorageV962 {
    get(key: number): Promise<(v962.GaugePoolInfo | undefined)>
    getAll(): Promise<v962.GaugePoolInfo[]>
    getMany(keys: number[]): Promise<(v962.GaugePoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v962.GaugePoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v962.GaugePoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v962.GaugePoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v962.GaugePoolInfo][]>
}

/**
 *  Record gauge farming pool info.
 * 
 *  map PoolId => GaugePoolInfo
 */
export interface FarmingGaugePoolInfosStorageV980 {
    get(key: number): Promise<(v980.GaugePoolInfo | undefined)>
    getAll(): Promise<v980.GaugePoolInfo[]>
    getMany(keys: number[]): Promise<(v980.GaugePoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v980.GaugePoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v980.GaugePoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v980.GaugePoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v980.GaugePoolInfo][]>
}

/**
 *  Record gauge farming pool info.
 * 
 *  map PoolId => GaugePoolInfo
 */
export interface FarmingGaugePoolInfosStorageV990 {
    get(key: number): Promise<(v990.GaugePoolInfo | undefined)>
    getAll(): Promise<v990.GaugePoolInfo[]>
    getMany(keys: number[]): Promise<(v990.GaugePoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v990.GaugePoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v990.GaugePoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v990.GaugePoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v990.GaugePoolInfo][]>
}

export class FarmingPoolInfosStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'PoolInfos'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV954(): boolean {
        return this.getTypeHash() === '834d2e44981e9f68eae39a166281a398fa964e99472b23a8b2702818b3ea3c51'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV954(): FarmingPoolInfosStorageV954 {
        assert(this.isV954)
        return this as any
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV956(): boolean {
        return this.getTypeHash() === 'e7d117987f08551112c90989e0a64aa516f66a9069e0efa0a69aed831e83e3b2'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV956(): FarmingPoolInfosStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV962(): boolean {
        return this.getTypeHash() === '097a8858df9534e9bdb57fc698960b51fbb8dab6c18e073aec315f3eab6450eb'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV962(): FarmingPoolInfosStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV968(): boolean {
        return this.getTypeHash() === 'a137fc4fd5a2cd937b4616bd7396848c001dafdf98cd770cf89192fe2efbd1c8'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV968(): FarmingPoolInfosStorageV968 {
        assert(this.isV968)
        return this as any
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV980(): boolean {
        return this.getTypeHash() === '3ef8d6ace2c24440d7709e967fb2d39876383b61d81e588e95bcba2bd51185ad'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV980(): FarmingPoolInfosStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get isV990(): boolean {
        return this.getTypeHash() === '5376091b7b73a355fda2b818b980e5527c2b6ea387d05ad709fca73eb239530e'
    }

    /**
     *  Record reward pool info.
     * 
     *  map PoolId => PoolInfo
     */
    get asV990(): FarmingPoolInfosStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV954 {
    get(key: number): Promise<(v954.PoolInfo | undefined)>
    getAll(): Promise<v954.PoolInfo[]>
    getMany(keys: number[]): Promise<(v954.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v954.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v954.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v954.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v954.PoolInfo][]>
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV956 {
    get(key: number): Promise<(v956.PoolInfo | undefined)>
    getAll(): Promise<v956.PoolInfo[]>
    getMany(keys: number[]): Promise<(v956.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v956.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v956.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v956.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v956.PoolInfo][]>
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV962 {
    get(key: number): Promise<(v962.PoolInfo | undefined)>
    getAll(): Promise<v962.PoolInfo[]>
    getMany(keys: number[]): Promise<(v962.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v962.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v962.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v962.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v962.PoolInfo][]>
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV968 {
    get(key: number): Promise<(v968.PoolInfo | undefined)>
    getAll(): Promise<v968.PoolInfo[]>
    getMany(keys: number[]): Promise<(v968.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v968.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v968.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v968.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v968.PoolInfo][]>
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV980 {
    get(key: number): Promise<(v980.PoolInfo | undefined)>
    getAll(): Promise<v980.PoolInfo[]>
    getMany(keys: number[]): Promise<(v980.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v980.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v980.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v980.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v980.PoolInfo][]>
}

/**
 *  Record reward pool info.
 * 
 *  map PoolId => PoolInfo
 */
export interface FarmingPoolInfosStorageV990 {
    get(key: number): Promise<(v990.PoolInfo | undefined)>
    getAll(): Promise<v990.PoolInfo[]>
    getMany(keys: number[]): Promise<(v990.PoolInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v990.PoolInfo][]>
    getPairs(key: number): Promise<[k: number, v: v990.PoolInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v990.PoolInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v990.PoolInfo][]>
}

export class FarmingSharesAndWithdrawnRewardsStorage extends StorageBase {
    protected getPrefix() {
        return 'Farming'
    }

    protected getName() {
        return 'SharesAndWithdrawnRewards'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get isV954(): boolean {
        return this.getTypeHash() === 'e6b679f38a737b0005b846ff0de5df64b60dfbabf651193ba3214be782b4db9d'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get asV954(): FarmingSharesAndWithdrawnRewardsStorageV954 {
        assert(this.isV954)
        return this as any
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get isV956(): boolean {
        return this.getTypeHash() === 'f2ed87b7e53db13a0476b8236179a06c056517748d50f5cadf08aac5c3fec735'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get asV956(): FarmingSharesAndWithdrawnRewardsStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get isV962(): boolean {
        return this.getTypeHash() === '1551d3fe381a42a8e29a3c90a6b6e211c534a7f3083a1e9b31b45273d8c21a2f'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get asV962(): FarmingSharesAndWithdrawnRewardsStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get isV980(): boolean {
        return this.getTypeHash() === '290bf29eea749392787bd4d50a3836d7f0b6da4823c97294bae9100e3322e195'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get asV980(): FarmingSharesAndWithdrawnRewardsStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get isV990(): boolean {
        return this.getTypeHash() === '6b98d1b43015156b4532b8347cb0a1e43cf56c5f0132369d896aa4c924b62c99'
    }

    /**
     *  Record share amount, reward currency and withdrawn reward amount for
     *  specific `AccountId` under `PoolId`.
     * 
     *  double_map (PoolId, AccountId) => ShareInfo
     */
    get asV990(): FarmingSharesAndWithdrawnRewardsStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  Record share amount, reward currency and withdrawn reward amount for
 *  specific `AccountId` under `PoolId`.
 * 
 *  double_map (PoolId, AccountId) => ShareInfo
 */
export interface FarmingSharesAndWithdrawnRewardsStorageV954 {
    get(key1: number, key2: Uint8Array): Promise<(v954.ShareInfo | undefined)>
    getAll(): Promise<v954.ShareInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v954.ShareInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v954.ShareInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v954.ShareInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v954.ShareInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v954.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v954.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v954.ShareInfo][]>
}

/**
 *  Record share amount, reward currency and withdrawn reward amount for
 *  specific `AccountId` under `PoolId`.
 * 
 *  double_map (PoolId, AccountId) => ShareInfo
 */
export interface FarmingSharesAndWithdrawnRewardsStorageV956 {
    get(key1: number, key2: Uint8Array): Promise<(v956.ShareInfo | undefined)>
    getAll(): Promise<v956.ShareInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v956.ShareInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v956.ShareInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v956.ShareInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v956.ShareInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v956.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v956.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v956.ShareInfo][]>
}

/**
 *  Record share amount, reward currency and withdrawn reward amount for
 *  specific `AccountId` under `PoolId`.
 * 
 *  double_map (PoolId, AccountId) => ShareInfo
 */
export interface FarmingSharesAndWithdrawnRewardsStorageV962 {
    get(key1: number, key2: Uint8Array): Promise<(v962.ShareInfo | undefined)>
    getAll(): Promise<v962.ShareInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v962.ShareInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v962.ShareInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v962.ShareInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v962.ShareInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v962.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v962.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v962.ShareInfo][]>
}

/**
 *  Record share amount, reward currency and withdrawn reward amount for
 *  specific `AccountId` under `PoolId`.
 * 
 *  double_map (PoolId, AccountId) => ShareInfo
 */
export interface FarmingSharesAndWithdrawnRewardsStorageV980 {
    get(key1: number, key2: Uint8Array): Promise<(v980.ShareInfo | undefined)>
    getAll(): Promise<v980.ShareInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v980.ShareInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v980.ShareInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v980.ShareInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v980.ShareInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v980.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v980.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v980.ShareInfo][]>
}

/**
 *  Record share amount, reward currency and withdrawn reward amount for
 *  specific `AccountId` under `PoolId`.
 * 
 *  double_map (PoolId, AccountId) => ShareInfo
 */
export interface FarmingSharesAndWithdrawnRewardsStorageV990 {
    get(key1: number, key2: Uint8Array): Promise<(v990.ShareInfo | undefined)>
    getAll(): Promise<v990.ShareInfo[]>
    getMany(keys: [number, Uint8Array][]): Promise<(v990.ShareInfo | undefined)[]>
    getKeys(): Promise<[number, Uint8Array][]>
    getKeys(key1: number): Promise<[number, Uint8Array][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array][]>
    getPairs(): Promise<[k: [number, Uint8Array], v: v990.ShareInfo][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array], v: v990.ShareInfo][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array], v: v990.ShareInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array], v: v990.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array], v: v990.ShareInfo][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array], v: v990.ShareInfo][]>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV932(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV932(): SystemAccountStorageV932 {
        assert(this.isV932)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV978(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV978(): SystemAccountStorageV978 {
        assert(this.isV978)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV932 {
    get(key: Uint8Array): Promise<v932.AccountInfo>
    getAll(): Promise<v932.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v932.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v932.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v932.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v932.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v932.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV978 {
    get(key: Uint8Array): Promise<v978.AccountInfo>
    getAll(): Promise<v978.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v978.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v978.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v978.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v978.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v978.AccountInfo][]>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isV932(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asV932(): SystemBlockHashStorageV932 {
        assert(this.isV932)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageV932 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isV932(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asV932(): TimestampNowStorageV932 {
        assert(this.isV932)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageV932 {
    get(): Promise<bigint>
}

export class TokensAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV952(): boolean {
        return this.getTypeHash() === 'a98af2b607a9b66d8ee7e5fcfb0b1d8a6cf02933f75fcafd0752fefaa03e1168'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV952(): TokensAccountsStorageV952 {
        assert(this.isV952)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV956(): boolean {
        return this.getTypeHash() === 'b6a53be77df83383c0a1b8395b54ecfacf478653d11f6ac618bc625a62cf9435'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV956(): TokensAccountsStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV962(): boolean {
        return this.getTypeHash() === '320cf65e8586698cf6c17de6d0fd1a55530700be0e4ec598786cf5644a87f656'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV962(): TokensAccountsStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV980(): boolean {
        return this.getTypeHash() === 'a2145f94caf18a5367b4fab1b3aa95d335409f1a8ef2d718ae8285164b9534af'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV980(): TokensAccountsStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get isV990(): boolean {
        return this.getTypeHash() === '8cc77164ed8e7adcdc1bd4ab182c75d34eb05db6109046216328fd1df73c9c6b'
    }

    /**
     *  The balance of a token type under an account.
     * 
     *  NOTE: If the total is ever zero, decrease account ref account.
     * 
     *  NOTE: This is only used in the case that this module is used to store
     *  balances.
     */
    get asV990(): TokensAccountsStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV952 {
    get(key1: Uint8Array, key2: v952.CurrencyId): Promise<v952.Type_445>
    getAll(): Promise<v952.Type_445[]>
    getMany(keys: [Uint8Array, v952.CurrencyId][]): Promise<v952.Type_445[]>
    getKeys(): Promise<[Uint8Array, v952.CurrencyId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v952.CurrencyId][]>
    getKeys(key1: Uint8Array, key2: v952.CurrencyId): Promise<[Uint8Array, v952.CurrencyId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v952.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v952.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v952.CurrencyId): AsyncIterable<[Uint8Array, v952.CurrencyId][]>
    getPairs(): Promise<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
    getPairs(key1: Uint8Array, key2: v952.CurrencyId): Promise<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v952.CurrencyId): AsyncIterable<[k: [Uint8Array, v952.CurrencyId], v: v952.Type_445][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV956 {
    get(key1: Uint8Array, key2: v956.CurrencyId): Promise<v956.Type_526>
    getAll(): Promise<v956.Type_526[]>
    getMany(keys: [Uint8Array, v956.CurrencyId][]): Promise<v956.Type_526[]>
    getKeys(): Promise<[Uint8Array, v956.CurrencyId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v956.CurrencyId][]>
    getKeys(key1: Uint8Array, key2: v956.CurrencyId): Promise<[Uint8Array, v956.CurrencyId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v956.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v956.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v956.CurrencyId): AsyncIterable<[Uint8Array, v956.CurrencyId][]>
    getPairs(): Promise<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
    getPairs(key1: Uint8Array, key2: v956.CurrencyId): Promise<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v956.CurrencyId): AsyncIterable<[k: [Uint8Array, v956.CurrencyId], v: v956.Type_526][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV962 {
    get(key1: Uint8Array, key2: v962.CurrencyId): Promise<v962.Type_536>
    getAll(): Promise<v962.Type_536[]>
    getMany(keys: [Uint8Array, v962.CurrencyId][]): Promise<v962.Type_536[]>
    getKeys(): Promise<[Uint8Array, v962.CurrencyId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v962.CurrencyId][]>
    getKeys(key1: Uint8Array, key2: v962.CurrencyId): Promise<[Uint8Array, v962.CurrencyId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v962.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v962.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v962.CurrencyId): AsyncIterable<[Uint8Array, v962.CurrencyId][]>
    getPairs(): Promise<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
    getPairs(key1: Uint8Array, key2: v962.CurrencyId): Promise<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v962.CurrencyId): AsyncIterable<[k: [Uint8Array, v962.CurrencyId], v: v962.Type_536][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV980 {
    get(key1: Uint8Array, key2: v980.CurrencyId): Promise<v980.Type_579>
    getAll(): Promise<v980.Type_579[]>
    getMany(keys: [Uint8Array, v980.CurrencyId][]): Promise<v980.Type_579[]>
    getKeys(): Promise<[Uint8Array, v980.CurrencyId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v980.CurrencyId][]>
    getKeys(key1: Uint8Array, key2: v980.CurrencyId): Promise<[Uint8Array, v980.CurrencyId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v980.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v980.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v980.CurrencyId): AsyncIterable<[Uint8Array, v980.CurrencyId][]>
    getPairs(): Promise<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
    getPairs(key1: Uint8Array, key2: v980.CurrencyId): Promise<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v980.CurrencyId): AsyncIterable<[k: [Uint8Array, v980.CurrencyId], v: v980.Type_579][]>
}

/**
 *  The balance of a token type under an account.
 * 
 *  NOTE: If the total is ever zero, decrease account ref account.
 * 
 *  NOTE: This is only used in the case that this module is used to store
 *  balances.
 */
export interface TokensAccountsStorageV990 {
    get(key1: Uint8Array, key2: v990.CurrencyId): Promise<v990.Type_683>
    getAll(): Promise<v990.Type_683[]>
    getMany(keys: [Uint8Array, v990.CurrencyId][]): Promise<v990.Type_683[]>
    getKeys(): Promise<[Uint8Array, v990.CurrencyId][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, v990.CurrencyId][]>
    getKeys(key1: Uint8Array, key2: v990.CurrencyId): Promise<[Uint8Array, v990.CurrencyId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, v990.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, v990.CurrencyId][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: v990.CurrencyId): AsyncIterable<[Uint8Array, v990.CurrencyId][]>
    getPairs(): Promise<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
    getPairs(key1: Uint8Array, key2: v990.CurrencyId): Promise<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: v990.CurrencyId): AsyncIterable<[k: [Uint8Array, v990.CurrencyId], v: v990.Type_683][]>
}

export class TokensTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Tokens'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total issuance of a token type.
     */
    get isV952(): boolean {
        return this.getTypeHash() === '882212a0ba28258088066051bf9e56c0767f43777f841fe4f85a0848b73f1ea4'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV952(): TokensTotalIssuanceStorageV952 {
        assert(this.isV952)
        return this as any
    }

    /**
     *  The total issuance of a token type.
     */
    get isV956(): boolean {
        return this.getTypeHash() === '4c39b9bae716dbe5a3072da27c59dffcdf999bdf64e2e4128f5e6038396d4a03'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV956(): TokensTotalIssuanceStorageV956 {
        assert(this.isV956)
        return this as any
    }

    /**
     *  The total issuance of a token type.
     */
    get isV962(): boolean {
        return this.getTypeHash() === '90285da57e7305354cef41c507a8403919ee1ccfad0a423e082e82bb7abe002a'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV962(): TokensTotalIssuanceStorageV962 {
        assert(this.isV962)
        return this as any
    }

    /**
     *  The total issuance of a token type.
     */
    get isV980(): boolean {
        return this.getTypeHash() === '651b4865da173de0e7943a6939a1e50cf7e8f4a599e36defc0cb877838ea3774'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV980(): TokensTotalIssuanceStorageV980 {
        assert(this.isV980)
        return this as any
    }

    /**
     *  The total issuance of a token type.
     */
    get isV990(): boolean {
        return this.getTypeHash() === '7a0803af8257493c160beec602ace1b30628dddefbe27a810a85069cb5ea809e'
    }

    /**
     *  The total issuance of a token type.
     */
    get asV990(): TokensTotalIssuanceStorageV990 {
        assert(this.isV990)
        return this as any
    }
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV952 {
    get(key: v952.CurrencyId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v952.CurrencyId[]): Promise<bigint[]>
    getKeys(): Promise<v952.CurrencyId[]>
    getKeys(key: v952.CurrencyId): Promise<v952.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v952.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v952.CurrencyId): AsyncIterable<v952.CurrencyId[]>
    getPairs(): Promise<[k: v952.CurrencyId, v: bigint][]>
    getPairs(key: v952.CurrencyId): Promise<[k: v952.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v952.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v952.CurrencyId): AsyncIterable<[k: v952.CurrencyId, v: bigint][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV956 {
    get(key: v956.CurrencyId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v956.CurrencyId[]): Promise<bigint[]>
    getKeys(): Promise<v956.CurrencyId[]>
    getKeys(key: v956.CurrencyId): Promise<v956.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v956.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v956.CurrencyId): AsyncIterable<v956.CurrencyId[]>
    getPairs(): Promise<[k: v956.CurrencyId, v: bigint][]>
    getPairs(key: v956.CurrencyId): Promise<[k: v956.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v956.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v956.CurrencyId): AsyncIterable<[k: v956.CurrencyId, v: bigint][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV962 {
    get(key: v962.CurrencyId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v962.CurrencyId[]): Promise<bigint[]>
    getKeys(): Promise<v962.CurrencyId[]>
    getKeys(key: v962.CurrencyId): Promise<v962.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v962.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v962.CurrencyId): AsyncIterable<v962.CurrencyId[]>
    getPairs(): Promise<[k: v962.CurrencyId, v: bigint][]>
    getPairs(key: v962.CurrencyId): Promise<[k: v962.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v962.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v962.CurrencyId): AsyncIterable<[k: v962.CurrencyId, v: bigint][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV980 {
    get(key: v980.CurrencyId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v980.CurrencyId[]): Promise<bigint[]>
    getKeys(): Promise<v980.CurrencyId[]>
    getKeys(key: v980.CurrencyId): Promise<v980.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v980.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v980.CurrencyId): AsyncIterable<v980.CurrencyId[]>
    getPairs(): Promise<[k: v980.CurrencyId, v: bigint][]>
    getPairs(key: v980.CurrencyId): Promise<[k: v980.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v980.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v980.CurrencyId): AsyncIterable<[k: v980.CurrencyId, v: bigint][]>
}

/**
 *  The total issuance of a token type.
 */
export interface TokensTotalIssuanceStorageV990 {
    get(key: v990.CurrencyId): Promise<bigint>
    getAll(): Promise<bigint[]>
    getMany(keys: v990.CurrencyId[]): Promise<bigint[]>
    getKeys(): Promise<v990.CurrencyId[]>
    getKeys(key: v990.CurrencyId): Promise<v990.CurrencyId[]>
    getKeysPaged(pageSize: number): AsyncIterable<v990.CurrencyId[]>
    getKeysPaged(pageSize: number, key: v990.CurrencyId): AsyncIterable<v990.CurrencyId[]>
    getPairs(): Promise<[k: v990.CurrencyId, v: bigint][]>
    getPairs(key: v990.CurrencyId): Promise<[k: v990.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v990.CurrencyId, v: bigint][]>
    getPairsPaged(pageSize: number, key: v990.CurrencyId): AsyncIterable<[k: v990.CurrencyId, v: bigint][]>
}

export class ZenlinkProtocolLiquidityPairsStorage extends StorageBase {
    protected getPrefix() {
        return 'ZenlinkProtocol'
    }

    protected getName() {
        return 'LiquidityPairs'
    }

    get isV954(): boolean {
        return this.getTypeHash() === '789cf3f60e0a697e380821675a1d5385e419abba09e35755b95a3eb7b5a28f1f'
    }

    get asV954(): ZenlinkProtocolLiquidityPairsStorageV954 {
        assert(this.isV954)
        return this as any
    }
}

export interface ZenlinkProtocolLiquidityPairsStorageV954 {
    get(key: [v954.AssetId, v954.AssetId]): Promise<(v954.AssetId | undefined)>
    getAll(): Promise<(v954.AssetId | undefined)[]>
    getMany(keys: [v954.AssetId, v954.AssetId][]): Promise<(v954.AssetId | undefined)[]>
    getKeys(): Promise<[v954.AssetId, v954.AssetId][]>
    getKeys(key: [v954.AssetId, v954.AssetId]): Promise<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getPairs(): Promise<[k: [v954.AssetId, v954.AssetId], v: (v954.AssetId | undefined)][]>
    getPairs(key: [v954.AssetId, v954.AssetId]): Promise<[k: [v954.AssetId, v954.AssetId], v: (v954.AssetId | undefined)][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: (v954.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: (v954.AssetId | undefined)][]>
}

export class ZenlinkProtocolPairStatusesStorage extends StorageBase {
    protected getPrefix() {
        return 'ZenlinkProtocol'
    }

    protected getName() {
        return 'PairStatuses'
    }

    /**
     *  (AssetId, AssetId) -> PairStatus
     */
    get isV954(): boolean {
        return this.getTypeHash() === 'bad89eddde62d5d40bc938d63d2495e173228abf7011695d72c252612979bde7'
    }

    /**
     *  (AssetId, AssetId) -> PairStatus
     */
    get asV954(): ZenlinkProtocolPairStatusesStorageV954 {
        assert(this.isV954)
        return this as any
    }
}

/**
 *  (AssetId, AssetId) -> PairStatus
 */
export interface ZenlinkProtocolPairStatusesStorageV954 {
    get(key: [v954.AssetId, v954.AssetId]): Promise<v954.PairStatus>
    getAll(): Promise<v954.PairStatus[]>
    getMany(keys: [v954.AssetId, v954.AssetId][]): Promise<v954.PairStatus[]>
    getKeys(): Promise<[v954.AssetId, v954.AssetId][]>
    getKeys(key: [v954.AssetId, v954.AssetId]): Promise<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getKeysPaged(pageSize: number, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[v954.AssetId, v954.AssetId][]>
    getPairs(): Promise<[k: [v954.AssetId, v954.AssetId], v: v954.PairStatus][]>
    getPairs(key: [v954.AssetId, v954.AssetId]): Promise<[k: [v954.AssetId, v954.AssetId], v: v954.PairStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: v954.PairStatus][]>
    getPairsPaged(pageSize: number, key: [v954.AssetId, v954.AssetId]): AsyncIterable<[k: [v954.AssetId, v954.AssetId], v: v954.PairStatus][]>
}
