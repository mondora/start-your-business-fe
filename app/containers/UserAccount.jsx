import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

import AccountSettingsForm from 'components/AccountSettingsForm';
import PageTeaser from 'components/PageTeaser';

const styles = {
    col: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px'
    },
    row: {
        margin: '0 20px 25px 20px'
    }
};

class UserAccount extends Component {
    static propTypes = {
        signUpForm: PropTypes.object
    };

    renderPaymentInfo () {
        return (
            <Row style={styles.row}>
                <Col xs={12} style={styles.col}>
                    {'DETTAGLI PAGAMENTO:'}
                    {'Metodo scelto:'}
                    {'Stato:'}
                    {'In scadenza il:'}
                </Col>
            </Row>
        );
    }

    renderLastTemplates () {
        return (
            <Col xs={12} md={6} style={styles.col}>
                {'ULTIMI TEMPLATE ONLINE:'}
            </Col>
        );
    }

    renderLastDrafts () {
        return (
            <Col xs={12} md={6} style={styles.col}>
                {'ULTIME BOZZE SALVATE:'}
            </Col>
        );
    }

    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={'IL MIO ACCOUNT'}
                />
                <div className='container'>
                    <Row style={styles.row}>
                        <Col xs={12} md={6} style={styles.col}>
                            <AccountSettingsForm form={this.props.signUpForm} />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        {this.renderLastTemplates()}
                        {this.renderLastDrafts()}
                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12} md={6} style={styles.col}>
                            {'STORIA PAGAMENTI:'}
                        </Col>
                        <Col xs={12} md={6} style={styles.col}>
                            {'STORIA SOTTOSCRIZIONI:'}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signUpForm: state.userSignupForm
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserAccount));
