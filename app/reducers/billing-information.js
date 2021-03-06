import {modeled} from 'react-redux-form';

export const initialBillingState = {
    givenName: '',
    familyName: '',
    company: '',
    pIVA: '',
    email: '',
    phoneNumber: '',
    address: '',
    houseNumber: '',
    CAP: '',
    city: '',
    province: '',
    region: '',
    country: '',
    termsCheck: false
};

const billingInformation = (state = initialBillingState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default modeled(billingInformation, 'billing');