// Created by kirbyjs on 9/8/18.

import React from 'react';
import PropTypes from 'prop-types';

export default function SelectInput(props) {
    const { inputId } = props;

    return (
        <div className={`select-input ${props.className}`}>
            {props.label ? <label htmlFor={inputId}>{props.label}</label> : null}
            <select
                name={inputId}
                id={inputId}
                onChange={props.onChange}
                value={props.selectedValue}
            >
                {props.children}
            </select>
        </div>
    );
}

SelectInput.defaultProps = {
    className: ''
};

SelectInput.propTypes = {
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    inputId: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    selectedValue: PropTypes.string
};

