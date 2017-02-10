import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import products from './products';
import spinner from './spinner';
import user from './user';

const reducers = combineReducers({
    routing: routerReducer,
    products,
    spinner,
    user
});

export default reducers;