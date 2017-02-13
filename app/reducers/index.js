import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import payment from './payment';
import products from './products';
import spinner from './spinner';
import user from './user';

const reducers = combineReducers({
    routing: routerReducer,
    payment,
    products,
    spinner,
    user
});

export default reducers;