import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Form} from 'react-redux-form';
import {bindActionCreators} from 'redux';

import {getPaymentParams} from 'actions/payment';
import {choosePlan, getSYBProductPlans} from 'actions/products';

import BillingInformationForm from 'components/BillingInformationForm';
import Button from 'components/CustomButton';
import CreditCardForm from 'components/CreditCardForm';
import FormInputCheckbox from 'components/FormInputCheckbox';
import ProductPlanCardList from 'components/ProductPlanCardList';

import * as colors from 'lib/colors';
import {isCheckedValidator} from 'lib/form-utils';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text: {
        color: colors.darkGrey,
        fontSize: '1em',
        fontWeight: '300'
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
            <div style={{backgroundColor: colors.lightGrey}}>
                <Form model='billing' onSubmit={this.submitBilling}>
                    <div style={styles.part1Container}>
                        {'1. Seleziona un piano:'}
                        <ProductPlanCardList
                            chooseMode={true}
                            choosePlan={this.props.choosePlan}
                            chosenPlanId={chosenPlanId}
                            getSYBProductPlans={this.props.getSYBProductPlans}
                            productPlans={productPlans}
                        />
                    </div>

                    <BillingInformationForm
                        form={this.props.billingInformationForm}
                    />

                    <CreditCardForm
                        getPaymentParams={this.props.getPaymentParams}
                        paymentPageParams={this.props.payment.pageParams}
                    />

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

                    <Button
                        backgroundColor={colors.darkGrey}
                        text='< INDIETRO'
                    />
                    <Button
                        backgroundColor={colors.darkGrey}
                        text='ACQUISTA'
                        type='submit'
                    />
                </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlan);
