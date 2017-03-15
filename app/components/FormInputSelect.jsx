import React, {Component, PropTypes} from 'react';
import {FormControl} from 'react-bootstrap';
import {Control} from 'react-redux-form';

export default class FormInputSelect extends Component {
    static propTypes = {
        model: PropTypes.string.isRequired,
        options: PropTypes.array.isRequired
    };

    render () {
        const {model, options} = this.props;

        const Select = (props) => (
            <FormControl
                componentClass='select'
                {...props}
            >
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.label}</option>
                )}
            </FormControl>
        );

        return (
            <Control
                model={model}
                component={Select}
            />
        );
    }
}
