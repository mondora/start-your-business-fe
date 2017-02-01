const jsdom = require('jsdom').jsdom;

// Setup fake DOM
global.document = jsdom();
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};

// Setup configuration
global.window.APP_CONFIG = {};

global.DOMParser = class  {
    parseFromString (i) {

        return i;
    }
};

global.scrollTo = () => {};