const defaultState = {
    pageParams: null,
    subscriptionSuccess: false
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
                subscriptionSuccess: false
            };
        case 'SUBSCRIBE_NEW_CUSTOMER_SUCCESS':
            return {
                ...state,
                subscriptionSuccess: true
            };
        default:
            return state;
    }
};

export default payment;