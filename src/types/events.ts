import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result, Option} from './support'
import * as v952 from './v952'
import * as v954 from './v954'
import * as v956 from './v956'
import * as v962 from './v962'
import * as v980 from './v980'
import * as v990 from './v990'

export class FarmingAllForceGaugeClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.AllForceGaugeClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.AllForceGaugeClaimed') === '5fc91e49a454b9b911770c486bb364158255e35bb8ac14e2cd8df4b39cf2ba51'
    }

    get asV954(): {gid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingAllRetiredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.AllRetired')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.AllRetired') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingChargedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.Charged')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.Charged') === 'c3d1c59b341540c4f9f6d3972ddfac8a4b0aaceb867c161a35299667a60d1f8d'
    }

    get asV954(): {who: Uint8Array, pid: number, rewards: [v954.CurrencyId, bigint][]} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }

    get isV956(): boolean {
        return this._chain.getEventHash('Farming.Charged') === '2fd9b615ba5d74fc1f8c1865e37d483cfbb6359f6f92bfbb88a91567d3a972c7'
    }

    get asV956(): {who: Uint8Array, pid: number, rewards: [v956.CurrencyId, bigint][]} {
        assert(this.isV956)
        return this._chain.decodeEvent(this.event)
    }

    get isV962(): boolean {
        return this._chain.getEventHash('Farming.Charged') === '6894ad45d0ddc47a0c8eb5ba834aaca533d18eddeeb618bf1d7a1748fa821bf7'
    }

    get asV962(): {who: Uint8Array, pid: number, rewards: [v962.CurrencyId, bigint][]} {
        assert(this.isV962)
        return this._chain.decodeEvent(this.event)
    }

    get isV980(): boolean {
        return this._chain.getEventHash('Farming.Charged') === 'f0c78232ca060b9e914d433ceb64785941ac684f94286ac586328ab1565cda40'
    }

    get asV980(): {who: Uint8Array, pid: number, rewards: [v980.CurrencyId, bigint][]} {
        assert(this.isV980)
        return this._chain.decodeEvent(this.event)
    }

    get isV990(): boolean {
        return this._chain.getEventHash('Farming.Charged') === '407d074f695317cd0c7517d007973e6a2e00310529842b84a0baa3896733fead'
    }

    get asV990(): {who: Uint8Array, pid: number, rewards: [v990.CurrencyId, bigint][]} {
        assert(this.isV990)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.Claimed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.Claimed') === '89ce641abe29449db445666fb2eeb9e04162deb011ebf5f31c7d6ccdbc8dbbcb'
    }

    get asV954(): {who: Uint8Array, pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.Deposited') === '7703d993e467f7326c71c5fff1d9d8c87e8dbac70896103e60cbdd95c0d89347'
    }

    get asV954(): {who: Uint8Array, pid: number, addValue: bigint, gaugeInfo: ([bigint, number] | undefined)} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingFarmingPoolClosedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.FarmingPoolClosed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.FarmingPoolClosed') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingFarmingPoolCreatedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.FarmingPoolCreated')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.FarmingPoolCreated') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingFarmingPoolEditedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.FarmingPoolEdited')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.FarmingPoolEdited') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingFarmingPoolKilledEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.FarmingPoolKilled')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.FarmingPoolKilled') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingFarmingPoolResetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.FarmingPoolReset')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.FarmingPoolReset') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingGaugeWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.GaugeWithdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.GaugeWithdrawn') === '658e3741d543918bd767d541bf7175de9da29aee454a31604c16b575802aa21c'
    }

    get asV954(): {who: Uint8Array, gid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingPartiallyForceGaugeClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.PartiallyForceGaugeClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.PartiallyForceGaugeClaimed') === '5fc91e49a454b9b911770c486bb364158255e35bb8ac14e2cd8df4b39cf2ba51'
    }

    get asV954(): {gid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingPartiallyRetiredEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.PartiallyRetired')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.PartiallyRetired') === 'e0d3b1898d0ebeeeab00a238a2b65a78f305e25439ec07795da1c76e12825bcc'
    }

    get asV954(): {pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingRetireLimitSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.RetireLimitSet')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.RetireLimitSet') === 'f707ff742083978d0b1f391a9771c28219f5e35ce5ba83507482cd04e92d916b'
    }

    get asV954(): {limit: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingWithdrawClaimedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.WithdrawClaimed')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.WithdrawClaimed') === '89ce641abe29449db445666fb2eeb9e04162deb011ebf5f31c7d6ccdbc8dbbcb'
    }

    get asV954(): {who: Uint8Array, pid: number} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class FarmingWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Farming.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    get isV954(): boolean {
        return this._chain.getEventHash('Farming.Withdrawn') === 'f5231bf39060f5b29b8d9b30ed6cfd929166055825b5b1b4700b057961cadd54'
    }

    get asV954(): {who: Uint8Array, pid: number, removeValue: (bigint | undefined)} {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensBalanceSetEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.BalanceSet')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * A balance was set by root.
     */
    get isV952(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '3e7bcc7a9a0d905d187902778412f9eb8d6bc40ac232733b224250358aac576f'
    }

    /**
     * A balance was set by root.
     */
    get asV952(): {currencyId: v952.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV952)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV956(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === 'fdff760cb54afcd8db5c92b89fed1fb754f014d385f0e48e57bf6b914f8d03b5'
    }

    /**
     * A balance was set by root.
     */
    get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV956)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV962(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '45992b0db96b3fb8c249d1f8892de429f3924228fad45b8e8c07f0b5c1b355a4'
    }

    /**
     * A balance was set by root.
     */
    get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV962)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV980(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === 'bb7e153ac26e2de091305ca5f657e6df0ac0812286c548a559276e9606093821'
    }

    /**
     * A balance was set by root.
     */
    get asV980(): {currencyId: v980.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV980)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * A balance was set by root.
     */
    get isV990(): boolean {
        return this._chain.getEventHash('Tokens.BalanceSet') === '400ec07395e88ba2698ab37756f2cfe88946bc4fdaec0b7b4bd688f43085943e'
    }

    /**
     * A balance was set by root.
     */
    get asV990(): {currencyId: v990.CurrencyId, who: Uint8Array, free: bigint, reserved: bigint} {
        assert(this.isV990)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensDepositedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Deposited')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Deposited some balance into an account
     */
    get isV952(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
    }

    /**
     * Deposited some balance into an account
     */
    get asV952(): {currencyId: v952.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV952)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited some balance into an account
     */
    get isV956(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
    }

    /**
     * Deposited some balance into an account
     */
    get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV956)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited some balance into an account
     */
    get isV962(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
    }

    /**
     * Deposited some balance into an account
     */
    get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV962)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited some balance into an account
     */
    get isV980(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === 'ff0f887624fd0fec0cb60b2b582f7f82d1437e90adea6e5163514310cd06566b'
    }

    /**
     * Deposited some balance into an account
     */
    get asV980(): {currencyId: v980.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV980)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Deposited some balance into an account
     */
    get isV990(): boolean {
        return this._chain.getEventHash('Tokens.Deposited') === 'a82fdd1f61186cda6f5d5dbcccd9fcbeb9dbe427b892a13bb1c114bde29cb0c9'
    }

    /**
     * Deposited some balance into an account
     */
    get asV990(): {currencyId: v990.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV990)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensTransferEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Transfer')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transfer succeeded.
     */
    get isV952(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'de38bc825d1ed89a7c963df259f29b413310694dc8c343b9729be00f2fed48b1'
    }

    /**
     * Transfer succeeded.
     */
    get asV952(): {currencyId: v952.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV952)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV956(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === '890276ba2e3208c13dbef4b9be1e8043a3b745c98fed1959c65fd239060689ad'
    }

    /**
     * Transfer succeeded.
     */
    get asV956(): {currencyId: v956.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV956)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV962(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === '20b9c69a31621629491840894ffa2a0bc566f091b0445891ffe8ed1dd76816b3'
    }

    /**
     * Transfer succeeded.
     */
    get asV962(): {currencyId: v962.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV962)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV980(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'ca8eca771f3618226cbb4e75374c0482d579646be2ebe4226e750dc3daed2463'
    }

    /**
     * Transfer succeeded.
     */
    get asV980(): {currencyId: v980.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV980)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Transfer succeeded.
     */
    get isV990(): boolean {
        return this._chain.getEventHash('Tokens.Transfer') === 'eb54f4568f527c46e89549aec5cec82ad86a9e3cb43296671be8c3c8e8062f4d'
    }

    /**
     * Transfer succeeded.
     */
    get asV990(): {currencyId: v990.CurrencyId, from: Uint8Array, to: Uint8Array, amount: bigint} {
        assert(this.isV990)
        return this._chain.decodeEvent(this.event)
    }
}

