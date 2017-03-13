import axios from 'lib/axios';
import {fetch as fetchFn} from 'lib/fetch';

export const FETCH_DRAFT_TEMPLATE_START = 'FETCH_DRAFT_TEMPLATE_START';
export const FETCH_DRAFT_TEMPLATE_SUCCESS = 'FETCH_DRAFT_TEMPLATE_SUCCESS';
export const FETCH_DRAFT_TEMPLATE_ERROR = 'FETCH_DRAFT_TEMPLATE_ERROR';

export const CREATE_DRAFT_TEMPLATE_START = 'CREATE_DRAFT_TEMPLATE_START';
export const CREATE_DRAFT_TEMPLATE_SUCCESS = 'CREATE_DRAFT_TEMPLATE_SUCCESS';
export const CREATE_DRAFT_TEMPLATE_ERROR = 'CREATE_DRAFT_TEMPLATE_ERROR';

const _fetch = fetchFn(
    FETCH_DRAFT_TEMPLATE_START,
    FETCH_DRAFT_TEMPLATE_SUCCESS,
    FETCH_DRAFT_TEMPLATE_ERROR
);

export const fetch = businessId => _fetch(`/businesses/${businessId}`);

export const createOrUpdateTemplateDraft = (
    id,
    templateId,
    logoUrl,
    color,
    imagesUrl,
    mobilePhoneNumber,
    phoneNumber
) => dispatch => {
    dispatch({
        type: 'CREATE_DRAFT_TEMPLATE_START'
    });
    axios.post('/businesses', {
        id,
        templateId,
        logoUrl,
        color,
        imagesUrl,
        mobilePhoneNumber,
        phoneNumber
    })
        .then(() => dispatch({
            type: 'CREATE_DRAFT_TEMPLATE_SUCCESS'
        }))
        .catch(() => dispatch({
            type: 'CREATE_DRAFT_TEMPLATE_ERROR'
        }));
};