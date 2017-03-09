import React, {Component, PropTypes} from 'react';

//Container is renderized inside Zuora credit card hosted page (iframe)
export default class CreditCardResult extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        const {pathname, query} = props.location;
        const creditCardSuccess = this.isCreditCardSuccess(query);
        const basePath = this.getBasePath(pathname);
        window.top.location.href = `${basePath}/subscription-result?creditCardSuccess=${creditCardSuccess}&refId=${query.refId}`;
    }

    getBasePath (pathname) {
        return pathname.replace('/credit-card-result', '');
    }

    isCreditCardSuccess (queryString) {
        let success = false;
        if (queryString && queryString.success) {
            const successParam = queryString.success;
            success = Array.isArray(successParam) ? this.checkMultiple(successParam) : this.checkSingle(successParam);
        }
        return success;
    }

    checkMultiple (successParam) {
        let success = true;
        successParam.forEach(el => {
            success = success && this.checkSingle(el);
        });
        return success;
    }

    checkSingle (successParam) {
        return successParam === 'true';
    }

    render () {
        return null;
    }
}