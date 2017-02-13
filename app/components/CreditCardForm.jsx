import React, {Component, PropTypes} from 'react';

export default class CreditCardForm extends Component {

    static propTypes = {
        getPaymentParams: PropTypes.func.isRequired,
        paymentPageParams: PropTypes.object
    };

    componentDidMount () {
        this.props.getPaymentParams();
    }

    componentWillReceiveProps (nextProps) {
        //TODO provide right callback
        const {paymentPageParams} = nextProps;
        if (paymentPageParams) {
            paymentPageParams.style = 'inline';
            paymentPageParams.submitEnabled = false;
            Z.render(
                paymentPageParams,
                {},
                response => console.log(response)
            );
        }
    }

    render () {
        return (
            <div id='zuora_payment' />
        );
    }
}


