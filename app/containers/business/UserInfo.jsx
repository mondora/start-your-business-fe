import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import CompanyInfoForm from 'components/CompanyInfoForm';
import FormInputCheckbox from 'components/FormInputCheckbox';
import PersonalInfoForm from 'components/PersonalInfoForm';

import * as colors from 'lib/colors';
import {isCheckedValidator} from 'lib/form-utils';

const styles = {
    formBox: {
        backgroundColor: colors.backgroundLightGrey,
        padding: 20,
        marginBottom: 40
    },
    boxTitle: {
        fontWeight: '700',
        fontSize: '1.3em'
    }
};

class UserInfo extends Component {
    static propTypes = {
        billingInformationForm: PropTypes.object.isRequired,
        businessSiteState: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            showAlternativeInfoForm: false
        };
    }

    render () {
        //TODO put right link for terms & privacy
        //TODO manage correctly store data
        return (
            <div className='container'>
                {'INSERISCI I TUOI DATI'}
                <Row>
                    <Col xs={12} style={styles.formBox}>
                        <p style={styles.boxTitle}>
                            {'1. Dati di spedizione:'}
                        </p>
                        <PersonalInfoForm form={this.props.billingInformationForm} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={styles.formBox}>
                        <p style={styles.boxTitle}>
                            {'2. Dati di fatturazione:'}
                        </p>
                        <CompanyInfoForm form={this.props.billingInformationForm} />
                        <input
                            type='checkbox'
                            onChange={() => this.setState({showAlternativeInfoForm: !this.state.showAlternativeInfoForm})}
                        />
                        {'Indirizzo diverso da quello di spedizione?'}
                        {this.state.showAlternativeInfoForm ? <PersonalInfoForm form={this.props.billingInformationForm} /> : null}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{padding: 0}}>
                        <FormInputCheckbox
                            field={this.props.billingInformationForm.termsCheck}
                            model='billing.termsCheck'
                            text={
                                <span style={{cursor: 'pointer'}}>
                                    {'  Acconsento e dichiaro di aver letto i '}
                                    <a
                                        href='/privacy'
                                        style={{color: colors.darkGrey, textDecoration: 'underline'}}
                                        target='_blank'
                                    >
                                        {'termini e condizioni'}
                                    </a>
                                    {' del servizio e l’informativa sulla '}
                                    <a
                                        href='/privacy'
                                        style={{color: colors.darkGrey, textDecoration: 'underline'}}
                                        target='_blank'
                                    >
                                        {'Privacy'}
                                    </a> {' *'}
                                </span>
                            }
                            validator={isCheckedValidator}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        billingInformationForm: state.billingInformationForm,
        businessSiteState: state.businessSite
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserInfo));
