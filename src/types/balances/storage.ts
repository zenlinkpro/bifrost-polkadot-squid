import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    v932: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceV932,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceV932  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
