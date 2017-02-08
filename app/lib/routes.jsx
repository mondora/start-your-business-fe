import React from 'react';
import {browserHistory, Router, Route} from 'react-router';

import Home from 'containers/Home';
import Root from 'containers/Root';
import SignUp from 'containers/SignUp';

export default (
    <Router history={browserHistory}>
        <Route name='root' component={Root}>
            <Route name='home' path='/' component={Home} />
            <Route name='signup' path='/signup' component={SignUp} />
        </Route>
    </Router>
);