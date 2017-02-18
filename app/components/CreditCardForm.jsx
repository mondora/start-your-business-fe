import R from 'ramda';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

export default class CreditCardForm extends Component {

    static propTypes = {
        getPaymentParams: PropTypes.func.isRequired,
        paymentPageParams: PropTypes.object
    };

    componentDidMount () {
        this.props.getPaymentParams();
    }

    componentWillReceiveProps (nextProps) {
        const {paymentPageParams} = nextProps;
        if (paymentPageParams && this.shouldComponentUpdate(nextProps)) {
            paymentPageParams.style = 'inline';
            paymentPageParams.submitEnabled = false;
            Z.render(paymentPageParams, {}, this.handleZuoraResponse.bind(this));
        }
    }

    shouldComponentUpdate (nextProps) {
        return !R.equals(this.props.paymentPageParams, nextProps.paymentPageParams);
    }

    handleZuoraResponse (response) {
        console.log('Response from call of credit card form:');
        console.log(response);
        if (!response.success) {
            let callbackUrl = '/payment-result?';
            for (let id in response) {
                callbackUrl += `${id}=${encodeURIComponent(response[id])}&`;
            }
            browserHistory.push(callbackUrl);
        }
    }

    render () {
        return (
            <div id='zuora_payment' />
        );
    }
}


