import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPaymentParams} from 'actions/payment';

import CreditCardForm from 'components/CreditCardForm';

import * as colors from 'lib/colors';

const styles = {
    formBox: {
        backgroundColor: colors.backgroundLightGrey,
        padding: 20,
        marginBottom: 40
    },
    boxTitle: {
        fontWeight: '700',
        fontSize: '1.3em'
    }
};

class PaymentInfo extends Component {
    static propTypes = {
        getPaymentParams: PropTypes.func.isRequired,
        payment: PropTypes.object
    };

    render () {
        return (
            <div className='container'>
                {'SCEGLI IL METODO DI PAGAMENTO'}
                <Row>
                    <Col xs={12}>
                        <div style={styles.formBox}>
                            <p style={styles.boxTitle}>
                                {'3. Pagamento:'}
                            </p>
                            <CreditCardForm
                                getPaymentParams={this.props.getPaymentParams}
                                paymentPageParams={this.props.payment.pageParams}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
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
        getPaymentParams: bindActionCreators(getPaymentParams, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(PaymentInfo));
