import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';

import {subscribeNewCustomer} from 'actions/payment';

import * as colors from 'lib/colors';

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

const subscriptionStatus = {
    IN_PROGRESS: 1,
    SUCCESS: 2,
    FAIL: 3
};

class PaymentResult extends Component {
    static propTypes = {
        billing: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        payment: PropTypes.object.isRequired,
        products: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        console.log('constructor');
        console.log(props.location);
        this.state = {
            subscriptionResult: subscriptionStatus.IN_PROGRESS
        };
        if (this.isCreditCardSuccess(props.location.query)) {
            //TODO call subscription action
        }
    }

    componentWillReceiveProps (nextProps) {
        console.log('receive props');
        console.log(nextProps);
        this.setState({
            subscriptionResult: nextProps.payment.subscriptionSuccess
        });
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
            switch (this.state.subscriptionResult) {
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
        billing: state.billing,
        payment: state.payment,
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        subscribeNewCustomer: bindActionCreators(subscribeNewCustomer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Radium(PaymentResult));
