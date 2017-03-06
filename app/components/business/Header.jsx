import React, {Component, PropTypes} from 'react';

import Icon from 'components/Icon';
import LoginModal from 'components/LoginModal';
import SignUpModal from 'components/business/SignUpModal';

import {getLink, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

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

export default class Header extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object.isRequired,
        loginState: PropTypes.object.isRequired,
        signUpForm: PropTypes.object.isRequired,
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
    
    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.header.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, padding: '2px 4px', marginRight: '25px', fontSize: '13px'},
            {margin: 0}
        );
    }

    renderSocialIcons (socialIconStyle, socialIconWrpStyle) {
        const {siteConfig} = this.props;
        //TODO active link & change link
        return (
            <div style={socialIconWrpStyle}>
                <Icon
                    onClick={() => {}}
                    iconName={`/templates/ico_twitter_0${siteConfig.templateId}`}
                    iconStyle={socialIconStyle}
                />
                <Icon
                    onClick={() => {}}
                    iconName={`/templates/ico_facebook_0${siteConfig.templateId}`}
                    iconStyle={socialIconStyle}
                />
            </div>
        );
    }

    renderAccountSection (specStyle) {
        //TODO signup modal
        const onClickLogin = this.props.buildSiteMode ? null : () => this.setState({showLoginModal: true});
        const onClickSignUp = this.props.buildSiteMode ? null : () => this.setState({showSignUpModal: true});
        return (
            <div
                style={{
                    ...commonStyle.accountLinksWrp,
                    ...specStyle
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
                <LoginModal
                    backgroundColor={this.props.siteConfig.colors.mainColor}
                    form={this.props.loginForm}
                    login={this.props.login}
                    loginState={this.props.loginState}
                    onClose={() => this.setState({showLoginModal: false})}
                    show={this.state.showLoginModal}
                />
                <SignUpModal
                    backgroundColor={this.props.siteConfig.colors.mainColor}
                    form={this.props.signUpForm}
                    onClose={() => this.setState({showSignUpModal: false})}
                    show={this.state.showSignUpModal}
                    signUpUser={this.props.signUpUser}
                    signupState={this.props.signUpState}
                />
            </div>
        );
    }

    renderPhoneNumber (phoneNumber, isEditMode, linkStyle) {
        //TODO define the link path
        return getLink(
            this.props.buildSiteMode,
            '#',
            this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber),
            linkStyle
        );
    }

    renderEmail (emailAddress, isEditMode, linkStyle) {
        //TODO verify email address
        return getLink(
            this.props.buildSiteMode,
            'mailto:info@emaildisupporto.it',
            this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress),
            linkStyle
        );
    }
}
