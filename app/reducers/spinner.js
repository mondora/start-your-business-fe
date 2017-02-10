let asyncCallCounter = 0;

const spinner = (state, {type}) => {
    if (type.endsWith('_START')) {
        asyncCallCounter++;
    }
    if (type.endsWith('_END') || type.endsWith('_FAIL') || type.endsWith('_SUCCESS')) {
        if (asyncCallCounter > 0) {
            asyncCallCounter--;
        }
    }
    return {
        active: asyncCallCounter > 0
    };
};

export default spinner;