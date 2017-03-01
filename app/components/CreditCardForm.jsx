import Radium from 'radium';
import R from 'ramda';
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router';

class CreditCardForm extends Component {

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
            paymentPageParams.locale = 'it_IT';
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
            let callbackUrl = '/credit-card-result?';
            for (let id in response) {
                callbackUrl += `${id}=${encodeURIComponent(response[id])}&`;
            }
            browserHistory.push(callbackUrl);
        }
    }

    render () {
        return (
            <div>
                <div id='zuora_payment' style={{backgroundColor: 'black !important'}} />
                <Radium.Style
                    rules={{
                        '.popup': {
                            backgroundColor: 'black !important'
                        }
                    }}
                />
            </div>
        );
    }
}
export default Radium(CreditCardForm);
