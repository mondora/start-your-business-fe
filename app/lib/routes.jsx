import React from 'react';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import store from 'lib/redux-store';

import ChoseTemplate from 'containers/ChoseTemplate';
import Home from 'containers/Home';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';

const history = syncHistoryWithStore(browserHistory, store);

export default (
    <Router history={history}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
            <Route name='choseTemplate' path='/chose-template' component={ChoseTemplate} />
        </Route>
    </Router>
);