import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form';
import {bindActionCreators} from 'redux';
import {Row, Col} from 'react-bootstrap';

import {getPaymentParams} from 'actions/payment';
import {choosePlan, getSYBProductPlans} from 'actions/products';

import BillingInformationForm from 'components/BillingInformationForm';
import Button from 'components/CustomButton';
import CreditCardForm from 'components/CreditCardForm';
import FormInputCheckbox from 'components/FormInputCheckbox';
import ProductPlanCardList from 'components/ProductPlanCardList';
import PageTeaser from 'components/PageTeaser';

import * as colors from 'lib/colors';
import {isCheckedValidator} from 'lib/form-utils';

const styles = {
    title: {
        width: '100%',
        margin: '0px auto 40px auto',
        textAlign: 'center',
        color: colors.primaryColor,
        fontWeight: 800,
        fontSize: 'calc(30px + 1vw)',
        lineHeight: 'calc(30px + 1vw)',
        '@media screen and (min-width: 991px)': {
            width: '80%',
        }
    },
    section: {
        borderRadius: '10px',
        backgroundColor: colors.primaryColorLighter,
        padding: 20,
        marginBottom: 40
    },
    sectionTitle: {
        fontWeight: '700',
        fontSize: '1.3em',
    },
    text: {

    }
};

class ChoosePlan extends Component {
    static propTypes = {
        billingInformationForm: PropTypes.object,
        choosePlan: PropTypes.func.isRequired,
        getPaymentParams: PropTypes.func.isRequired,
        getSYBProductPlans: PropTypes.func.isRequired,
        payment: PropTypes.object,
        products: PropTypes.object
    };

    submitBilling () {
        Z.submit();
    }

    render () {
        const {chosenPlanId, productPlans} = this.props.products;
        return (
            <div>
                <PageTeaser
                    pageTitle={'SCEGLI UN PIANO'}
                />
                <div className='container'>
                    <h3 style={styles.title}>
                        {'CI SEI QUASI, UN ULTIMO PASSO PER COMINCIARE IL TUO BUSINESS'}
                    </h3>
                    <Form model='billing' onSubmit={this.submitBilling}>
                        <Row>
                            <Col xs={12}>
                                <div style={styles.section}>
                                    <p style={styles.sectionTitle}>
                                        {'1. Scelta del piano (al momento il piano professional non è attivo):'}
                                    </p>
                                    <ProductPlanCardList
                                        chooseMode={true}
                                        choosePlan={this.props.choosePlan}
                                        chosenPlanId={chosenPlanId}
                                        getSYBProductPlans={this.props.getSYBProductPlans}
                                        productPlans={productPlans}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div style={styles.section}>
                                    <p style={styles.sectionTitle}>
                                        {'2. Dati di fatturazione:'}
                                    </p>
                                    <BillingInformationForm
                                        form={this.props.billingInformationForm}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <div style={styles.section}>
                                    <p style={styles.sectionTitle}>
                                        {'3. Pagamento:'}
                                    </p>
                                    <CreditCardForm
                                        getPaymentParams={this.props.getPaymentParams}
                                        paymentPageParams={this.props.payment.pageParams}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: 30}}>
                            <Col xs={12}>
                                <FormInputCheckbox
                                    field={this.props.billingInformationForm.termsCheck}
                                    model='billing.termsCheck'
                                    text={
                                        <span style={{...styles.text, ...{cursor: 'pointer'}}}>
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
                        <Row style={{marginBottom: 60}}>
                            <Col xs={12}>
                                <div style={{float: 'left'}}>
                                    <Button
                                        backgroundColor={colors.darkGrey}
                                        text='< INDIETRO'
                                    />
                                </div>
                                <div style={{float: 'right'}}>
                                    <Button
                                        backgroundColor={colors.primaryColor}
                                        text='ACQUISTA'
                                        type='submit'
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        billingInformationForm: state.billingInformationForm,
        payment: state.payment,
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        choosePlan: bindActionCreators(choosePlan, dispatch),
        getPaymentParams: bindActionCreators(getPaymentParams, dispatch),
        getSYBProductPlans: bindActionCreators(getSYBProductPlans, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(ChoosePlan));
