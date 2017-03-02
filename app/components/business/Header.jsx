import React, {Component, PropTypes} from 'react';

import FormInput from 'components/FormInput';
import Icon from 'components/Icon';

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
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.header.${fieldName}`}
                placeholder={placeholder}
                inputStyle={{
                    color: colors.grey,
                    padding: '2px 4px',
                    marginRight: '25px',
                    fontSize: '13px'
                }}
                style={{margin: 0}}
            />
        ) : readNode;
    }
    
    renderSocialIcons (socialIconStyle) {
        return (
            <div>
                <Icon
                    onClick={() => {}}
                    iconName={'/templates/ico_twitter_01'}
                    iconStyle={socialIconStyle}
                />
                <Icon
                    onClick={() => {}}
                    iconName={'/templates/ico_facebook_01'}
                    iconStyle={socialIconStyle}
                />
            </div>
        );
    }
    
    renderAccountSection (specStyle) {
        return (
            <div
                style={{
                    ...commonStyle.accountLinksWrp,
                    ...specStyle
                }}
            >
                <div>{'|'}</div>
                <div style={commonStyle.accountLink} onClick={() => console.log('login')}>
                    {'LOGIN'}
                </div>
                <div>{'|'}</div>
                <div style={commonStyle.accountLink} onClick={() => console.log('signup')}>
                    {'REGISTRATI'}
                </div>
                <div>{'|'}</div>
            </div>    
        );
    }
    
    renderPhoneNumber (phoneNumber, isEditMode, linkStyle) {
        return (
            <a href='#' style={linkStyle}>
                {this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber)}
            </a>  
        );
    }
    
    renderEmail (emailAddress, isEditMode, linkStyle) {
        return (
            <a href='mailto:info@emaildisupporto.it' style={linkStyle}>
                {this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress)}
            </a>
        );
    }
}