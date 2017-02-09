const defaultState = {
    confirmationErrorMessage: null,
    isConfirmed: true,
    isLoggedIn: false,
    loginErrorMessage: null,
    signupErrorMessage: null,
    username: null
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_FAIL':
            return getLoginErrorState(state, action);
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loginErrorMessage: null,
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
                confirmationErrorMessage: action.error.message
            };
        case 'SIGNUP_CONFIRMATION_SUCCESS':
            return {
                ...state,
                isConfirmed: true,
                isLoggedIn: true,
                confirmationErrorMessage: null
            };
        case 'SIGNUP_FAIL':
            return {
                ...state,
                signupErrorMessage: action.error.message
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                signupErrorMessage: null,
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
                loginErrorMessage: action.error.message
            };
    }

}

export default user;