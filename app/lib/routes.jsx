import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from 'lib/redux-store';

import BuildSite from 'containers/BuildSite';
import ChoosePlan from 'containers/ChoosePlan';
import CreditCardResult from 'containers/CreditCardResult';
import Home from 'containers/Home';
import Privacy from 'containers/Privacy';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';
import SubscriptionResult from 'containers/SubscriptionResult';

import BusinessHome01 from 'containers/business01/Home';
import BusinessRoot01 from 'containers/business01/Root';
import BusinessHome02 from 'containers/business02/Home';
import BusinessRoot02 from 'containers/business02/Root';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
            <Route name='buildSite' path='/build-site' component={BuildSite} private={true} />
            <Route name='choosePlan' path='/choose-plan' component={ChoosePlan} private={true} />
            <Route name='privacy' path='/privacy' component={Privacy} />
            <Route name='subscriptionResult' path='/subscription-result' component={SubscriptionResult} private={true} />
        </Route>

        <Route name='creditCardResult' path='/credit-card-result' component={CreditCardResult} />

        <Route name='BusinessRoot01' component={BusinessRoot01}>
            <Route name='BusinessHome01' path='/:businessName' component={BusinessHome01} />
        </Route>

        <Route name='BusinessRoot02' component={BusinessRoot02}>
            <Route name='BusinessHome02' path='/:businessName' component={BusinessHome02} />
        </Route>
    </Router>
);
