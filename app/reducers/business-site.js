import {modeled} from 'react-redux-form';

import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

export const initialColors = {
    mainColor: colors.templatePrimaryColor
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

export const initialStepsInfo = {
    stepsTitle: 'COME FUNZIONA',
    titleStep1: 'SCEGLI UNA TRA LE TRE SOTTOSCRIZIONI',
    titleStep2: 'RISPARMI E NON DOVRAI PENSARE A NULLA',
    titleStep3: 'POTRAI DISISCRIVERTI QUANDO VUOI',
    textStep1: `Abbiamo pensato a tutti, ma se desideri
                personalizzare il tuo ordine, chiama al 012-3456789`,
    textStep2: `Ogni mese ti arriverà una cassettina con
                frutta e verdura biologica di stagione`,
    textStep3: `Se non sei soddisfatto del servizio, puoi decidere di
                non ricevere più le nostre cassettine`
};

export const initialIntroInfo = {
    introTitle: 'CASSETTINE BIOLOGICHE',
    textIntro: `Scegliamo i prodotti migliori e te li consegnamo a
                casa nella formula più adatta alle tue esigenze!`
};

const defaultState = {
    editMode: null,
    siteConfig: {
        colors: initialColors,
        footer: initialFooterInfo,
        header: initialHeaderInfo,
        steps: initialStepsInfo,
        logoId: null,
        teaserImages: [{
            id: null
        }],
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
