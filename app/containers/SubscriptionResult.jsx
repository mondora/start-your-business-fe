import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

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
        payment: PropTypes.object.isRequired
    };

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
        if (this.props.location.query.creditCardSuccess === 'true') {
            switch (this.props.payment.subscriptionSuccess) {
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

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(SubscriptionResult));
