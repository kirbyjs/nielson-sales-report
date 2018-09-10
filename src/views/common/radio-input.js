// Created by kirbyjs on 9/9/18.

import React from 'react';
import PropTypes from 'prop-types';

export default function RadioInput(props) {
    return (
        <label>
            <input
                type="radio"
                name={props.name}
                checked={(props.checked === undefined) ? false : props.checked}
                onChange={props.onChange}
                value={props.value}
            />
            {props.label}
        </label>
    );
}

RadioInput.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};
