import {formReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import billingInformation, {initialBillingState} from './billing-information';
import businessSite from './business-site';
import payment from './payment';
import products from './products';
import spinner from './spinner';
import user, {initialConfirmationState, initialLoginState, initialSignupState} from './user';

const reducers = combineReducers({
    routing: routerReducer,
    billing: billingInformation,
    billingInformationForm: formReducer('billing', initialBillingState),
    businessSite,
    payment,
    products,
    spinner,
    user,
    userLoginForm: formReducer('user.login', initialLoginState),
    userSignupForm: formReducer('user.signup', initialSignupState),
    userSignupConfirmationForm: formReducer('user.signup.confirmation', initialConfirmationState)
});

export default reducers;