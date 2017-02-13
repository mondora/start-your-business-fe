import {formReducer, modelReducer} from 'react-redux-form';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import billingInformation from './billing-information';
import payment from './payment';
import products from './products';
import spinner from './spinner';
import user from './user';

const reducers = combineReducers({
    routing: routerReducer,
    payment,
    products,
    spinner,
    user,
    billingInformation: modelReducer('billingInformation', billingInformation),
    billingInformationForm: formReducer('billingInformation', billingInformation)
});

export default reducers;