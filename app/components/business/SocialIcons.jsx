import React, {Component, PropTypes} from 'react';

import Icon from 'components/Icon';

import * as colors from 'lib/colors';
import {getLink, editModes, getTextField} from 'lib/business-site-utils';

export default class SocialIcons extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object.isRequired,
        iconStyle: PropTypes.object,
        iconWrpStyle: PropTypes.object,
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

    render () {
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const {buildSiteMode, iconWrpStyle, siteConfig, iconStyle} = this.props;
        return (
            <div style={iconWrpStyle}>
                {this.renderTextField(isEditMode, 'twitterAccount', '@twitter_account',
                    siteConfig.header.twitterAccount ? getLink(
                        buildSiteMode,
                        `https://twitter.com/${siteConfig.header.twitterAccount}`,
                        <Icon
                            iconName={`/templates/ico_twitter_0${siteConfig.templateId}`}
                            iconStyle={iconStyle}
                        />,
                        null,
                        '_blank'
                    ) : null
                )}
                {this.renderTextField(isEditMode, 'facebookPage', 'pagina facebook',
                    siteConfig.header.facebookPage ? getLink(
                        buildSiteMode,
                        `https://www.facebook.com/${siteConfig.header.facebookPage}`,
                        <Icon
                            iconName={`/templates/ico_facebook_0${siteConfig.templateId}`}
                            iconStyle={iconStyle}
                        />,
                        null,
                        '_blank'
                    ) : null
                )}
            </div>
        );
    }
}
