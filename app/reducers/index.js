import {formReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import billingInformation, {initialBillingState} from './billing-information';
import siteConfig, {
    initialColors,
    initialFooterInfo,
    initialHeaderInfo,
    initialIntroInfo,
    initialStepsInfo,
    initialOtherInfo
} from './siteConfig';
import payment from './payment';
import products from './products';
import spinner from './spinner';
import user, {initialConfirmationState, initialLoginState, initialSignupState} from './user';
import ui, {initialSubscriptionsInfo} from './ui';

const reducers = combineReducers({
    routing: routerReducer,
    billing: billingInformation,
    billingInformationForm: formReducer('billing', initialBillingState),
    payment,
    products,
    spinner,
    siteConfig,
    siteConfigColorsForm: formReducer('siteConfig.element.colors', initialColors),
    siteConfigFooterForm: formReducer('siteConfig.element.footer', initialFooterInfo),
    siteConfigHeaderForm: formReducer('siteConfig.element.header', initialHeaderInfo),
    siteConfigIntroForm: formReducer('siteConfig.element.intro', initialIntroInfo),
    siteConfigStepsForm: formReducer('siteConfig.element.steps', initialStepsInfo),
    siteConfigSubscriptionsForm: formReducer('ui.productPlans.subscriptions', initialSubscriptionsInfo),
    siteConfigOtherInfoForm: formReducer('siteConfig.element.info', initialOtherInfo),
    ui,
    user,
    userLoginForm: formReducer('user.login', initialLoginState),
    userSignupForm: formReducer('user.signup', initialSignupState),
    userSignupConfirmationForm: formReducer('user.signup.confirmation', initialConfirmationState)
});

export default reducers;
