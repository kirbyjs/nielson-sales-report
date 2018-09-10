// Created by kirbyjs on 9/9/18.

import { inject } from 'mobx-react';
import App from '../app';

function mapStoresToProps(stores) {
    return {
        generalInfo: stores.generalInfoStore,
        soldEquipmentList: stores.soldEquipmentListStore,
        tradeEquipmentList: stores.tradeEquipmentListStore,
        tradePayoffList: stores.tradePayoffListStore,
        paymentInfo: stores.paymentInfoStore
    };
}

export default inject(mapStoresToProps)(App);
