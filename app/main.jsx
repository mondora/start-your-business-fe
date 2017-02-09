import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import routes from 'lib/routes';

import reducers from './reducers';

const logger = createLogger({
    collapsed: true
});

const store = compose(
    applyMiddleware(
        thunk,
        logger
    )
)(createStore)(reducers);

const App = (
    <Provider store={store}>
        {routes}
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
