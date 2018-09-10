// Created by kirbyjs on 9/9/18.

import { action, observable } from 'mobx';
import { v4 } from 'uuid';

export class TradePayoff {
    id = v4();
    @observable selectedTradeInEquipment = undefined;
    @observable payoffAmount = '';
    @observable financeCompany = '';

    setStatePropFromEvent(stateKey, e) {
        this[stateKey] = e.target.value;
    }

    @action setSelectedTradeInEquipment = e => this.setStatePropFromEvent('selectedTradeInEquipment', e);
    @action setPayoffAmount = e => this.setStatePropFromEvent('payoffAmount', e);
    @action setFinanceCompany = e => this.setStatePropFromEvent('financeCompany', e);
}

export class TradePayoffList {
    @observable tradePayoffs = [new TradePayoff()];

    @action addTradePayoff = () => {
        this.tradePayoffs.push(new TradePayoff());
    };

    @action removeTradePayoff = (index) => {
        if (this.tradePayoffs.length > 1) {
            this.tradePayoffs.splice(index, 1);
        }
    };
    removeTradePayoffOnClickWrapper = index => () => this.removeTradePayoff(index);
}
