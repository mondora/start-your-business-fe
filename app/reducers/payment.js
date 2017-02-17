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
        default:
            return state;
    }
};

export default payment;