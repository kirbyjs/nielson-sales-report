// Created by kirbyjs on 9/8/18.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TradeEquipmentDetails } from '../../mobx/trade-equipment';
import TextInput from '../common/text-input';
import SelectInput from '../common/select-input';

@observer
export default class TradeEquipmentDetailsView extends Component {
    render() {
        const { equipmentDetails } = this.props;

        return (
            <div className="trade-equipment equipment">
                {!this.props.hideRemoveIcon &&
                    <FontAwesomeIcon
                        icon="times-circle"
                        onClick={this.props.removeEquipment}
                    />
                }
                <div className="main-details flexed-inputs-container">
                    <TextInput
                        inputId={`make-${equipmentDetails.id}`}
                        label="Make"
                        onChange={equipmentDetails.setMake}
                        value={equipmentDetails.make}
                    />
                    <TextInput
                        inputId={`model-${equipmentDetails.id}`}
                        label="Model"
                        onChange={equipmentDetails.setModel}
                        value={equipmentDetails.model}
                    />
                    <TextInput
                        inputId={`serial-number-${equipmentDetails.id}`}
                        label="Serial #"
                        onChange={equipmentDetails.setSerialNumber}
                        value={equipmentDetails.serialNumber}
                    />
                    <TextInput
                        inputId={`stock-number-${equipmentDetails.id}`}
                        label="Stock #"
                        onChange={equipmentDetails.setStockNumber}
                        value={equipmentDetails.stockNumber}
                    />
                    <TextInput
                        inputId={`year-${equipmentDetails.id}`}
                        label="Year"
                        onChange={equipmentDetails.setYear}
                        value={equipmentDetails.year}
                    />
                    <TextInput
                        inputId={`hours-${equipmentDetails.id}`}
                        label="Hours"
                        onChange={equipmentDetails.setHours}
                        value={equipmentDetails.hours}
                    />
                    <TextInput
                        inputId={`pick-up-date-${equipmentDetails.id}`}
                        label="Pick up date"
                        onChange={equipmentDetails.setPickUpDate}
                        value={equipmentDetails.pickUpDate}
                    />
                    <SelectInput
                        inputId={`category-${equipmentDetails.id}`}
                        label="Category"
                        onChange={equipmentDetails.setSelectedCategory}
                        selectedValue={equipmentDetails.selectedCategory}
                    >
                        <option value="AMS">AMS</option>
                        <option value="ATT">ATT</option>
                        <option value="ATV">ATV</option>
                        <option value="AUG">AUG</option>
                        <option value="CHD">CHD</option>
                        <option value="COM">COM</option>
                        <option value="CUT">CUT</option>
                        <option value="DIS">DIS</option>
                        <option value="FCL">FCL</option>
                        <option value="HAY">HAY</option>
                        <option value="L&G">L&G</option>
                        <option value="LDR">LDR</option>
                        <option value="PLA">PLA</option>
                        <option value="PLT">PLT</option>
                        <option value="RIP">RIP</option>
                        <option value="SKI">SKI</option>
                        <option value="SNO">SNO</option>
                        <option value="SPA">SPA</option>
                        <option value="TRA">TRA</option>
                        <option value="TRL">TRL</option>
                        <option value="VAC">VAC</option>
                        <option value="WGN">WGN</option>
                    </SelectInput>
                </div>
                <div className="trade-amount-details flexed-inputs-container">
                    <TextInput
                        inputId={`sell-price-${equipmentDetails.id}`}
                        label="Sell Price"
                        onChange={equipmentDetails.setSellPrice}
                        value={equipmentDetails.sellPrice}
                    />
                    <TextInput
                        inputId={`list-price-${equipmentDetails.id}`}
                        label="List Price"
                        onChange={equipmentDetails.setListPrice}
                        value={equipmentDetails.listPrice}
                    />
                    <TextInput
                        inputId={`sold-equip-stock-number-${equipmentDetails.id}`}
                        label="Other Expense"
                        onChange={equipmentDetails.setOtherExpense}
                        value={equipmentDetails.otherExpense}
                    />
                    <TextInput
                        inputId={`recon-estimate-${equipmentDetails.id}`}
                        label="Recon. Estimate"
                        onChange={equipmentDetails.setReconEstimate}
                        value={equipmentDetails.reconEstimate}
                    />
                    <TextInput
                        className="important-amount"
                        inputId={`sold-equip-bonus-${equipmentDetails.id}`}
                        label="Trade Allow."
                        onChange={equipmentDetails.setTradeAllow}
                        value={equipmentDetails.tradeAllow}
                    />
                </div>
                <div className="on-lot-condition">
                    <input
                        type="checkbox"
                        name={`on-lot-condition-${equipmentDetails.id}`}
                        id={`on-lot-condition-${equipmentDetails.id}`}
                        onChange={equipmentDetails.toggleOnLotOrWithinTime}
                        checked={equipmentDetails.onLotOrWithinTime}
                    />
                    <label htmlFor={`on-lot-condition-${equipmentDetails.id}`}>On Lot Already or within 10 days</label>
                </div>
                <div className="description-container">
                    <label htmlFor={`description-${equipmentDetails.id}`}>Description</label>
                    <textarea
                        id={`description-${equipmentDetails.id}`}
                        name={`description-${equipmentDetails.id}`}
                        rows={5}
                        onChange={equipmentDetails.setDescription}
                        value={equipmentDetails.description}
                    />
                </div>
            </div>
        );
    }
}

TradeEquipmentDetailsView.propTypes = {
    equipmentDetails: PropTypes.instanceOf(TradeEquipmentDetails),
    hideRemoveIcon: PropTypes.bool,
    removeEquipment: PropTypes.func
};
