// Created by kirbyjs on 9/7/18.

import { action, observable } from 'mobx';
import { v4 } from 'uuid';


export class SoldEquipmentDetails {
    id = v4();
    @observable model = '';
    @observable isNew = undefined;
    @observable stockNumber = '';
    @observable serialNumber = '';
    @observable deliveryDate = '';
    @observable bonus = '';
    @observable equipmentDetailNeedsNotes = undefined;
    @observable notes = '';
    @observable equipmentHasPowerGuard = undefined;
    @observable powerGuardNotes = '';
    @observable saleAmount = '';

    setStatePropFromEvent(stateKey, e) {
        this[stateKey] = e.target.value;
    }

    @action setModel = e => this.setStatePropFromEvent('model', e);
    @action setStockNumber = e => this.setStatePropFromEvent('stockNumber', e);
    @action setSerialNumber = e => this.setStatePropFromEvent('serialNumber', e);
    @action setDeliveryDate = e => this.setStatePropFromEvent('deliveryDate', e);
    @action setBonus = e => this.setStatePropFromEvent('bonus', e);
    @action setNotes = e => this.setStatePropFromEvent('notes', e);
    @action setPowerGuardNotes = e => this.setStatePropFromEvent('powerGuardNotes', e);
    @action setSaleAmount = e => this.setStatePropFromEvent('saleAmount', e);

    @action setConditionToNew = () => {
        this.isNew = true;
    };
    @action setConditionToUsed = () => {
        this.isNew = false;
    };

    @action showNotes = () => {
        this.equipmentDetailNeedsNotes = true;
    };
    @action hideNotes = () => {
        this.equipmentDetailNeedsNotes = false;
    };

    @action showPowerGuardNotes = () => {
        this.equipmentHasPowerGuard = true;
    };
    @action hidePowerGuardNotes = () => {
        this.equipmentHasPowerGuard = false;
    };
}

export class SoldEquipmentList {
    @observable equipment = [new SoldEquipmentDetails()];

    @action addEquipment = () => {
        this.equipment.push(new SoldEquipmentDetails());
    };

    @action removeEquipment = (index) => {
        if (this.equipment.length > 1) {
            this.equipment.splice(index, 1);
        }
    };
    removeEquipmentOnClickWrapper = index => () => this.removeEquipment(index);
}
