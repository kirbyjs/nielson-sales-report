// Created by kirbyjs on 9/6/18.
/* eslint-disable no-return-assign */

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import GeneralInformation from '../mobx/general-information';
import TextInput from './common/text-input';

@observer
export default class GeneralInformationView extends Component {
    render() {
        const { generalInfo } = this.props;

        return (
            <section className="report-section">
                <header>General Information</header>
                <section className="general-information flexed-inputs-container">
                    <TextInput
                        inputId="gen-info-customerName"
                        label="Customer"
                        onChange={generalInfo.setCustomerName}
                        value={generalInfo.customerName}
                    />
                    <TextInput
                        inputId="gen-info-customer-id"
                        label="Customer #"
                        onChange={generalInfo.setCustomerId}
                        value={generalInfo.customerId}
                    />
                    <TextInput
                        inputId="gen-info-date-sold"
                        label="Date Sold"
                        onChange={generalInfo.setDateSold}
                        value={generalInfo.dateSold}
                    />
                    <TextInput
                        inputId="gen-info-location"
                        label="Location"
                        onChange={generalInfo.setLocation}
                        value={generalInfo.location}
                    />
                    <TextInput
                        inputId="gen-info-sales-person"
                        label="Sales Person"
                        onChange={generalInfo.setSalesPerson}
                        value={generalInfo.salesPerson}
                    />
                    <TextInput
                        inputId="gen-info-po-number"
                        label="PO #"
                        onChange={generalInfo.setPONumber}
                        value={generalInfo.PONumber}
                    />
                </section>
            </section>
        );
    }
}

GeneralInformationView.propTypes = {
    generalInfo: PropTypes.instanceOf(GeneralInformation)
};
