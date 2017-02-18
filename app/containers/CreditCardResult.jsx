import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {subscribeNewCustomer} from 'actions/payment';

//Component is renderized inside Zuora credit card hosted page (iframe)
class CreditCardResult extends Component {
    static propTypes = {
        billing: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        products: PropTypes.object.isRequired,
        subscribeNewCustomer: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        const {query} = props.location;
        const creditCardSuccess = this.isCreditCardSuccess(query);
        if (creditCardSuccess) {
            //TODO fix problem: iframe has it's own state and form is blank
            console.log(props.products.chosenPlanId);
            console.log(props.billing);
            props.subscribeNewCustomer(
                props.products.chosenPlanId,
                props.billing,
                query.refId
            );
        }
        //TODO fix problem: call is made inside iframe and doesn't mutate state on parent (SubscriptionResult)
        // window.top.location.href = `/subscription-result?creditCardSuccess=${creditCardSuccess}`;
    }

    isCreditCardSuccess (queryString) {
        let success = false;
        if (queryString && queryString.success) {
            const successParam = queryString.success;
            success = Array.isArray(successParam) ? this.checkMultiple(successParam) : this.checkSingle(successParam);
        }
        return success;
    }

    checkMultiple (successParam) {
        let success = true;
        successParam.forEach(el => {
            success = success && this.checkSingle(el);
        });
        return success;
    }

    checkSingle (successParam) {
        return successParam === 'true';
    }

    render () {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        billing: state.billing,
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        subscribeNewCustomer: bindActionCreators(subscribeNewCustomer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardResult);
