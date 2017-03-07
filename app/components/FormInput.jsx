import React, {Component, PropTypes} from 'react';
import {Field} from 'react-redux-form';

import * as colors from 'lib/colors';

const styles = {
    errorsWrp: {
        display: 'block',
        borderRadius: '4px',
        margin: '2px 0',
        padding: '5px 10px',
        border: `1px solid ${colors.errorText}`,
        backgroundColor: colors.backgroundError,
        color: colors.errorText
    },
    input: {
        width: '100%',
        borderRadius: 4,
        border: `1px solid ${colors.lightGrey}`,
        backgroundColor: colors.white,
        padding: '8px',
        fontWeight: '300'
    },
    label: {
        color: colors.darkGrey,
        fontSize: '1em'
    }
};

export default class FormInput extends Component {

    static propTypes = {
        disabled: PropTypes.bool,
        error: PropTypes.func,
        field: PropTypes.object.isRequired,
        inputStyle: PropTypes.object,
        inputType: PropTypes.string.isRequired,
        label: PropTypes.string,
        model: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        style: PropTypes.object,
        validator: PropTypes.func
    };

    renderLabel () {
        return this.props.label ? (
            <span style={styles.label}>{this.props.label}</span>
        ) : null;
    }

    render () {
        const {disabled, error, field, model, inputType, placeholder, validator} = this.props;
        return (
            <label style={this.props.style}>
                {this.renderLabel()}
                <Field
                    disabled={disabled}
                    errors={{
                        invalid: val => validator ? validator(val) : false
                    }}
                    model={model}
                    validateOn='blur'
                >
                    <input
                        disabled={disabled}
                        type={inputType}
                        placeholder={placeholder}
                        style={{...styles.input, ...this.props.inputStyle}}
                    />
                    {
                        field.touched && !field.valid &&
                        <strong style={styles.errorsWrp}>
                            {field.errors.invalid}
                        </strong>
                    }
                    {
                        error ? error() : null
                    }
                </Field>
            </label>
        );
    }
}
