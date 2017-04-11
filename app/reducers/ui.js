import {SET_EDIT_MODE} from 'actions/ui';

const initialState = {
    editMode: null
};

export default function ui (state = initialState, action) {
    switch (action.type) {
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: action.payload
            };
        default:
            return state;
    }
}
