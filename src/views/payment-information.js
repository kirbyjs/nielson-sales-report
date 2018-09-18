// Created by kirbyjs on 9/6/18.
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaymentInformation from '../mobx/payment-information';
import { TradePayoffList } from '../mobx/trade-payoffs';
import TrueFalseRadioButtons from './common/true-false-radio-buttons';
import RadioInput from './common/radio-input';
import TextInput from './common/text-input';
import TradePayoffTable from './trade-payoff/trade-payoff-table';

@inject(({ rootStore }) => ({ tradeEquipmentListStore: rootStore.tradeEquipmentListStore }))
@observer
export default class PaymentInformationView extends Component {
    render() {
        const { paymentInfo, tradePayoffsList, tradeEquipmentListStore } = this.props;

        return (
            <section className="report-section">
                <header>Payment Information</header>
                <section className="payment-information-section">
                    <div className="payment-received true-false-section">
                        <span>Payment Received</span>
                        <TrueFalseRadioButtons
                            id="payment-received"
                            isTruthy={paymentInfo.hasReceivedPayment}
                            onTrueChange={paymentInfo.setHasReceivedPaymentToTrue}
                            onFalseChange={paymentInfo.setHasReceivedPaymentToFalse}
                        />
                    </div>
                    <div className="payment-type">
                        <span>Payment Type Expected Upon Delivery</span>
                        <div className="radio-inputs">
                            <RadioInput
                                name="payment-type-radio-buttons"
                                checked={paymentInfo.paymentType === 'cash-check'}
                                onChange={paymentInfo.setPaymentType}
                                label="Cash/Check"
                                value="cash-check"
                            />
                            <RadioInput
                                name="payment-type-radio-buttons"
                                checked={paymentInfo.paymentType === 'JDF'}
                                onChange={paymentInfo.setPaymentType}
                                label="JDF"
                                value="JDF"
                            />
                            <RadioInput
                                name="payment-type-radio-buttons"
                                checked={paymentInfo.paymentType === 'ag-direct'}
                                onChange={paymentInfo.setPaymentType}
                                label="Ag Direct"
                                value="ag-direct"
                            />
                            <RadioInput
                                name="payment-type-radio-buttons"
                                checked={paymentInfo.paymentType === 'credit-card'}
                                onChange={paymentInfo.setPaymentType}
                                label="Credit Card"
                                value="credit-card"
                            />
                            <div className="payment-type-other-section">
                                <RadioInput
                                    name="payment-type-radio-buttons"
                                    checked={paymentInfo.paymentType === 'other'}
                                    onChange={paymentInfo.setPaymentType}
                                    label="Other"
                                    value="other"
                                />
                                {paymentInfo.paymentType === 'other' &&
                                <TextInput
                                    className="payment-type-other-description"
                                    inputId="payment-type-other-description"
                                    label="Please List Other Types"
                                    onChange={paymentInfo.setOtherPaymentTypeDescription}
                                    value={paymentInfo.otherPaymentTypeDescription}
                                />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="trade-payoff-section">
                        <div>Do any of the trade units have payoffs? If so, list below:</div>
                        <TradePayoffTable tradePayoffList={tradePayoffsList}/>
                        <button
                            type="button"
                            onClick={tradePayoffsList.addTradePayoff}
                            disabled={tradeEquipmentListStore.equipmentDisplayNames.length <= tradePayoffsList.tradePayoffs.length}
                        >
                            <FontAwesomeIcon icon="plus"/>
                            Add Trade Payoff
                        </button>
                    </div>
                    <div className="totals-section flexed-inputs-container">
                        <TextInput
                            inputId="total-sale-amount"
                            label="Total Sale Amount"
                            onChange={paymentInfo.setTotalSaleAmount}
                            value={paymentInfo.totalSaleAmount}
                        />
                        <TextInput
                            inputId="total-sale-amount"
                            label="Total Trade Allow"
                            onChange={paymentInfo.setTotalTradeAllow}
                            value={paymentInfo.totalTradeAllow}
                        />
                        <TextInput
                            inputId="total-sale-amount"
                            label="Tax (If Any)"
                            onChange={paymentInfo.setTax}
                            value={paymentInfo.tax}
                        />
                        <TextInput
                            className="important-amount"
                            inputId="total-sale-amount"
                            label="Total Trade Difference"
                            onChange={paymentInfo.setTotalTradeDifference}
                            value={paymentInfo.totalTradeDifference}
                        />
                    </div>
                </section>
            </section>
        );
    }
}

PaymentInformationView.propTypes = {
    tradeEquipmentListStore: PropTypes.shape({
        equipmentDisplayNames: PropTypes.arrayOf(PropTypes.object)
    }),
    paymentInfo: PropTypes.instanceOf(PaymentInformation),
    tradePayoffsList: PropTypes.instanceOf(TradePayoffList)
};
