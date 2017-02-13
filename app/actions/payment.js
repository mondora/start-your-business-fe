import axios from 'axios';
import {API_ENDPOINT} from 'lib/config';

export const getPaymentParams = () => {
    return dispatch => {
        axios.get(`https://${API_ENDPOINT}/payment-page-signature`)
            .then(response => dispatch({
                type: 'GET_PAYMENT_PARAMS_SUCCESS',
                data: response.data
            }))
            .catch(() => dispatch({
                type: 'GET_PAYMENT_PARAMS_FAIL'
            }));
    };
};