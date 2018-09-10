// Created by kirbyjs on 9/7/18.
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../common/text-input';
import TrueFalseRadioButtons from '../common/true-false-radio-buttons';
import * as soldEquipmentClasses from '../../mobx/sold-equipment';

@observer
export default class SoldEquipmentDetails extends Component {
    render() {
        const { equipmentDetails } = this.props;

        return (
            <div className="sold-equipment equipment">
                {!this.props.hideRemoveIcon &&
                    <FontAwesomeIcon
                        icon="times-circle"
                        onClick={this.props.removeEquipment}
                    />
                }
                <div className="main-details flexed-inputs-container">
                    <TextInput
                        inputId={`model-${equipmentDetails.id}`}
                        label="Model"
                        onChange={equipmentDetails.setModel}
                        value={equipmentDetails.model}
                    />
                    <TextInput
                        inputId={`sold-equip-serial-number-${equipmentDetails.id}`}
                        label="Serial #"
                        onChange={equipmentDetails.setSerialNumber}
                        value={equipmentDetails.serialNumber}
                    />
                    <TextInput
                        inputId={`sold-equip-stock-number-${equipmentDetails.id}`}
                        label="Stock #"
                        onChange={equipmentDetails.setStockNumber}
                        value={equipmentDetails.stockNumber}
                    />
                    <TextInput
                        inputId={`sold-equip-delivery-date-${equipmentDetails.id}`}
                        label="Delivery Date"
                        onChange={equipmentDetails.setDeliveryDate}
                        value={equipmentDetails.deliveryDate}
                    />
                    <TextInput
                        inputId={`sold-equip-bonus-${equipmentDetails.id}`}
                        label="Bonus(s)"
                        onChange={equipmentDetails.setBonus}
                        value={equipmentDetails.bonus}
                    />
                    <TextInput
                        inputId={`sold-equip-sale-amount-${equipmentDetails.id}`}
                        className="important-amount"
                        label="Sale Amount"
                        onChange={equipmentDetails.setSaleAmount}
                        value={equipmentDetails.saleAmount}
                    />
                </div>
                <div className="condition true-false-section">
                    <span>Condition</span>
                    <TrueFalseRadioButtons
                        id={`${equipmentDetails.id}-condition`}
                        isTruthy={equipmentDetails.isNew}
                        onTrueChange={equipmentDetails.setConditionToNew}
                        onFalseChange={equipmentDetails.setConditionToUsed}
                        trueText="New"
                        falseText="Used"
                    />
                </div>
                <div className="power-guard true-false-section">
                    <span>Power Guard</span>
                    <div>
                        <TrueFalseRadioButtons
                            id={`${equipmentDetails.id}-power-guard`}
                            isTruthy={equipmentDetails.equipmentHasPowerGuard}
                            onTrueChange={equipmentDetails.showPowerGuardNotes}
                            onFalseChange={equipmentDetails.hidePowerGuardNotes}
                        />
                        {equipmentDetails.equipmentHasPowerGuard &&
                        <TextInput
                            inputId={`power-guard-notes-${equipmentDetails.id}`}
                            className="power-guard-notes"
                            label="What plan?"
                            onChange={equipmentDetails.setPowerGuardNotes}
                            value={equipmentDetails.powerGuardNotes}
                        />
                        }
                    </div>
                </div>
                <div className="notes true-false-section">
                    <span>Add Notes?</span>
                    <div>
                        <TrueFalseRadioButtons
                            id={`${equipmentDetails.id}-notes`}
                            isTruthy={equipmentDetails.equipmentDetailNeedsNotes}
                            onTrueChange={equipmentDetails.showNotes}
                            onFalseChange={equipmentDetails.hideNotes}
                        />
                        {equipmentDetails.equipmentDetailNeedsNotes &&
                        <textarea
                            name={`${equipmentDetails.id}-notes`}
                            rows={5}
                            onChange={equipmentDetails.setNotes}
                            value={equipmentDetails.notes}
                        />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

SoldEquipmentDetails.propTypes = {
    equipmentDetails: PropTypes.instanceOf(soldEquipmentClasses.SoldEquipmentDetails),
    hideRemoveIcon: PropTypes.bool,
    removeEquipment: PropTypes.func
};
