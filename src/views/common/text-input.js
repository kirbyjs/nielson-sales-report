// Created by kirbyjs on 9/7/18.

import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput(props) {
    const { inputId } = props;

    return (
        <div className={`text-input ${props.className}`}>
            {props.label ? <label htmlFor={inputId}>{props.label}</label> : null}
            <input
                name={inputId}
                id={inputId}
                type="text"
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}

TextInput.defaultProps = {
    className: ''
};

TextInput.propTypes = {
    className: PropTypes.string,
    inputId: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};
