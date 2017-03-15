import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

import AccountSettingsForm from 'components/AccountSettingsForm';
import ChangePasswordForm from 'components/ChangePasswordForm';
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
                        <Col xs={12} md={6} style={styles.col}>
                            <ChangePasswordForm form={this.props.signUpForm} />
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12} md={6} style={styles.col}>
                            {'FATTURAZIONE E PAGAMENTI:'}
                        </Col>
                        <Col xs={12} md={6} style={styles.col}>
                            {'MODIFICA METODO DI PAGAMENTO:'}
                            {'AGGIORNA IL TUO SITO:'}
                            {'STORIA PAGAMENTI:'}
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
