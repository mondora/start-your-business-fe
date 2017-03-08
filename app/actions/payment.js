import axios from 'axios';

import {createUserPool} from 'lib/aws-cognito-utils';
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

export const subscribeNewCustomer = (chosenPlanId, billingInfo, paymentMethodId) => {
    return dispatch => {
        dispatch({
            type: 'SUBSCRIBE_NEW_CUSTOMER_START'
        });
        axios.post(`https://${API_ENDPOINT}/subscribe-new-customer`, {
            billingInfo: billingInfo,
            subscriptionPlanId: chosenPlanId,
            paymentMethodId: paymentMethodId
        })
        .then(() => {
            //TODO manage own domain name when available instead of businessName
            createAWSCognitoUserPool(dispatch, billingInfo.site.businessName);
            dispatch({
                type: 'SUBSCRIBE_NEW_CUSTOMER_SUCCESS'
            });
        })
        .catch(() => dispatch({
            type: 'SUBSCRIBE_NEW_CUSTOMER_FAIL'
        }));
    };
};

const createAWSCognitoUserPool = (dispatch, businessName) => {
    dispatch({
        type: 'CREATE_USER_POOL_START'
    });
    createUserPool(businessName, result => {
        if (result.success) {
            dispatch({
                type: 'CREATE_USER_POOL_START_SUCCESS'
            });
        } else {
            dispatch({
                type: 'CREATE_USER_POOL_START_FAIL',
                error: result.error
            });
        }    
    });
};