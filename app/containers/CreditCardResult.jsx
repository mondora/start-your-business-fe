import React, {Component, PropTypes} from 'react';
import {getStoredState} from 'redux-persist';

//Container is renderized inside Zuora credit card hosted page (iframe)
export default class CreditCardResult extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        const {query} = props.location;
        const creditCardSuccess = this.isCreditCardSuccess(query);
        console.log('i am here');
        getStoredState({whitelist: ['user'], keyPrefix: 'syb:'}, (err, state) => {
            const basePath = state.user.renderingSite ? `/${state.user.renderingSite}` : '';
            console.log(window.top.location);
            window.top.location = `#${basePath}/subscription-result?creditCardSuccess=${creditCardSuccess}&refId=${query.refId}`;
        });
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