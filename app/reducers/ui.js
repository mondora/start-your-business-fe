import {SET_EDIT_MODE} from 'actions/ui';

export default function ui (state = {editMode: 0}, action) {
    const {type, payload} = action;
    switch (type) {
        case SET_EDIT_MODE:
            return {editMode: payload};
        default:
            return state;
    }
}
