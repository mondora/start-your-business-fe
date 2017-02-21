import {modeled} from 'react-redux-form';

import {templatesIds} from 'lib/business-site-utils';

export const initialColors = {
    mainColor: '#8cc63f'
};

export const initialFooterInfo = {
    bottom: '© 2017 Nome Azienda - PIVA: 0123456789',
    companyName: 'Nome Azienda',
    line1: 'Via Giosuè Carducci, 10',
    line2: '20100 Milano (MI)',
    line3: 'Email: info@maildisupporto.it',
    line4: 'Tel: 012-3456789'
};

export const initialHeaderInfo = {
    emailAddress: 'info@emaildisupporto.it',
    phoneNumber: '+39 012 3456789'
};

const defaultState = {
    editMode: null,
    siteConfig: {
        colors: initialColors,
        footer: initialFooterInfo,
        header: initialHeaderInfo,
        logoId: null,
        templateId: templatesIds.TEMPLATE_1
    }
};

const businessSite = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_EDIT_MODE':
            return {
                ...state,
                editMode: action.editMode
            };
        case 'SET_TEMPLATE':
            return {
                ...state,
                siteConfig: {
                    ...state.siteConfig,
                    templateId: action.templateId 
                }
            };
        default:
            return state;
    }
};

export default modeled(businessSite, 'businessSite');