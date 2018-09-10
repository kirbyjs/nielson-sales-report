// Created by kirby15 on 2/1/18.

import { hot } from 'react-hot-loader';
import React from 'react';
import PropTypes from 'prop-types';
import initializeFALibrary from './fa-library';
import GeneralInformationView from './views/general-information';
import EquipmentList from './views/equipment/equipment-list';
import SoldEquipmentDetailsView from './views/equipment/sold-equipment-details';
import TradeEquipmentDetailsView from './views/equipment/trade-equipment-details';
import PaymentInformationView from './views/payment-information';

initializeFALibrary();

function App(props) {
    return (
        <React.Fragment>
            <header>
                <h1>K.C. Nielsen LTD</h1>
                <h2>Sales Report</h2>
            </header>
            <GeneralInformationView generalInfo={props.generalInfo} />
            <EquipmentList
                className="sold-equipment-list"
                equipmentList={props.soldEquipmentList.equipment}
                addEquipment={props.soldEquipmentList.addEquipment}
                removeEquipment={props.soldEquipmentList.removeEquipmentOnClickWrapper}
                headerText="Sold Equipment Details"
                EquipmentDetailsComponent={SoldEquipmentDetailsView}
            />
            <EquipmentList
                className="trade-equipment-list"
                equipmentList={props.tradeEquipmentList.equipment}
                addEquipment={props.tradeEquipmentList.addEquipment}
                removeEquipment={props.tradeEquipmentList.removeEquipmentOnClickWrapper}
                headerText="Trade - In Equipment Details"
                EquipmentDetailsComponent={TradeEquipmentDetailsView}
            />
            <PaymentInformationView
                paymentInfo={props.paymentInfo}
                tradePayoffsList={props.tradePayoffList}
            />
        </React.Fragment>
    );
}

export default hot(module)(App);

App.propTypes = {
    generalInfo: PropTypes.object,
    paymentInfo: PropTypes.object,
    soldEquipmentList: PropTypes.shape({
        addEquipment: PropTypes.func,
        equipment: PropTypes.object,
        removeEquipmentOnClickWrapper: PropTypes.func
    }),
    tradeEquipmentList: PropTypes.shape({
        addEquipment: PropTypes.func,
        equipment: PropTypes.object,
        removeEquipmentOnClickWrapper: PropTypes.func
    }),
    tradePayoffList: PropTypes.object
};
