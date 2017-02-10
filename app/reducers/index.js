import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import spinner from './spinner';
import user from './user';

const reducers = combineReducers({
    routing: routerReducer,
    spinner,
    user
});

export default reducers;