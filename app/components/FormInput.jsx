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
        borderRadius: '4px',
        border: `1px solid ${colors.primaryColorLight}`,
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
        error: PropTypes.func,
        field: PropTypes.object.isRequired,
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
        const {error, field, model, inputType, placeholder, validator} = this.props;
        return (
            <label style={this.props.style}>
                {this.renderLabel()}
                <Field
                    model={model}
                    errors={{
                        invalid: val => validator ? validator(val) : false
                    }}
                    validateOn='blur'
                >
                    <input
                        type={inputType}
                        placeholder={placeholder}
                        style={styles.input}
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
