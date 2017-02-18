import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from 'lib/redux-store';

import BuildSite from 'containers/BuildSite';
import ChoosePlan from 'containers/ChoosePlan';
import Home from 'containers/Home';
import PaymentResult from 'containers/PaymentResult';
import Privacy from 'containers/Privacy';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
            <Route name='buildSite' path='/build-site' component={BuildSite} />
            <Route name='choosePlan' path='/choose-plan' component={ChoosePlan} />
            <Route name='privacy' path='/privacy' component={Privacy} />
            <Route name='paymentResult' path='/payment-result' component={PaymentResult} />
        </Route>
    </Router>
);
