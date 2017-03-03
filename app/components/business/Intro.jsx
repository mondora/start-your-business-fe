import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

import {getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const commonStyle = {
    introWrp: {
        textAlign: 'center',
        margin: '60px 0'
    },
    introTextStyle: {
        fontSize: '1.4em',
        color: colors.templateGreyText
    }
};

export default class Intro extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.intro.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.templateGreyText},
            {margin: 0, width: '100vw'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.intro.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, textAlign: 'center'},
            {margin: 0, width:'100%'}
        );
    }

    renderContentIntro (specStyle, isEditMode, introTitle, introText) {
        return (
            <div
                style={commonStyle.introWrp}
            >
                <h2 style={specStyle.introTitleStyle}>
                    {this.renderTextField(isEditMode, 'introTitle', 'CASSETTINE BIOLOGICHE', introTitle)}
                </h2>
                <p style={commonStyle.introTextStyle}>
                    {this.renderTextareaField(isEditMode, 'introText', 'Scegliamo i prodotti migliori e te li consegnamo a casa nella formula più adatta alle tue esigenze!', introText)}
                </p>
                <Button style={specStyle.buttonStyle}>
                    {'INIZIA ORA!'}
                </Button>
            </div>
        );
    }
}
