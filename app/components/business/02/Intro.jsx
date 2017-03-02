import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import BusinessIntro from 'components/business/Intro';

const styles = (siteColors) => ({
    introTitleStyle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '300',
        color: siteColors.mainColor
    },
    buttonStyle: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        border: 0,
        borderRadius: 0
    }
});

export default class Intro extends BusinessIntro {

    render () {
        const {introTitle, introText} = this.props.siteConfig.intro;
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.intro'}>
                <Row>
                    <Col xs={12} style={style.introWrp}>
                        {
                            this.renderContentIntro(
                                style,
                                isEditMode,
                                introTitle,
                                introText
                            )
                        }
                    </Col>
                </Row>
            </Form>
        );
    }
}
