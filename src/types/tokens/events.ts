import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v952 from '../v952'
import * as v956 from '../v956'
import * as v962 from '../v962'
import * as v980 from '../v980'
import * as v990 from '../v990'

export const transfer =  {
    name: 'Tokens.Transfer',
    /**
     * Transfer succeeded.
     */
    v952: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v952.CurrencyId,
            from: v952.AccountId32,
            to: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v956: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v956.CurrencyId,
            from: v956.AccountId32,
            to: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v962: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v962.CurrencyId,
            from: v962.AccountId32,
            to: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v980: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v980.CurrencyId,
            from: v980.AccountId32,
            to: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Transfer succeeded.
     */
    v990: new EventType(
        'Tokens.Transfer',
        sts.struct({
            currencyId: v990.CurrencyId,
            from: v990.AccountId32,
            to: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Tokens.BalanceSet',
    /**
     * A balance was set by root.
     */
    v952: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v956: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v962: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v980: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v990: new EventType(
        'Tokens.BalanceSet',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
}

export const withdrawn =  {
    name: 'Tokens.Withdrawn',
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v952: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v956: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v962: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v980: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    v990: new EventType(
        'Tokens.Withdrawn',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const deposited =  {
    name: 'Tokens.Deposited',
    /**
     * Deposited some balance into an account
     */
    v952: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v952.CurrencyId,
            who: v952.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v956: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v956.CurrencyId,
            who: v956.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v962: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v962.CurrencyId,
            who: v962.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v980: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v980.CurrencyId,
            who: v980.AccountId32,
            amount: sts.bigint(),
        })
    ),
    /**
     * Deposited some balance into an account
     */
    v990: new EventType(
        'Tokens.Deposited',
        sts.struct({
            currencyId: v990.CurrencyId,
            who: v990.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
