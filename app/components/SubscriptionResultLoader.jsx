import React, {Component, PropTypes} from 'react';
import {getStoredState} from 'redux-persist';

import {subscriptionStatus} from 'lib/subscription-utils';

export default class SubscriptionResultLoader extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        payment: PropTypes.object.isRequired,
        renderContent: PropTypes.func.isRequired,
        subscribeNewCustomer: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        const {query} = props.location;
        const creditCardSuccess = this.isCreditCardSuccess(query);
        if (creditCardSuccess) {
            //need to get data from stored state because of navigation from iframe
            getStoredState({whitelist: ['billing', 'products', 'siteConfig', 'siteProduct'], keyPrefix: 'syb:'}, (err, state) => {
                props.subscribeNewCustomer(
                    state.products.chosenPlanId,
                    state.billing,
                    state.siteConfig.element,
                    query.refId,
                    state.siteProduct.productPlans
                );
            });
        }
    }

    isCreditCardSuccess (query) {
        return query.creditCardSuccess === 'true';
    }

    renderCreditCardFail () {
        //TODO understand the problem e define the next actions
        return this.props.renderContent(
            <p>
                {'ATTENZIONE'}<br />
                {'LE INFORMAZIONI DELLA CARTA DI CREDITO NON SONO CORRETTE'}
            </p>,
            {
                onClick: () => window.location = '#/choose-plan',
                text: '< TORNA INDIETRO'
            }
        );
    }

    renderSubscriptionInProgress () {
        //TODO maybe a spinner?
        return this.props.renderContent('IN CORSO');
    }

    renderSubscriptionFail () {
        //TODO understand the problem e define the next actions
        return this.props.renderContent(
            <p>
                {'ATTENZIONE'}<br />
                {'LA SOTTOSCRIZIONE NON È STATA TERMINATA'}
            </p>,
            {
                onClick: () => window.location = '#/choose-plan',
                text: '< TORNA INDIETRO'
            }
        );
    }

    renderSubscriptionSuccess () {
        return this.props.renderContent(
            <p>
                {'COMPLIMENTI!'}<br />
                {'PAGAMENTO ANDATO A BUON FINE'}
            </p>,
            {
                onClick: () => window.location = '#/account',
                text: 'VAI ALL’AREA UTENTI>'
            }
        );
    }

    render () {
        if (this.isCreditCardSuccess(this.props.location.query)) {
            switch (this.props.payment.subscriptionStatus) {
                case subscriptionStatus.IN_PROGRESS:
                    return this.renderSubscriptionInProgress();
                case subscriptionStatus.SUCCESS:
                    return this.renderSubscriptionSuccess();
                case subscriptionStatus.FAIL:
                    return this.renderSubscriptionFail();
            }
        } else {
            return this.renderCreditCardFail();
        }
    }
}
