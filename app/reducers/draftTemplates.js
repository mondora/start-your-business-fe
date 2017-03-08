import {
    FETCH_DRAFT_TEMPLATES_START,
    FETCH_DRAFT_TEMPLATES_SUCCESS,
    FETCH_DRAFT_TEMPLATES_ERROR
} from 'actions/draftTemplates';

const initialState = {
    elements: [],
    isFetching: false,
    fetchError: null
};

export default function draftTemplates (state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case FETCH_DRAFT_TEMPLATES_START:
            return {
                elements: [],
                isFetching: true,
                fetchError: null
            };
        case FETCH_DRAFT_TEMPLATES_SUCCESS:
            return {
                elements: payload,
                isFetching: false,
                fetchError: null
            };
        case FETCH_DRAFT_TEMPLATES_ERROR:
            return {
                elements: [],
                isFetching: false,
                fetchError: payload
            };
        default:
            return state;
    }
}
