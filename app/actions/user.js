import {browserHistory} from 'react-router';
import {authenticateUser, confirmRegistration, resendConfirmationCode, signUp} from 'lib/aws-cognito-utils';

export const confirmSignUp = (username, confirmationCode) => {
    return dispatch => {
        dispatch({
            type: 'SIGNUP_CONFIRMATION_START'
        });
        confirmRegistration(username, confirmationCode, getDefaultCognitoCallback(
            dispatch,
            'SIGNUP_CONFIRMATION',
            {},
            {},
            () => browserHistory.push('/choose-template')
        ));
    };
};

export const login = (username, password) => {
    return dispatch => {
        dispatch({
            type: 'LOGIN_START'
        });
        authenticateUser(username, password, getDefaultCognitoCallback(
            dispatch,
            'LOGIN',
            {},
            {username: username},
            () => browserHistory.push('/choose-template')
        ));
    };
};

export const sendNewConfirmationCode = username => {
    return dispatch => {
        dispatch({
            type: 'SENDING_NEW_CONFIRMATION_CODE'
        });
        resendConfirmationCode(username);
    };
};

export const signUpUser = (email, password, attributes) => {
    return dispatch => {
        dispatch({
            type: 'SIGNUP_START'
        });
        signUp(email, password, attributes, getDefaultCognitoCallback(dispatch, 'SIGNUP', {username: email}));
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