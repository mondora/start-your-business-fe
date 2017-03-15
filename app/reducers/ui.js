import {SET_EDIT_MODE} from 'actions/ui';

export const initialSubscriptionsInfo = {
    subscriptionsTitle: 'SCEGLI LA TUA SOTTOSCRIZIONE',

    subscriptionType1: 'CASSETTINA PICCOLA',
    subscriptionFeature1a: 'Adatta per un consumo mensile di una persona',
    subscriptionFeature1b: 'Assortimento: verdura mista (frutta a richiesta)',
    subscriptionPrice1: '35',
    subscriptionFrequency1: 'Monthly',
    subscriptionImage1: null,

    subscriptionType2: 'CASSETTINA MEDIA',
    subscriptionFeature2a: 'Adatta per un consumo mensile di 2/3 persone',
    subscriptionFeature2b: 'Assortimento: verdura mista (frutta a richiesta)',
    subscriptionPrice2: '45',
    subscriptionFrequency2: 'Monthly',
    subscriptionImage2: null,

    subscriptionType3: 'CASSETTINA GRANDE',
    subscriptionFeature3a: 'Adatta per un consumo mensile di 4/5 persone',
    subscriptionFeature3b: 'Assortimento: verdura mista (frutta a richiesta)',
    subscriptionPrice3: '55',
    subscriptionFrequency3: 'Monthly',
    subscriptionImage3: null
};

const initialState = {
    editMode: 0,
    productPlans: {
        subscriptions: initialSubscriptionsInfo
    }
};

export default function ui (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: payload
            };
        default:
            return state;
    }
}
