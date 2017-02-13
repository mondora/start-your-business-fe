import React, {Component, PropTypes} from 'react';
import {Control, Form} from 'react-redux-form';

export default class BillingInformationForm extends Component {
    static propTypes = {
        billingInformation: PropTypes.object.isRequired,
        errorMessage: PropTypes.string
    };

    render () {
        return (
            <Form model='billingInformation'>
                <label>{'Nome *'}</label>
                <Control.text model='billingInformation.givenName' />

                <label>{'Cognome *'}</label>
                <Control.text model='billingInformation.familyName' />

            </Form>
        );
    }
}