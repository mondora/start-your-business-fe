import {modeled} from 'react-redux-form';

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
    password: ''
};

export const initialLoginState = {
    email: '',
    errorMessage: null,
    password: ''
};

const defaultState = {
    isConfirmed: true,
    isLoggedIn: false,
    login: initialLoginState,
    signup: initialSignupState,
    username: null
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_FAIL':
            return getLoginErrorState(state, action);
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login: {
                    ...state.login,
                    errorMessage: null
                },
                isConfirmed: true,
                isLoggedIn: true,
                username: action.username
            };
        case 'OPEN_SIGNUP_CONFIRMATION_MODAL':
            return {
                ...state,
                isConfirmed: false,
                username: action.username
            };
        case 'SIGNUP_CONFIRMATION_FAIL':
            return {
                ...state,
                isConfirmed: false,
                ...getSignupConfirmationState(state, action.error.message)
            };
        case 'SIGNUP_CONFIRMATION_SUCCESS':
            return {
                ...state,
                isConfirmed: true,
                isLoggedIn: true,
                ...getSignupConfirmationState(state, null)
            };
        case 'SIGNUP_FAIL':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    errorMessage: action.error.message
                }
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                signup: {
                    ...state.signup,
                    errorMessage: null
                },
                isConfirmed: false,
                username: action.username
            };
        default:
            return state;
    }
};

function getLoginErrorState (state, action) {
    switch (action.error.code) {
        case 'UserNotConfirmedException':
            return {
                ...state,
                isConfirmed: false,
                username: action.username
            };
        default:
            return {
                ...state,
                login: {
                    ...state.login,
                    errorMessage: action.error.message
                }
            };
    }
}

function getSignupConfirmationState (state, errorMessage) {
    return {
        signup: {
            ...state.signup,
            confirmation: {
                ...state.signup.confirmation,
                errorMessage: errorMessage
            }
        }
    };
}

const modeledUser = modeled(user, 'user');

export default modeledUser;