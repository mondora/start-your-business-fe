import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import {confirmSignUp, login, sendNewConfirmationCode} from 'actions/user';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

class Root extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.bool,
        children: PropTypes.node,
        confirmSignUp: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        params: PropTypes.object,
        sendNewConfirmationCode: PropTypes.func.isRequired,
        signUpConfirmationForm: PropTypes.object,
        spinner: PropTypes.object,
        user: PropTypes.object
    };

    constructor (props) {
        super(props);
        if (!props.buildSiteMode) {
            //TODO check for businessName and render business site or redirect
            console.log(this.props.params.businessName);
        }
    }

    render () {
        return (
            <div style={{minWidth: 320}}>
                <Header
                    login={this.props.login}
                    loginForm={this.props.loginForm}
                    user={this.props.user}
                />
                {this.props.children}

                {
                    !this.props.buildSiteMode ?
                        <SignUpConfirmationModal
                            confirmSignUp={this.props.confirmSignUp}
                            form={this.props.signUpConfirmationForm}
                            sendNewCode={this.props.sendNewConfirmationCode}
                            signupConfirmation={this.props.user.signup.confirmation}
                            signupConfirmed={this.props.user.isConfirmed}
                            username={this.props.user.username}
                        /> : null
                }

                {!this.props.buildSiteMode ? <Spinner show={this.props.spinner.active} /> : null}
                
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.userLoginForm,
        signUpConfirmationForm: state.userSignupConfirmationForm,
        spinner: state.spinner,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmSignUp: bindActionCreators(confirmSignUp, dispatch),
        login: bindActionCreators(login, dispatch),
        sendNewConfirmationCode: bindActionCreators(sendNewConfirmationCode, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Root));
