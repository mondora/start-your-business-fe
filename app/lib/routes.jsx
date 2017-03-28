import React from 'react';
import ReactGA from 'react-ga';
import {useRouterHistory, Router, Route} from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import {Provider} from 'react-redux';

import {GA_TRACKING_ID, NODE_ENV} from 'config';

import store from 'lib/redux-store';

import BuildSite from 'containers/BuildSite';
import ChoosePlan from 'containers/ChoosePlan';
import CreditCardResult from 'containers/CreditCardResult';
import Home from 'containers/Home';
import Privacy from 'containers/Privacy';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';
import SubscriptionResult from 'containers/SubscriptionResult';
import UpdateSite from 'containers/UpdateSite';
import UserAccount from 'containers/UserAccount';

import BusinessHome from 'containers/business/Home';
import BusinessPaymentInfo from 'containers/business/PaymentInfo';
import BusinessRoot from 'containers/business/Root';
import BusinessSubscriptionResult from 'containers/business/SubscriptionResult';
import BusinessUserInfo from 'containers/business/UserInfo';

ReactGA.initialize(GA_TRACKING_ID);

function logPageView () {
    if (NODE_ENV === 'production') {
        ReactGA.set({page: window.location.pathname});
        ReactGA.pageview(window.location.pathname);
    }
}

export default (
    <Provider store={store}>
        <Router history={useRouterHistory(createHistory)({})} onUpdate={logPageView}>
            <Route name='root' component={Root}>
                <Route name='home' path='/' component={Home} />
                <Route name='signup' path='/signup' component={SignUp} />
                <Route name='buildSite' path='/build-site/:businessId' component={BuildSite} private={true} />
                <Route name='updateSite' path='/update-site/:businessId' component={UpdateSite} private={true} />
                <Route name='choosePlan' path='/choose-plan' component={ChoosePlan} private={true} />
                <Route name='privacy' path='/privacy' component={Privacy} />
                <Route name='subscriptionResult' path='/subscription-result' component={SubscriptionResult} private={true} />
                <Route name='account' path='/account' component={UserAccount} private={true} />
            </Route>

            <Route name='creditCardResult' path='/credit-card-result' component={CreditCardResult} />

            <Route name='businessRoot' component={BusinessRoot}>
                <Route name='bHome' path='/:businessName' component={BusinessHome} />
                <Route name='bUserInfo' path='/:businessName/user-info' component={BusinessUserInfo} private={true} />
                <Route name='bPaymentInfo' path='/:businessName/payment-info' component={BusinessPaymentInfo} private={true} />
                <Route name='bSubscriptionResult' path='/:businessName/subscription-result' component={BusinessSubscriptionResult} private={true} />
            </Route>
        </Router>
    </Provider>
);
