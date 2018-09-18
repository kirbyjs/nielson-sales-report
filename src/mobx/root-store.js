// Created by kirbyjs on 9/7/18.

import axios from 'axios';
import GeneralInfo from './general-information';
import { SoldEquipmentList } from './sold-equipment';
import { TradeEquipmentList } from './trade-equipment';
import PaymentInformation from './payment-information';
import { TradePayoffList } from './trade-payoffs';

export default class RootStore {
    generalInfoStore = new GeneralInfo();
    soldEquipmentListStore = new SoldEquipmentList();
    tradeEquipmentListStore = new TradeEquipmentList();
    paymentInfoStore = new PaymentInformation();
    tradePayoffListStore = new TradePayoffList();

    submitForm = () => {
        axios.post('/sales-report', {
            generalInfo: this.generalInfoStore,
            soldEquipmentList: this.soldEquipmentListStore,
            tradeEquipmentList: this.tradeEquipmentListStore,
            paymentInfoStore: this.paymentInfoStore,
            tradePayoffList: this.tradePayoffListStore
        });
    };
}
