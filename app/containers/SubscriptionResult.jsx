import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import {getStoredState} from 'redux-persist';

import {subscribeNewCustomer} from 'actions/payment';

import * as colors from 'lib/colors';
import {subscriptionStatus} from 'lib/subscription-utils';

import Button from 'components/CustomButton';
import PageTeaser from 'components/PageTeaser';

const styles = {
    rowStyle: {
        marginBottom: '60px',
        '@media screen and (min-width: 767px)': {
            margin: '20px auto 60px auto'
        }
    },
    title: {
        margin: 0,
        color: colors.primaryColor,
        fontWeight: 800,
        fontSize: 'calc(30px + 1vw)',
        lineHeight: 'calc(30px + 1vw)'
    }
};

class SubscriptionResult extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        payment: PropTypes.object.isRequired,
        subscribeNewCustomer: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        const {query} = props.location;
        console.log(query);
        const creditCardSuccess = this.isCreditCardSuccess(query);
        if (creditCardSuccess) {
            //need to get data from stored state because of navigation from iframe
            getStoredState({whitelist: ['billing', 'products'], keyPrefix: 'syb:'}, (err, state) => {
                props.subscribeNewCustomer(
                    state.products.chosenPlanId, 
                    state.billing, 
                    query.refId);
            });
        }
    }

    isCreditCardSuccess (query) {
        return query.creditCardSuccess === 'true';
    }
    
    renderContent (title, message, button) {
        return (
            <div>
                <PageTeaser
                    pageTitle={title}
                />
                <div className='container' style={styles.rowStyle}>
                    <h2 style={styles.title}>
                        {message}
                    </h2>
                    {button}
                </div>
            </div>
        );
    }

    renderCreditCardFail () {
        //TODO understand the problem e define the next actions
        return this.renderContent(
            'ATTENZIONE',
            'LE INFORMAZIONI DELLA CARTA DI CREDITO NON SONO CORRETTE',
            <Button
                backgroundColor={colors.darkGrey}
                onClick={() => browserHistory.push('/choose-plan')}
                text='< TORNA INDIETRO'
            />
        );
    }

    renderSubscriptionInProgress () {
        //TODO maybe a spinner?
        return this.renderContent('IN CORSO');
    }

    renderSubscriptionFail () {
        //TODO understand the problem e define the next actions
        return this.renderContent(
            'ATTENZIONE',
            'LA SOTTOSCRIZIONE NON È STATA TERMINATA',
            <Button
                backgroundColor={colors.darkGrey}
                onClick={() => browserHistory.push('/choose-plan')}
                text='< TORNA INDIETRO'
            />
        );
    }

    renderSubscriptionSuccess () {
        return this.renderContent(
            'COMPLIMENTI!',
            'PAGAMENTO ANDATO A BUON FINE',
            <Button
                backgroundColor={colors.darkGrey}
                onClick={() => browserHistory.push('/')}
                text='VAI ALL’AREA UTENTI>'
            />
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

const mapStateToProps = (state) => {
    return {
        payment: state.payment
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        subscribeNewCustomer: bindActionCreators(subscribeNewCustomer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(SubscriptionResult));