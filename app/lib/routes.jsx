import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from 'lib/redux-store';

import ChoosePlan from 'containers/ChoosePlan';
import ChooseTemplate from 'containers/ChooseTemplate';
import Home from 'containers/Home';
import Privacy from 'containers/Privacy';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
            <Route name='chooseTemplate' path='/choose-template' component={ChooseTemplate} />
            <Route name='choosePlan' path='/choose-plan' component={ChoosePlan} />
            <Route name='privacy' path='/privacy' component={Privacy} />
        </Route>
    </Router>
);
