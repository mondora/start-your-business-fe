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
    textarea: {
        width: '100%',
        borderRadius: 4,
        border: `1px solid ${colors.lightGrey}`,
        padding: '8px',
        resize: 'vertical',
        fontWeight: '300'
    },
    label: {
        color: colors.darkGrey,
        fontSize: '1em'
    }
};

export default class FormTextarea extends Component {

    static propTypes = {
        error: PropTypes.func,
        field: PropTypes.object.isRequired,
        label: PropTypes.string,
        model: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        style: PropTypes.object,
        textareaStyle: PropTypes.object,
        validator: PropTypes.func
    };

    renderLabel () {
        return this.props.label ? (
            <span style={styles.label}>{this.props.label}</span>
        ) : null;
    }

    render () {
        const {error, field, model, placeholder, validator} = this.props;
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
                    <textarea
                        value={placeholder}
                        style={{...styles.textarea, ...this.props.textareaStyle}}
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
