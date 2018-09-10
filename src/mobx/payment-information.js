// Created by kirbyjs on 9/9/18.
import { action, observable } from 'mobx';

export default class PaymentInformation {
    @observable hasReceivedPayment = undefined;
    @observable paymentType = '';
    @observable otherPaymentTypeDescription = '';
    @observable areThereAnyTradePayoffs = undefined;
    @observable totalSaleAmount = '';
    @observable totalTradeAllow = '';
    @observable tax = '';
    @observable totalTradeDifference = '';

    setStatePropFromEvent(stateKey, e) {
        this[stateKey] = e.target.value;
    }

    @action setPaymentType = e => this.setStatePropFromEvent('paymentType', e);
    @action setOtherPaymentTypeDescription = e => this.setStatePropFromEvent('otherPaymentTypeDescription', e);
    @action setTotalSaleAmount = e => this.setStatePropFromEvent('totalSaleAmount', e);
    @action setTotalTradeAllow = e => this.setStatePropFromEvent('totalTradeAllow', e);
    @action setTax = e => this.setStatePropFromEvent('tax', e);
    @action setTotalTradeDifference = e => this.setStatePropFromEvent('totalTradeDifference', e);

    @action setHasReceivedPaymentToTrue = () => {
        this.hasReceivedPayment = true;
    };
    @action setHasReceivedPaymentToFalse = () => {
        this.hasReceivedPayment = false;
    };

    @action showTradePayoffSection = () => {
        this.areThereAnyTradePayoffs = true;
    };
    @action hideTradePayoffSection = () => {
        this.areThereAnyTradePayoffs = false;
    };
}
