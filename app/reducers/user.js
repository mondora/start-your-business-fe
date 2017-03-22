import {modeled} from 'react-redux-form';

import {getSiteName} from 'lib/auth-utils';

export const initialConfirmationState = {
    code: '',
    errorMessage: null
};

export const initialSignupState = {
    confirmation: initialConfirmationState,
    confirmPassword: '',
    email: '',
    errorMessage: null,
    familyName: '',
    givenName: '',
    password: '',
    privacyCheck: false
};

export const initialLoginState = {
    email: '',
    errorMessage: null,
    password: ''
};

const defaultSiteState = {
    isConfirmed: true,
    isLoggedIn: false,
    login: initialLoginState,
    signup: initialSignupState,
    username: null
};

const user = (state = {
    renderingSite: null
}, action) => {
    const siteState = state[getSiteName(state.renderingSite)];
    switch (action.type) {
        case 'LOGIN_FAIL':
            return getNewSiteState(state, getLoginErrorState(siteState, action));
        case 'LOGIN_SUCCESS':
            return getNewSiteState(state, {
                login: initialLoginState,
                isConfirmed: true,
                isLoggedIn: true,
                username: action.username
            });
        case 'LOGOUT_SUCCESS':
            return getNewSiteState(state, defaultSiteState);
        case 'OPEN_SIGNUP_CONFIRMATION_MODAL':
            return getNewSiteState(state, {
                isConfirmed: false,
                username: action.username
            });
        case 'SET_RENDERING_SITE': {
            const site = getSiteName(action.site);
            let newState = {
                ...state,
                renderingSite: action.site
            };
            if (!state[site]) {
                newState[site] = defaultSiteState;
            }
            return newState;
        }
        case 'SIGNUP_CONFIRMATION_FAIL':
            return getNewSiteState(state, {
                isConfirmed: false,
                signup: getSignupConfirmationState(state, action.error.message)
            });
        case 'SIGNUP_CONFIRMATION_SUCCESS':
            return getNewSiteState(state, {
                isConfirmed: true,
                isLoggedIn: true,
                signup: getSignupConfirmationState(state, null)
            });
        case 'SIGNUP_FAIL':
            return getNewSiteState(state, {
                signup: {
                    ...siteState.signup,
                    errorMessage: action.error.message
                }
            });
        case 'SIGNUP_SUCCESS':
            return getNewSiteState(state, {
                signup: {
                    ...siteState.signup,
                    errorMessage: null
                },
                isConfirmed: false,
                username: action.username
            });
        default:
            return state;
    }
};

function getLoginErrorState (siteState, action) {
    switch (action.error.code) {
        case 'UserNotConfirmedException':
            return {
                ...siteState,
                isConfirmed: false,
                username: action.username
            };
        default:
            return {
                ...siteState,
                login: {
                    ...siteState.login,
                    errorMessage: action.error.message
                }
            };
    }
}

function getSignupConfirmationState (siteState, errorMessage) {
    return !errorMessage ? initialSignupState : {
        ...siteState.signup,
        confirmation: {
            ...siteState.signup.confirmation,
            errorMessage: errorMessage
        }
    };
}

function getNewSiteState (state, newObj) {
    let newState = {
        ...state
    };
    const siteName = getSiteName(state.renderingSite);
    newState[siteName] = {
        ...state[siteName],
        ...newObj
    };
    return newState;
}

export default modeled(user, 'user');
