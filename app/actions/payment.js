import axios from 'axios';

import {createUserPool} from 'lib/aws-cognito-utils';
import {API_ENDPOINT} from 'config';

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
        callSubscribe(dispatch, chosenPlanId, billingInfo, paymentMethodId);
    };
};

export const subscribeNewSupplier = (chosenPlanId, billingInfo, paymentMethodId) => {
    return dispatch => {
        callSubscribe(dispatch, chosenPlanId, billingInfo, paymentMethodId, () => {
            //TODO manage own domain name when available instead of businessName
            createAWSCognitoUserPool(dispatch, billingInfo.site.businessName);
        });
    };
};

const callSubscribe = (dispatch, chosenPlanId, billingInfo, paymentMethodId, successCallback) => {
    dispatch({
        type: 'SUBSCRIBE_NEW_CUSTOMER_START'
    });
    axios.post(`https://${API_ENDPOINT}/subscribe-new-customer`, {
        billingInfo: billingInfo,
        subscriptionPlanId: chosenPlanId,
        paymentMethodId: paymentMethodId
    })
    .then(() => {
        if (successCallback) {
            successCallback();
        }
        dispatch({
            type: 'SUBSCRIBE_NEW_CUSTOMER_SUCCESS'
        });
    })
    .catch(() => dispatch({
        type: 'SUBSCRIBE_NEW_CUSTOMER_FAIL'
    }));
};

const createAWSCognitoUserPool = (dispatch, businessName) => {
    dispatch({
        type: 'CREATE_USER_POOL_START'
    });
    createUserPool(businessName, result => {
        if (result.success) {
            //TODO take the result (user pool configuration) and persist it with siteConfig
            dispatch({
                type: 'CREATE_USER_POOL_START_SUCCESS',
                userPoolConfig: result.userPoolConfig
            });
        } else {
            dispatch({
                type: 'CREATE_USER_POOL_START_FAIL',
                error: result.error
            });
        }    
    });
};