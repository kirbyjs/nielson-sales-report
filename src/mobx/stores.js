// Created by kirbyjs on 9/7/18.

import GeneralInfo from './general-information';
import { SoldEquipmentList } from './sold-equipment';
import { TradeEquipmentList } from './trade-equipment';
import PaymentInformation from './payment-information';
import { TradePayoffList } from './trade-payoffs';

export const generalInfoStore = new GeneralInfo();
export const soldEquipmentListStore = new SoldEquipmentList();
export const tradeEquipmentListStore = new TradeEquipmentList();
export const paymentInfoStore = new PaymentInformation();
export const tradePayoffListStore = new TradePayoffList();
