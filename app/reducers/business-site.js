import {modeled} from 'react-redux-form';

export const initialHeaderInfo = {
    emailAddress: 'info@emaildisupporto.it',
    phoneNumber: '+39 012 3456789'
};

const defaultState = {
    editMode: null,
    siteConfig: {
        footer: {
            bottom: '© 2017 Nome Azienda - PIVA: 0123456789',
            companyName: 'Nome Azienda',
            line1: 'Via Giosuè Carducci, 10',
            line2: '20100 Milano (MI)',
            line3: 'Email: info@maildisupporto.it',
            line4: 'Tel: 012-3456789'
        },
        header: initialHeaderInfo,
        logoId: null,
        mainColorCode: null,
        templateId: null
    }
};

const businessSite = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_EDIT_MODE':
            return {
                ...state,
                editMode: action.editMode
            };
        default:
            return state;
    }
};

export default modeled(businessSite, 'businessSite');