import {subscriptionStatus} from 'lib/subscription-utils';

const defaultState = {
    pageParams: null,
    subscriptionStatus: subscriptionStatus.IN_PROGRESS
};

const payment = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_PAYMENT_PARAMS_SUCCESS':
            return {
                ...state,
                pageParams: action.data
            };
        case 'SUBSCRIBE_NEW_CUSTOMER_FAIL':
            return {
                ...state,
                subscriptionStatus: subscriptionStatus.FAIL
            };
        case 'SUBSCRIBE_NEW_CUSTOMER_SUCCESS':
            return {
                ...state,
                subscriptionStatus: subscriptionStatus.SUCCESS
            };
        default:
            return state;
    }
};

export default payment;