import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import Radium from 'radium';

import {fetch as fetchSiteConfig} from 'actions/siteConfig';
import {confirmSignUp, login, sendNewConfirmationCode, setRenderingSite, signUpUser} from 'actions/user';

import Footer1 from 'components/business/01/Footer';
import Footer2 from 'components/business/02/Footer';
import Header1 from 'components/business/01/Header';
import Header2 from 'components/business/02/Header';
import SignUpConfirmationModal from 'components/SignUpConfirmationModal';
import Spinner from 'components/Spinner';

import {getUserSiteState, userHasAccess} from 'lib/auth-utils';
import {templatesIds} from 'lib/business-site-utils';

const components = {
    footer1: Footer1,
    footer2: Footer2,
    header1: Header1,
    header2: Header2
};

class Root extends Component {
    static propTypes = {
        children: PropTypes.node,
        confirmSignUp: PropTypes.func.isRequired,
        editMode: PropTypes.number,
        fetchSiteConfig: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object,
        params: PropTypes.object,
        routes: PropTypes.array,
        sendNewConfirmationCode: PropTypes.func.isRequired,
        setRenderingSite: PropTypes.func.isRequired,
        signUpConfirmationForm: PropTypes.object,
        signUpForm: PropTypes.object,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        siteConfigFooterForm: PropTypes.object,
        siteConfigHeaderForm: PropTypes.object,
        siteConfigState: PropTypes.object,
        spinner: PropTypes.object,
        user: PropTypes.object
    };

    constructor (props) {
        super(props);
        const {editMode, fetchSiteConfig} = props;
        if (!editMode) {
            const {params: {businessName}} = props;
            // console.log('props', props);
            fetchSiteConfig(businessName);
            props.setRenderingSite(businessName);
        }
    }

    componentWillUpdate (nextProps) {
        if (nextProps.routes) {
            //TODO decide what to do when user cannot access to a page
            console.log(userHasAccess(getUserSiteState(nextProps.user), nextProps.routes));
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

    renderSite (editMode, siteConfig, userSite) {
        const Header = components[`header${siteConfig.templateId}`];
        const Footer = components[`footer${siteConfig.templateId}`];
        return (
            <div style={{fontFamily: this.getFontFamily(siteConfig)}}>
                <Header
                    buildSiteMode={editMode}
                    form={this.props.siteConfigHeaderForm}
                    login={this.props.login}
                    loginForm={this.props.loginForm}
                    loginState={userSite.login}
                    signUpForm={this.props.signUpForm}
                    signUpUser={this.props.signUpUser}
                    signUpState={userSite.signup}
                    siteConfig={siteConfig}
                />

                {this.props.children}

                {
                    !editMode ?
                        <SignUpConfirmationModal
                            businessUserPool={siteConfig.userPool}
                            confirmSignUp={this.props.confirmSignUp}
                            form={this.props.signUpConfirmationForm}
                            sendNewCode={this.props.sendNewConfirmationCode}
                            signupConfirmation={userSite.signup.confirmation}
                            signupConfirmed={userSite.isConfirmed}
                            username={userSite.username}
                        /> : null
                }

                {!editMode ? <Spinner show={this.props.spinner.active} /> : null}

                <Footer
                    buildSiteMode={editMode}
                    footerInfo={siteConfig.footer}
                    form={this.props.siteConfigFooterForm}
                />
            </div>
        );
    }

    render () {
        const {editMode, siteConfig} = this.props;
        // console.log('render siteConfig', siteConfig);
        const userSite = getUserSiteState(this.props.user);
        if (userSite) {
            if (siteConfig.isFetching) {
                return (<Spinner show={siteConfig.isFetching} />);
            }
            if (siteConfig.fetchError) {
                if (editMode) {
                    //TODO maybe need to check the reason
                    return this.renderSite(editMode, siteConfig.element, userSite);
                } else {
                    //TODO maybe better a not found page
                    window.location = '#/';
                }
            } else {
                return this.renderSite(editMode, siteConfig.element, userSite);
            }
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        editMode: state.ui.editMode,
        loginForm: state.userLoginForm,
        signUpConfirmationForm: state.userSignupConfirmationForm,
        signUpForm: state.userSignupForm,
        siteConfig: state.siteConfig,
        siteConfigFooterForm: state.siteConfigFooterForm,
        siteConfigHeaderForm: state.siteConfigHeaderForm,
        siteConfigState: state.siteConfig,
        spinner: state.spinner,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        confirmSignUp: bindActionCreators(confirmSignUp, dispatch),
        fetchSiteConfig: bindActionCreators(fetchSiteConfig, dispatch),
        login: bindActionCreators(login, dispatch),
        sendNewConfirmationCode: bindActionCreators(sendNewConfirmationCode, dispatch),
        setRenderingSite: bindActionCreators(setRenderingSite, dispatch),
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Root));
