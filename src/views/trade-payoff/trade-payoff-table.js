// Created by kirbyjs on 9/9/18.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import TradePayoffRow from './trade-payoff-row';
import { TradePayoffList } from '../../mobx/trade-payoffs';

@observer
export default class TradePayoffTable extends Component {
    render() {
        return (
            <div className="trade-payoff-table">
                <div className="table-header">
                    <div>Trade In Description</div>
                    <div>Payoff Amount</div>
                    <div>Finance Company</div>
                    <div />
                </div>
                <div className="table-body">
                    {this.props.tradePayoffList.tradePayoffs.map((tradePayoff, index) => (
                        <TradePayoffRow
                            key={tradePayoff.id}
                            tradePayoff={tradePayoff}
                            index={index}
                            addTradePayoff={this.props.tradePayoffList.addTradePayoff}
                            removeTradePayoffOnClickWrapper={this.props.tradePayoffList.removeTradePayoffOnClickWrapper}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

TradePayoffTable.propTypes = {
    tradePayoffList: PropTypes.instanceOf(TradePayoffList)
};
