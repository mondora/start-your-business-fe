import axios from 'lib/axios';
import {fetch as fetchFn} from 'lib/fetch';

export const FETCH_SITE_CONFIG_START = 'FETCH_SITE_CONFIG_START';
export const FETCH_SITE_CONFIG_SUCCESS = 'FETCH_SITE_CONFIG_SUCCESS';
export const FETCH_SITE_CONFIG_ERROR = 'FETCH_SITE_CONFIG_ERROR';

export const UPSERT_SITE_CONFIG_START = 'UPSERT_SITE_CONFIG_START';
export const UPSERT_SITE_CONFIG_SUCCESS = 'UPSERT_SITE_CONFIG_SUCCESS';
export const UPSERT_SITE_CONFIG_ERROR = 'UPSERT_SITE_CONFIG_ERROR';

const _fetch = fetchFn(
    FETCH_SITE_CONFIG_START,
    FETCH_SITE_CONFIG_SUCCESS,
    FETCH_SITE_CONFIG_ERROR
);

export const fetch = businessId => _fetch(`/businesses/${businessId}`);

export const upsertSiteConfig = siteConfig => dispatch => {
    dispatch({
        type: 'UPSERT_SITE_CONFIG_START'
    });
    axios.post('/businesses', siteConfig)
        .then(() => dispatch({
            type: 'UPSERT_SITE_CONFIG_SUCCESS'
        }))
        .catch(() => dispatch({
            type: 'UPSERT_SITE_CONFIG_ERROR'
        }));
};

export const setLogoImage = logoImage => ({
    type: 'SET_LOGO_IMAGE',
    logoImage
});