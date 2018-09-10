// Created by kirbyjs on 9/7/18.

import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './radio-input';

export default function TrueFalseRadioButtons(props) {
    return (
        <div className="true-false-radio-buttons">
            <RadioInput
                name={`${props.id}-radio`}
                checked={props.isTruthy}
                onChange={props.onTrueChange}
                label={props.trueText}
                value={props.trueText}
            />
            <RadioInput
                name={`${props.id}-radio`}
                checked={!props.isTruthy}
                onChange={props.onFalseChange}
                label={props.falseText}
                value={props.falseText}
            />
        </div>
    );
}

TrueFalseRadioButtons.defaultProps = {
    trueText: 'Yes',
    falseText: 'No'
};

TrueFalseRadioButtons.propTypes = {
    falseText: PropTypes.string,
    id: PropTypes.string,
    isTruthy: PropTypes.bool,
    onFalseChange: PropTypes.func,
    onTrueChange: PropTypes.func,
    trueText: PropTypes.string
};
