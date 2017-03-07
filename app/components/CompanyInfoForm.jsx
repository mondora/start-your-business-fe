import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';

import FormInput from 'components/FormInput';

import {genericRequiredValidator} from 'lib/form-utils';

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

export default class CompanyInfoForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired
    };

    render () {
        return (
            <Row>
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
            </Row>
        );
    }
}
