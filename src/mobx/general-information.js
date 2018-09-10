// Created by kirbyjs on 9/6/18.

import { action, observable } from 'mobx';
import { SHORT_MONTHS } from '../constants/months';

const today = new Date();
const shortYear = today.getFullYear().toString().substring(2);
const defaultDate = `${shortYear}-${SHORT_MONTHS[today.getMonth()]}-${today.getDate()}`;

export default class GeneralInformation {
    @observable customerName = '';
    @observable customerId = '';
    @observable dateSold = defaultDate;
    @observable location = '';
    @observable salesPerson = '';
    @observable PONumber = '';

    setStatePropFromEvent(stateKey, e) {
        this[stateKey] = e.target.value;
    }

    @action setCustomerName = e => this.setStatePropFromEvent('customerName', e);
    @action setCustomerId = e => this.setStatePropFromEvent('customerId', e);
    @action setDateSold = e => this.setStatePropFromEvent('dateSold', e);
    @action setLocation = e => this.setStatePropFromEvent('location', e);
    @action setSalesPerson = e => this.setStatePropFromEvent('salesPerson', e);
    @action setPONumber = e => this.setStatePropFromEvent('PONumber', e);
}
