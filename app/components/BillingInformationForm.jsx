import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';

import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

const styles = {
    input: {
        width: '100%',
        marginBottom: '20px'
    },
    label: {
        fontSize: '1em',
        width: '100%'
    }
};

export default class BillingInformationForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        showCompanyFields: PropTypes.bool
    };

    renderCompanyFields () {
        return this.props.showCompanyFields ? (
            <div>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Azienda *'}</label>
                    <FormInput
                        field={this.props.form.company}
                        inputType='text'
                        model='billing.company'
                        placeholder='Azienda'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'P.IVA *'}</label>
                    <FormInput
                        field={this.props.form.pIVA}
                        inputType='text'
                        model='billing.pIVA'
                        placeholder='P.IVA'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
            </div>
        ) : null;
    }

    render () {
        return (
            <Row>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Nome *'}</label>
                    <FormInput
                        field={this.props.form.givenName}
                        inputType='text'
                        model='billing.givenName'
                        placeholder='Nome'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Cognome *'}</label>
                    <FormInput
                        field={this.props.form.familyName}
                        inputType='text'
                        model='billing.familyName'
                        placeholder='Cognome'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                {this.renderCompanyFields()}
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Email *'}</label>
                    <FormInput
                        field={this.props.form.email}
                        inputType='email'
                        model='billing.email'
                        placeholder='Email'
                        validator={requiredEmailValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Telefono'}</label>
                    <FormInput
                        field={this.props.form.phoneNumber}
                        inputType='text'
                        model='billing.phoneNumber'
                        placeholder='Telefono'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Indirizzo *'}</label>
                    <FormInput
                        field={this.props.form.address}
                        inputType='text'
                        model='billing.address'
                        placeholder='Indirizzo'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <label style={styles.label}>{'Numero civico *'}</label>
                    <FormInput
                        field={this.props.form.houseNumber}
                        inputType='text'
                        model='billing.houseNumber'
                        placeholder='Numero civico'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6} md={3}>
                    <label style={styles.label}>{'CAP *'}</label>
                    <FormInput
                        field={this.props.form.CAP}
                        inputType='text'
                        model='billing.CAP'
                        placeholder='CAP'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Città *'}</label>
                    <FormInput
                        field={this.props.form.city}
                        inputType='text'
                        model='billing.city'
                        placeholder='Città'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Provincia *'}</label>
                    <FormInput
                        field={this.props.form.province}
                        inputType='text'
                        model='billing.province'
                        placeholder='Provincia'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Regione *'}</label>
                    <FormInput
                        field={this.props.form.region}
                        inputType='text'
                        model='billing.region'
                        placeholder='Regione'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <label style={styles.label}>{'Stato *'}</label>
                    <FormInput
                        field={this.props.form.country}
                        inputType='text'
                        model='billing.country'
                        placeholder='Stato'
                        validator={genericRequiredValidator}
                        style={styles.input}
                    />
                </Col>
            </Row>
        );
    }
}
