import React, {Component, PropTypes} from 'react';
import {Field} from 'react-redux-form';

import * as colors from 'lib/colors';

const styles = {
    input: {
        width: '100%',
        borderRadius: '4px',
        border: `1px solid ${colors.primaryColorLight}`,
        backgroundColor: colors.white,
        padding: '8px',
        fontWeight: '300'
    }
};

export default class FormInput extends Component {

    static propTypes = {
        field: PropTypes.object.isRequired,
        inputType: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        validator: PropTypes.func
    };

    render () {
        const {field, model, inputType, placeholder, validator} = this.props;
        return (
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
                    <strong>
                        {field.errors.invalid}
                    </strong>
                }
            </Field>
        );
    }
}
