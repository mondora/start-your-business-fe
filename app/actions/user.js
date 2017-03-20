import md5 from 'js-md5';
import {browserHistory} from 'react-router';

import {authenticateUser, confirmRegistration, resendConfirmationCode, signUp} from 'lib/aws-cognito-utils';

export const confirmSignUp = (username, confirmationCode, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'SIGNUP_CONFIRMATION_START'
        });
        confirmRegistration(username, confirmationCode, getDefaultCognitoCallback(
            dispatch,
            'SIGNUP_CONFIRMATION',
            {},
            {},
            () => window.location = `#/build-site/${md5(username)}`
        ), userPoolConfig);
    };
};

export const login = (username, password, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN_START'
        });
        authenticateUser(username, password, getDefaultCognitoCallback(
            dispatch,
            'LOGIN',
            {username: username},
            {username: username},
            () => window.location = `#/build-site/${md5(username)}`
        ), userPoolConfig);
    };
};

export const sendNewConfirmationCode = (username, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'SENDING_NEW_CONFIRMATION_CODE'
        });
        resendConfirmationCode(username, userPoolConfig);
    };
};

export const setRenderingSite = serviceName => ({
    type: 'SET_RENDERING_SITE',
    site: serviceName
});

export const signUpUser = (email, password, attributes, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'SIGNUP_START'
        });
        signUp(email, password, attributes, getDefaultCognitoCallback(dispatch, 'SIGNUP', {username: email}), userPoolConfig);
    };
};

function getDefaultCognitoCallback (dispatch, actionName, successObj = {}, failObj = {}, successAction) {
    return result => {
        if (result.success) {
            dispatch({
                type: `${actionName}_SUCCESS`,
                ...successObj
            });
            if (successAction) {
                successAction();
            }
        } else {
            dispatch({
                type: `${actionName}_FAIL`,
                error: result.error,
                ...failObj
            });
        }
    };
}