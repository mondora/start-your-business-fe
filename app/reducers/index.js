import {combineReducers} from 'redux';
import spinner from './spinner';
import user from './user';

const reducers = combineReducers({
    spinner,
    user
});

export default reducers;