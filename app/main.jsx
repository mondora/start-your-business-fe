import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import routes from 'lib/routes';
import store from 'lib/redux-store';

const App = (
    <Provider store={store}>
        {routes}
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
