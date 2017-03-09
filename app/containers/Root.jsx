import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import {setRenderingSite} from 'actions/service';
import {confirmSignUp, login, sendNewConfirmationCode} from 'actions/user';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

import {userHasAccess} from 'lib/auth-utils';

class Root extends Component {
    static propTypes = {
        children: PropTypes.node,
        confirmSignUp: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        routes: PropTypes.array.isRequired,
        sendNewConfirmationCode: PropTypes.func.isRequired,
        setRenderingSite: PropTypes.func.isRequired,
        signUpConfirmationForm: PropTypes.object,
        spinner: PropTypes.object,
        user: PropTypes.object
    };

    constructor (props) {
        super(props);
        props.setRenderingSite(null);
    }

    componentWillUpdate (nextProps) {
        //TODO decide what to do when user cannot access to a page
        console.log(userHasAccess(nextProps.user, nextProps.routes));
    }

    render () {
        return (
            <div>
                <Header
                    login={this.props.login}
                    loginForm={this.props.loginForm}
                    user={this.props.user}
                />
                {this.props.children}
                <SignUpConfirmationModal
                    confirmSignUp={this.props.confirmSignUp}
                    form={this.props.signUpConfirmationForm}
                    sendNewCode={this.props.sendNewConfirmationCode}
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
        signUpConfirmationForm: state.userSignupConfirmationForm,
        spinner: state.spinner,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmSignUp: bindActionCreators(confirmSignUp, dispatch),
        login: bindActionCreators(login, dispatch),
        sendNewConfirmationCode: bindActionCreators(sendNewConfirmationCode, dispatch),
        setRenderingSite: bindActionCreators(setRenderingSite, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Root));
