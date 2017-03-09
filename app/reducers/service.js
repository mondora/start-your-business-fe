const defaultState = {
    renderingSite: null
};

const service = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_RENDERING_SITE':
            return {
                ...state,
                renderingSite: action.data
            };
        default:
            return state;
    }
};

export default service;