import Radium from 'radium';
import React from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import BusinessHeader from 'components/business/Header';

const styles = (siteColors) => ({
    maxContentWidth: {
        maxWidth: '1200px'
    },
    headerContainer: {
        padding: '10px 0',
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        '@media screen and (max-width: 767px)': {
            textAlign: 'center',
            padding: 0
        }
    },
    headerTopIconsWrp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 767px)': {
            padding: '8px 0'
        },
        '@media screen and (max-width: 500px)': {
            display: 'none'
        }
    },
    headerTopIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        '@media screen and (max-width: 500px)': {
            marginRight: 0
        }
    },
    topIcon: {
        float: 'left',
        color: siteColors.mainColor,
        width: 30,
        height: 30,
        lineHeight: '32px',
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: colors.white,
        borderRadius: 30,
        marginRight: 8,
        '@media screen and (max-width: 767px)': {
            fontSize: 12,
            lineHeight: '22px',
            width: 20,
            height: 20
        }
    },
    linkColorHeader: {
        color: colors.white
    },
    accountLinksWrp: {
        '@media screen and (max-width: 767px)': {
            padding: '10px 0',
            height: 'auto',
            borderTop: `1px solid ${colors.white}`
        },
        '@media screen and (max-width: 500px)': {
            justifyContent: 'center',
            borderTop: 0
        }
    },
    headerLogoWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    headerLogo: {
        display: 'block',
        height: 'auto',
        width: '100%',
        maxWidth: 400,
        maxHeight: 150
    },
    socialIconWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIcon: {
        width: 40,
        height: 40,
        marginLeft: 5
    }
});

class Header extends BusinessHeader {

    render () {
        const {emailAddress, phoneNumber} = this.props.siteConfig.header;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <div>
                <div style={style.headerContainer}>
                    <div className='container-fluid' style={style.maxContentWidth}>
                        <Row>
                            <Form model={'businessSite.siteConfig.header'}>
                                <Col xs={12} sm={8}>
                                    <div style={style.headerTopIconsWrp}>
                                        <div style={style.headerTopIcons}>
                                            <div style={style.topIcon}>
                                                <Glyphicon glyph='glyphicon glyphicon-phone' />
                                            </div>
                                            {this.renderPhoneNumber(phoneNumber, isEditMode, style.linkColorHeader)}
                                        </div>
                                        <div style={style.headerTopIcons}>
                                            <div style={style.topIcon}>
                                                <Glyphicon glyph='glyphicon glyphicon-envelope' />
                                            </div>
                                            {this.renderEmail(emailAddress, isEditMode, style.linkColorHeader)}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
                                    {this.renderAccountSection(style.accountLinksWrp)}
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </div>
                <div className='container-fluid' style={style.maxContentWidth}>
                    <div style={style.headerLogoWrp}>
                        <div>
                            <img src='/_assets/images/template_01/logo_example.jpg' style={style.headerLogo} />
                        </div>
                        {this.renderSocialIcons(isEditMode, style.socialIcon, style.socialIconWrp)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(Header);
