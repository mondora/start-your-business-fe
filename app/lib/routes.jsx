import React from 'react';
import {browserHistory ,Router, Route} from 'react-router';

import Root from 'containers/Root';

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Root} name='root' />
    </Router>
);
