import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {StyleRoot} from 'radium';

import routes from 'lib/routes';
import store from 'lib/redux-store';

const App = (
    <StyleRoot>
        <Provider store={store}>
            {routes}
        </Provider>
    </StyleRoot>
);

ReactDOM.render(App, document.getElementById('root'));
