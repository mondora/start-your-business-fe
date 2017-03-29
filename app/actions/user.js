import md5 from 'js-md5';

import {
    authenticateUser,
    changePassword,
    confirmRegistration,
    getUserAttributes,
    resendConfirmationCode,
    signOut,
    signUp
} from 'lib/aws-cognito-utils';

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

export const fetchUserInfo = (username, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'FETCH_USER_INFO_START'
        });
        getUserAttributes(username, getDefaultCognitoCallback(
            dispatch,
            'FETCH_USER_INFO'
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
            () => window.location = `#/update-site/${md5(username)}`
        ), userPoolConfig);
    };
};

export const logout = (username, userPoolConfig) => {
    return dispatch => {
        signOut(username, getDefaultCognitoCallback(
            dispatch,
            'LOGOUT',
            {},
            {},
            () => window.location = '#/'
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

export const updatePassword = (username, oldPassword, newPassword, userPoolConfig) => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_PASSWORD_START'
        });
        changePassword(username, oldPassword, newPassword, getDefaultCognitoCallback(
            dispatch,
            'UPDATE_PASSWORD'
        ), userPoolConfig);
    };
};

function getDefaultCognitoCallback (dispatch, actionName, successObj = {}, failObj = {}, successAction) {
    return result => {
        if (result.success) {
            dispatch({
                type: `${actionName}_SUCCESS`,
                data: result.data,
                ...successObj
            });
            if (successAction) {
                successAction();
            }
        } else {
            if (result.error.message === 'User is not authenticated') {
                dispatch({type: 'LOGOUT_SUCCESS'});
                window.location = '#/';
            } else {
                dispatch({
                    type: `${actionName}_FAIL`,
                    error: result.error,
                    ...failObj
                });
            }
        }
    };
}