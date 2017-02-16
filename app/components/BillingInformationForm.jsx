import React, {Component, PropTypes} from 'react';

import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

export default class BillingInformationForm extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        form: PropTypes.object.isRequired
    };

    render () {
        return (
            <div>
                <FormInput
                    field={this.props.form.givenName}
                    inputType='text'
                    model='billing.givenName'
                    placeholder='Nome'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.familyName}
                    inputType='text'
                    model='billing.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.company}
                    inputType='text'
                    model='billing.company'
                    placeholder='Azienda'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.pIVA}
                    inputType='text'
                    model='billing.pIVA'
                    placeholder='P.IVA'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.email}
                    inputType='email'
                    model='billing.email'
                    placeholder='Email'
                    validator={requiredEmailValidator}
                />

                <FormInput
                    field={this.props.form.phoneNumber}
                    inputType='text'
                    model='billing.phoneNumber'
                    placeholder='Telefono'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.address}
                    inputType='text'
                    model='billing.address'
                    placeholder='Indirizzo'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.houseNumber}
                    inputType='text'
                    model='billing.houseNumber'
                    placeholder='Numero civico'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.CAP}
                    inputType='text'
                    model='billing.CAP'
                    placeholder='CAP'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.city}
                    inputType='text'
                    model='billing.city'
                    placeholder='Città'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.province}
                    inputType='text'
                    model='billing.province'
                    placeholder='Provincia'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.region}
                    inputType='text'
                    model='billing.region'
                    placeholder='Regione'
                    validator={genericRequiredValidator}
                />

                <FormInput
                    field={this.props.form.country}
                    inputType='text'
                    model='billing.country'
                    placeholder='Stato'
                    validator={genericRequiredValidator}
                />
            </div>
        );
    }
}