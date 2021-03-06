import axios from 'axios';
import browser from 'detect-browser';

import {API_URL} from 'config';

//TODO enable credentials
const instance = axios.create({
    baseURL: API_URL,
    withCredentials: false
});

// Avoid using browser cache in IE
instance.interceptors.request.use(config => {
    if (browser.name === 'ie') {
        config.params = config.params || {};
        config.params._ = Date.now();
    }
    return config;
});

export default instance;