import React, {Component, PropTypes} from 'react';
import {Field} from 'react-redux-form';

import * as colors from 'lib/colors';

const labelStyle = (isInvalid) => {
    return isInvalid ? {
        borderRadius: '4px',
        margin: '2px 0',
        padding: '5px 10px',
        border: `1px solid ${colors.errorText}`
    } : null;
};

export default class FormInputCheckbox extends Component {

    static propTypes = {
        field: PropTypes.object.isRequired,
        model: PropTypes.string.isRequired,
        text: PropTypes.node,
        validator: PropTypes.func
    };

    render () {
        const {field, model, text, validator} = this.props;
        return (
            <label style={labelStyle(field.touched && !field.valid && field.errors.invalid)}>
                <Field
                    model={model}
                    errors={{
                        invalid: val => validator ? validator(val) : false
                    }}
                    validateOn='blur'
                >
                    <input type='checkbox' />
                    {text}
                </Field>
            </label>
        );
    }
}
