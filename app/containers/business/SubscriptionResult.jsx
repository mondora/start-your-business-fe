import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {subscribeNewCustomer} from 'actions/payment';

import * as colors from 'lib/colors';

import SubscriptionResultLoader from 'components/SubscriptionResultLoader';

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

    renderContent (title, message) {
        return (
            <div>
                <div className='container' style={styles.rowStyle}>
                    <h2 style={styles.title}>
                        {message}
                    </h2>
                </div>
            </div>
        );
    }

    render () {
        return (
            <SubscriptionResultLoader
                location={this.props.location}
                payment={this.props.payment}
                renderContent={this.renderContent}
                subscribeNewCustomer={this.props.subscribeNewCustomer}
            />
        );
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