export class TokensWithdrawnEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'Tokens.Withdrawn')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV952(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === 'f625dc5b6e1e80c5341382fb80f3f637c35dc05ce9bbc2332250bf34968e9502'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV952(): {currencyId: v952.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV952)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV956(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '6e5a44d65de498f529521ebd2d4a29809dcb38591c6ceb5ff2cb8c9ad195aaaa'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV956(): {currencyId: v956.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV956)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV962(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === '8d097e22a8a65a807386a44e215b345bde223f175804b191c97bafcf19519fc0'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV962(): {currencyId: v962.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV962)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV980(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === 'ff0f887624fd0fec0cb60b2b582f7f82d1437e90adea6e5163514310cd06566b'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV980(): {currencyId: v980.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV980)
        return this._chain.decodeEvent(this.event)
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get isV990(): boolean {
        return this._chain.getEventHash('Tokens.Withdrawn') === 'a82fdd1f61186cda6f5d5dbcccd9fcbeb9dbe427b892a13bb1c114bde29cb0c9'
    }

    /**
     * Some balances were withdrawn (e.g. pay for transaction fee)
     */
    get asV990(): {currencyId: v990.CurrencyId, who: Uint8Array, amount: bigint} {
        assert(this.isV990)
        return this._chain.decodeEvent(this.event)
    }
}

export class ZenlinkProtocolAssetSwapEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ZenlinkProtocol.AssetSwap')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Transact in trading \[owner, recipient, swap_path, balances\]
     */
    get isV954(): boolean {
        return this._chain.getEventHash('ZenlinkProtocol.AssetSwap') === 'e9cbb9bf25ce7ca78f66cb163c5de7b5b796a1f9f5cf2f1d1955496bd76f264e'
    }

    /**
     * Transact in trading \[owner, recipient, swap_path, balances\]
     */
    get asV954(): [Uint8Array, Uint8Array, v954.AssetId[], bigint[]] {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class ZenlinkProtocolLiquidityAddedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ZenlinkProtocol.LiquidityAdded')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
     * mint_balance_lp\]
     */
    get isV954(): boolean {
        return this._chain.getEventHash('ZenlinkProtocol.LiquidityAdded') === '1bfafadda80f84623e855502fa86cbd5fb805fa26a6254ee45104d1d976c2219'
    }

    /**
     * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
     * mint_balance_lp\]
     */
    get asV954(): [Uint8Array, v954.AssetId, v954.AssetId, bigint, bigint, bigint] {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}

export class ZenlinkProtocolLiquidityRemovedEvent {
    private readonly _chain: Chain
    private readonly event: Event

    constructor(ctx: EventContext)
    constructor(ctx: ChainContext, event: Event)
    constructor(ctx: EventContext, event?: Event) {
        event = event || ctx.event
        assert(event.name === 'ZenlinkProtocol.LiquidityRemoved')
        this._chain = ctx._chain
        this.event = event
    }

    /**
     * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
     * burn_balance_lp\]
     */
    get isV954(): boolean {
        return this._chain.getEventHash('ZenlinkProtocol.LiquidityRemoved') === '9decbbc0fd030ae8322c18bf256e4f3ace487600f6cf3b11b8961ab923a40bf1'
    }

    /**
     * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
     * burn_balance_lp\]
     */
    get asV954(): [Uint8Array, Uint8Array, v954.AssetId, v954.AssetId, bigint, bigint, bigint] {
        assert(this.isV954)
        return this._chain.decodeEvent(this.event)
    }
}
