// Created by kirbyjs on 9/7/18.

import { action, observable, computed } from 'mobx';
import { v4 } from 'uuid';

export class TradeEquipmentDetails {
    id = v4();
    @observable make = '';
    @observable model = '';
    @observable year = '';
    @observable hours = '';
    @observable stockNumber = '';
    @observable serialNumber = '';
    @observable pickUpDate = '';
    @observable description = '';
    @observable selectedCategory = 'HAY';
    @observable onLotOrWithinTime = false;
    @observable tradeAllow = '';
    @observable reconEstimate = '';
    @observable otherExpense = '';
    @observable sellPrice = '';
    @observable listPrice = '';

    setStatePropFromEvent(stateKey, e) {
        this[stateKey] = e.target.value;
    }

    @action setMake = e => this.setStatePropFromEvent('make', e);
    @action setModel = e => this.setStatePropFromEvent('model', e);
    @action setYear = e => this.setStatePropFromEvent('year', e);
    @action setHours = e => this.setStatePropFromEvent('hours', e);
    @action setStockNumber = e => this.setStatePropFromEvent('stockNumber', e);
    @action setSerialNumber = e => this.setStatePropFromEvent('serialNumber', e);
    @action setPickUpDate = e => this.setStatePropFromEvent('pickUpDate', e);
    @action setDescription = e => this.setStatePropFromEvent('description', e);
    @action setSelectedCategory = e => this.setStatePropFromEvent('selectedCategory', e);
    @action setTradeAllow = e => this.setStatePropFromEvent('tradeAllow', e);
    @action setReconEstimate = e => this.setStatePropFromEvent('reconEstimate', e);
    @action setOtherExpense = e => this.setStatePropFromEvent('otherExpense', e);
    @action setSellPrice = e => this.setStatePropFromEvent('sellPrice', e);
    @action setListPrice = e => this.setStatePropFromEvent('listPrice', e);
    @action toggleOnLotOrWithinTime = () => {
        this.onLotOrWithinTime = !this.onLotOrWithinTime;
    };
}

export class TradeEquipmentList {
    @observable equipment = [new TradeEquipmentDetails()];

    @action addEquipment = () => {
        this.equipment.push(new TradeEquipmentDetails());
    };

    @action removeEquipment = (index) => {
        if (this.equipment.length > 1) {
            this.equipment.splice(index, 1);
        }
    };
    removeEquipmentOnClickWrapper = index => () => this.removeEquipment(index);

    @computed get equipmentDisplayNames() {
        return this.equipment.reduce((displayNames, item) => {
            const dashWithYearString = (item.year) ? ` - ${item.year}` : '';
            let displayName;

            if (item.make && item.model) {
                displayName = `${item.make} - ${item.model}${dashWithYearString}`;
            } else if (item.make) {
                displayName = `${item.make}${dashWithYearString}`;
            } else if (item.model) {
                displayName = `${item.model}${dashWithYearString}`;
            }

            if (!displayName) {
                return displayNames;
            }

            displayNames.push({
                id: item.id,
                displayName
            });

            return displayNames;
        }, []);
    }
}
