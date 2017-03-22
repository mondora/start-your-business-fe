import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import Radium from 'radium';

import * as colors from 'lib/colors';

import LoginButton from 'components/LoginButton';
import SignUpButton from 'components/SignUpButton';
import UserMenu from 'components/UserMenu';

const styles = {
    headerLogo: {
        height: 80,
        '@media screen and (max-width: 767px)': {
            height: 'auto',
            marginBottom: 20,
            textAlign: 'center'
        }
    },
    loginContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 80,
        '@media screen and (max-width: 767px)': {
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    loginButtons: {
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
};

class Header extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        logout: PropTypes.func.isRequired,
        user: PropTypes.object
    };

    renderWelcomeWidget () {
        return (
            <UserMenu
                logout={this.props.logout}
                user={this.props.user}
            />
        );
    }

    renderButtons () {
        return (
            <div style={styles.loginButtons}>
                <div style={{marginRight: 10}}>
                    <LoginButton
                        backgroundColor={colors.transparent}
                        border={`1px solid ${colors.white}`}
                        height={40}
                        errorMessage={this.props.user.loginErrorMessage}
                        form={this.props.loginForm}
                        login={this.props.login}
                        loginState={this.props.user.login}
                        {...this.props}
                    />

                </div>
                <SignUpButton
                    height={40}
                    backgroundColor={colors.primaryColor}
                />
            </div>
        );
    }

    renderLoginSection () {
        return (
            <div style={styles.loginContainer}>
                {this.props.user.isLoggedIn ? this.renderWelcomeWidget() : this.renderButtons()}
            </div>
        );
    }

    render () {
        return (
            <div className='container' style={{position: 'absolute', width: '100%'}}>
                <Row style={{padding: '20px 0'}}>
                    <Col xs={12} sm={6}>
                        <div style={styles.headerLogo}>
                            <img
                                onClick={() => window.location = '#/'}
                                src='/_assets/images/common/logo.png'
                                style={{
                                    cursor: 'pointer',
                                    maxHeight: 80
                                }}
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        {this.renderLoginSection()}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Radium(Header);
