import axios from 'axios';
import {API_ENDPOINT} from 'lib/config';

export const getSYBProductPlans = () => {
    return dispatch => {
        axios.get(`https://${API_ENDPOINT}/products/start-your-business`)
            .then(response => dispatch({
                type: 'GET_SYB_PRODUCT_SUCCESS',
                data: response.data
            }))
            .catch(() => dispatch({
                type: 'GET_SYB_PRODUCT_FAIL'
            }));
    };
};