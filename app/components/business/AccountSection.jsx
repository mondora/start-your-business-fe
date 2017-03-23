import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import LoginModal from 'components/LoginModal';
import SignUpModal from 'components/business/SignUpModal';

const commonStyle = {
    accountLink: {
        cursor: 'pointer',
        padding: '0 10px'
    },
    accountLinksWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: 0,
        height: 30
    }
};

class AccountSection extends Component {
    static propTypes = {
        accountWrpStyle: PropTypes.object,
        buildSiteMode: PropTypes.number,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        loginState: PropTypes.object.isRequired,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object.isRequired,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showSignUpModal: false
        };
    }

    renderModals () {
        const {
            siteConfig,
            loginForm,
            login,
            loginState,
            signUpForm,
            signUpUser,
            signUpState
        } = this.props;
        return (
            <div>
                <LoginModal
                    backgroundColor={siteConfig.colors.mainColor}
                    businessUserPool={siteConfig.userPool}
                    form={loginForm}
                    login={login}
                    loginState={loginState}
                    onClose={() => this.setState({showLoginModal: false})}
                    show={this.state.showLoginModal}
                />
                <SignUpModal
                    backgroundColor={siteConfig.colors.mainColor}
                    businessUserPool={siteConfig.userPool}
                    form={signUpForm}
                    login={login}
                    onClose={() => this.setState({showSignUpModal: false})}
                    show={this.state.showSignUpModal}
                    signUpUser={signUpUser}
                    signUpState={signUpState}
                />
            </div>
        );
    }

    render () {
        const onClickLogin = this.props.buildSiteMode ? null : () => this.setState({showLoginModal: true});
        const onClickSignUp = this.props.buildSiteMode ? null : () => this.setState({showSignUpModal: true});
        return (
            <div
                style={{
                    ...commonStyle.accountLinksWrp,
                    ...this.props.accountWrpStyle
                }}
            >
                <div>{'|'}</div>
                <div style={commonStyle.accountLink} onClick={onClickLogin}>
                    {'LOGIN'}
                </div>
                <div>{'|'}</div>
                <div style={commonStyle.accountLink} onClick={onClickSignUp}>
                    {'REGISTRATI'}
                </div>
                <div>{'|'}</div>
                {this.renderModals()}
            </div>
        );
    }
}
export default Radium(AccountSection);
