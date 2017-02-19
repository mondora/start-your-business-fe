
const defaultState = {
    editMode: null,
    siteConfig: {
        header: {
            emailAddress: 'info@emaildisupporto.it',
            phoneNumber: '+39 012 3456789'
        },
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

export default businessSite;