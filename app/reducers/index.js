import {formReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import billingInformation, {initialBillingState} from './billing-information';
import siteConfig, {
    initialBusinessSite,
    initialColors,
    initialFooterInfo,
    initialHeaderInfo,
    initialIntroInfo,
    initialOtherInfo,
    initialStepsInfo
} from './siteConfig';
import payment from './payment';
import products from './products';
import spinner from './spinner';
import user, {
    initialBasicUserInfo,
    initialConfirmationState,
    initialLoginState,
    initialPasswordsState,
    initialSignupState
} from './user';
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
    siteConfigOtherInfoForm: formReducer('siteConfig.element.info', initialOtherInfo),
    siteConfigStepsForm: formReducer('siteConfig.element.steps', initialStepsInfo),
    siteConfigSubscriptionsForm: formReducer('ui.productPlans.subscriptions', initialSubscriptionsInfo),
    siteNameForm: formReducer('siteConfig.element.site', initialBusinessSite),
    ui,
    user,
    //TODO find another way to dynamically manage the form for the right site
    userBasicInfoForm: formReducer('user.updateInfo', initialBasicUserInfo),
    userLoginForm: formReducer('user.login', initialLoginState),
    userPasswordsForm: formReducer('user.updatePassword', initialPasswordsState),
    userSignupForm: formReducer('user.signup', initialSignupState),
    userSignupConfirmationForm: formReducer('user.signup.confirmation', initialConfirmationState)
});

export default reducers;
