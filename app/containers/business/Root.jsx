import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import {confirmSignUp, login, sendNewConfirmationCode} from 'actions/user';

import Header from 'components/business01/Header';
import Footer from 'components/business01/Footer';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

import {templatesIds} from 'lib/business-site-utils';

class Root extends Component {
    static propTypes = {
        businessSiteFooterForm: PropTypes.object,
        businessSiteHeaderForm: PropTypes.object,
        businessSiteState: PropTypes.object,
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
        if (!props.businessSiteState.editMode) {
            //TODO check for businessName and render business site or redirect
            console.log(this.props.params.businessName);
        }
    }

    getFontFamily ({templateId}) {
        switch (templateId) {
            case templatesIds.TEMPLATE_2:
                return 'Lato';
            case templatesIds.TEMPLATE_1: 
            default:
                return 'Roboto';
        }
    }
    
    render () {
        const {editMode, siteConfig} = this.props.businessSiteState;
        return (
            <div style={{fontFamily: this.getFontFamily(siteConfig)}}>
                <Header
                    buildSiteMode={editMode}
                    form={this.props.businessSiteHeaderForm}
                    siteConfig={siteConfig}
                />

                {this.props.children}

                {
                    !editMode ?
                        <SignUpConfirmationModal
                            confirmSignUp={this.props.confirmSignUp}
                            form={this.props.signUpConfirmationForm}
                            sendNewCode={this.props.sendNewConfirmationCode}
                            signupConfirmation={this.props.user.signup.confirmation}
                            signupConfirmed={this.props.user.isConfirmed}
                            username={this.props.user.username}
                        /> : null
                }

                {!editMode ? <Spinner show={this.props.spinner.active} /> : null}

                <Footer
                    buildSiteMode={editMode}
                    footerInfo={siteConfig.footer}
                    form={this.props.businessSiteFooterForm}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessSiteFooterForm: state.businessSiteFooterForm,
        businessSiteHeaderForm: state.businessSiteHeaderForm,
        businessSiteState: state.businessSite,
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
