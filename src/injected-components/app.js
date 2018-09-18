// Created by kirbyjs on 9/9/18.

import { inject } from 'mobx-react';
import App from '../app';

function mapStoresToProps(stores) {
    const { rootStore } = stores;

    return {
        generalInfo: rootStore.generalInfoStore,
        soldEquipmentList: rootStore.soldEquipmentListStore,
        tradeEquipmentList: rootStore.tradeEquipmentListStore,
        tradePayoffList: rootStore.tradePayoffListStore,
        paymentInfo: rootStore.paymentInfoStore,
        submitForm: rootStore.submitForm
    };
}

export default inject(mapStoresToProps)(App);
