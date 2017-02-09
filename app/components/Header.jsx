import React, {Component, PropTypes} from 'react';

import LoginButton from 'components/LoginButton';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        top: 10
    },
    text: {
        color: '#ffffff',
        fontSize: 50
    },
    loginContainer: {
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center'
    }
};

export default class Header extends Component {
    static propTypes = {
        user: PropTypes.object
    };

    renderWelcomeWidget () {
        return (
            <div>
                {`Ciao ${this.props.user.username}`}
            </div>
        );
    }

    renderLoginButton () {
        return (
            <div>
                <span
                    style={{color: '#ffffff', fontSize: 20, paddingRight: 10}}
                >
                    {'LOGIN'}
                </span>
                <LoginButton
                    backgroundColor={'#20bda9'}
                    errorMessage={this.props.user.loginErrorMessage}
                    {...this.props}
                />
            </div>
        );
    }

    renderLoginSection () {
        return (
            <div style={styles.loginContainer}>
                {this.props.user.isLoggedIn ? this.renderWelcomeWidget() : this.renderLoginButton()}
            </div>
        );
    }

    render () {
        return (
            <div style={styles.container} >
                <div style={styles.text}>{'logo'}</div>
                {this.renderLoginSection()}
            </div>
        );
    }
}


