// Created by kirbyjs on 9/7/18.
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

@observer
export default class EquipmentList extends Component {
    render() {
        const { EquipmentDetailsComponent } = this.props;

        return (
            <section className="report-section">
                <header>{this.props.headerText}</header>
                <section className={`${this.props.className} equipment-list`}>
                    {
                        this.props.equipmentList.map((equipmentDetails, index) => (
                            <EquipmentDetailsComponent
                                key={equipmentDetails.id}
                                equipmentDetails={equipmentDetails}
                                hideRemoveIcon={this.props.equipmentList.length === 1}
                                removeEquipment={this.props.removeEquipment(index)}
                            />
                        ))
                    }
                </section>
                <button
                    className="add-equipment-button"
                    type="button"
                    onClick={this.props.addEquipment}
                >
                    <FontAwesomeIcon icon="plus" />
                    Add Equipment
                </button>
            </section>
        );
    }
}

EquipmentList.propTypes = {
    EquipmentDetailsComponent: PropTypes.func,
    addEquipment: PropTypes.func,
    className: PropTypes.string,
    equipmentList: PropTypes.arrayOf(PropTypes.object),
    headerText: PropTypes.string,
    removeEquipment: PropTypes.func
};
