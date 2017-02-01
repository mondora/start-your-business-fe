import React from 'react';
import {Router, Route} from 'react-router';

import history from 'lib/history';
import Root from 'containers/Root';

export default (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        <Route path='/' component={Root} name='root' />
    </Router>
);
