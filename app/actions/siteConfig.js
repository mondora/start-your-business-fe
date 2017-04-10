import md5 from 'js-md5';

import {updateProduct} from 'actions/payment';

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

export const upsertSiteConfig = (businessId, siteConfig, username, subscriptions) => dispatch => {
    dispatch({
        type: UPSERT_SITE_CONFIG_START
    });
    console.log(businessId);
    console.log(siteConfig);
    console.log(username);
    axios.post('/businesses', {
        siteConfig,
        userId: md5(username)
    })
        .then(() =>  {
            dispatch({
                type: UPSERT_SITE_CONFIG_SUCCESS
            });
            updateProduct(dispatch, businessId, subscriptions);
        })
        .catch(() => dispatch({
            type: UPSERT_SITE_CONFIG_ERROR
        }));
};

export const setImagePath = (field, imagePath) => ({
    type: 'SET_IMAGE_PATH',
    field,
    imagePath
});