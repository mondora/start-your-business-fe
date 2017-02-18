import {getProductPlans} from 'lib/zuora-products-utils';

const defaultState = {
    chosenPlanId: null,
    productPlans: []
};

const products = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHOOSE_PLAN':
            return {
                ...state,
                chosenPlanId: action.productPlanId
            };
        case 'GET_SYB_PRODUCT_SUCCESS': {
            const productPlans = getProductPlans(action.data);
            return {
                ...state,
                chosenPlanId: productPlans[0].id,
                productPlans: productPlans
            };
        }
        default:
            return state;
    }
};

export default products;