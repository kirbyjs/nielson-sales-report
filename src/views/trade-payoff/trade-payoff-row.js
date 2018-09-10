// Created by kirbyjs on 9/9/18.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../common/text-input';
import SelectInput from '../common/select-input';
import { TradePayoff } from '../../mobx/trade-payoffs';

@inject('tradeEquipmentListStore')
@observer
export default class TradePayoffRow extends Component {
    render() {
        const { tradePayoff } = this.props;

        return (
            <div className="row">
                <SelectInput
                    inputId={`${tradePayoff.id}-trade-in-equipment`}
                    onChange={tradePayoff.setSelectedTradeInEquipment}
                    value={tradePayoff.selectedTradeInEquipment}
                >
                    <option value="">Select An Option</option>
                    {this.props.tradeEquipmentListStore.equipmentDisplayNames.map(({ displayName, id }) => (
                        <option
                            key={id}
                            value={id}
                        >
                            {displayName}
                        </option>
                    ))}
                </SelectInput>
                <TextInput
                    inputId={`${tradePayoff.id}-payoff-amount`}
                    onChange={tradePayoff.setPayoffAmount}
                    value={tradePayoff.payoffAmount}
                />
                <TextInput
                    inputId={`${tradePayoff.id}-financial-company`}
                    onChange={tradePayoff.setFinanceCompany}
                    value={tradePayoff.financeCompany}
                />
                <div onClick={this.props.removeTradePayoffOnClickWrapper(this.props.index)}>
                    <FontAwesomeIcon icon="times-circle" />
                </div>
            </div>
        );
    }
}

TradePayoffRow.propTypes = {
    index: PropTypes.number,
    removeTradePayoffOnClickWrapper: PropTypes.func,
    tradeEquipmentListStore: PropTypes.shape({
        equipmentDisplayNames: PropTypes.arrayOf(PropTypes.string)
    }),
    tradePayoff: PropTypes.instanceOf(TradePayoff)
};
