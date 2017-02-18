import {subscriptionStatus} from 'lib/subscription-utils';

const defaultState = {
    pageParams: null,
    subscriptionSuccess: subscriptionStatus.IN_PROGRESS
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
                subscriptionSuccess: subscriptionStatus.SUCCESS
            };
        case 'SUBSCRIBE_NEW_CUSTOMER_SUCCESS':
            return {
                ...state,
                subscriptionSuccess: subscriptionStatus.FAIL
            };
        default:
            return state;
    }
};

export default payment;