import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const now =  {
    /**
     *  Current time for the current block.
     */
    v932: new StorageType('Timestamp.Now', 'Default', [], sts.bigint()) as NowV932,
}

/**
 *  Current time for the current block.
 */
export interface NowV932  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}
