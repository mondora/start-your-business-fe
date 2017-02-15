import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import {confirmSignUp, login} from 'actions/user';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

class RootContainer extends Component {
    static propTypes = {
        children: PropTypes.node,
        confirmSignUp: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        spinner: PropTypes.object,
        user: PropTypes.object
    };

    render () {
        return (
            <div style={{minWidth: 320}}>
                <Header
                    login={this.props.login}
                    loginForm={this.props.loginForm}
                    user={this.props.user}
                />
                {this.props.children}
                <SignUpConfirmationModal
                    confirmSignUp={this.props.confirmSignUp}
                    signupConfirmation={this.props.user.signup.confirmation}
                    signupConfirmed={this.props.user.isConfirmed}
                    username={this.props.user.username}
                />
                <Spinner show={this.props.spinner.active} />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.userLoginForm,
        spinner: state.spinner,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmSignUp: bindActionCreators(confirmSignUp, dispatch),
        login: bindActionCreators(login, dispatch)
    };
};


const Root = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

export default Radium(Root);
