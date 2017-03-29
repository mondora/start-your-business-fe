import axios from 'lib/axios';

export const choosePlan = productPlanId => ({
    type: 'CHOOSE_PLAN',
    productPlanId: productPlanId
});

export const getSYBProductPlans = () => {
    return dispatch => {
        axios.get('/products/start-your-business')
            .then(response => dispatch({
                type: 'GET_SYB_PRODUCT_SUCCESS',
                data: response.data
            }))
            .catch(() => dispatch({
                type: 'GET_SYB_PRODUCT_FAIL'
            }));
    };
};