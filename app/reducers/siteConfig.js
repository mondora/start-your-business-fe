import R from 'ramda';
import {modeled} from 'react-redux-form';

import {
    FETCH_SITE_CONFIG_START,
    FETCH_SITE_CONFIG_SUCCESS,
    FETCH_SITE_CONFIG_ERROR
} from 'actions/siteConfig';
import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

export const initialBusinessSite = {
    businessName: null,
    domainName: null
};

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
    facebookPage: 'pagina facebook',
    phoneNumber: '+39 012 3456789',
    twitterAccount: '@twitter_account'
};

export const initialIntroInfo = {
    introTitle: 'CASSETTINE BIOLOGICHE',
    introText: 'Scegliamo i prodotti migliori e te li consegnamo a casa nella formula più adatta alle tue esigenze!'
};

export const initialOtherInfo = {
    textBox: 'Sappiamo che amerai i nostri prodotti, se però necessiti di una formula personalizzata o se vuoi comunicarci qualcosa non esitare a scriverci!',
    textBox1: 'Scopri altro riguardo ai nostri prodotti, sul nostro sito troverai tutte le informazioni che cercavi',
    buttonBox1: 'PER SAPERNE DI PIÙ',
    image1: null,
    textBox2: 'Hai delle domande riguardo al tuo ordine o desideri sospendere le tue consegne?',
    buttonBox2: 'SCRIVICI UN EMAIL',
    image2: null
};

export const initialStepsInfo = {
    stepsTitle: 'COME FUNZIONA',
    titleStep1: 'SCEGLI UNA TRA LE TRE SOTTOSCRIZIONI',
    titleStep2: 'RISPARMI E NON DOVRAI PENSARE A NULLA',
    titleStep3: 'POTRAI DISISCRIVERTI QUANDO VUOI',
    textStep1: 'Abbiamo pensato a tutti, ma se desideri personalizzare il tuo ordine, chiama al 012-3456789',
    textStep2: 'Ogni mese ti arriverà una cassettina con frutta e verdura biologica di stagione',
    textStep3: 'Se non sei soddisfatto del servizio, puoi decidere di non ricevere più le nostre cassettine'
};

const initialSiteConfig = {
    colors: initialColors,
    footer: initialFooterInfo,
    header: initialHeaderInfo,
    info: initialOtherInfo,
    intro: initialIntroInfo,
    logo: null,
    site: initialBusinessSite,
    steps: initialStepsInfo,
    subscriptionsTitle: 'SCEGLI LA TUA SOTTOSCRIZIONE',
    teaserImages: {
        image1: null,
        image2: null,
        image3: null
    },
    templateId: templatesIds.TEMPLATE_1,
    userPool: null
};

const initialState = {
    element: initialSiteConfig,
    isFetching: false,
    fetchError: null
};

function siteConfig (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case FETCH_SITE_CONFIG_START:
            return {
                element: initialSiteConfig,
                isFetching: true,
                fetchError: null
            };
        case FETCH_SITE_CONFIG_SUCCESS:
            //TODO check not empty payload
            return {
                element: payload.length > 0 ? payload[0].siteConfig : initialSiteConfig,
                isFetching: false,
                fetchError: null
            };
        case FETCH_SITE_CONFIG_ERROR:
            return {
                element: initialSiteConfig,
                isFetching: false,
                fetchError: payload
            };
        case 'SET_IMAGE_PATH':
            return R.set(R.lensPath(action.field), action.imagePath, state);
        default:
            return state;
    }
}

export default modeled(siteConfig, 'siteConfig');
