import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getLink, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import AccountSection from 'components/business/AccountSection';
import SocialIcons from 'components/business/SocialIcons';

const styles = (siteColors) => ({
    headerContainer: {
        position: 'relative',
        backgroundColor: colors.white
    },
    headerTopLine: {
        width: '100%',
        height: 5,
        backgroundColor: siteColors.mainColor
    },
    leftWrp: {
        display: 'flex',
        minHeight: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap',
        '@media screen and (min-width: 991px) and (max-width: 1100px)': {
            flexDirection: 'column',
            justifyContent: 'center'
        },
        '@media screen and (min-width: 767px) and (max-width: 991px)': {
            minHeight: 'auto',
            padding: '15px 0',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        '@media screen and (min-width: 500px) and (max-width: 767px)': {
            minHeight: 'auto',
            padding: '5px 0',
            alignItems: 'center',
            justifyContent: 'center'
        },
        '@media screen and (max-width: 500px)': {
            display: 'none'
        }
    },
    headerTopIcons: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        fontSize: 'calc(8px + .5vw)',
        color: siteColors.mainColor,
        '@media screen and (max-width: 767px)': {
            fontSize: '15px'
        },
        '@media screen and (max-width: 991px)': {
            fontSize: '13px'
        }
    },
    topIcon: {
        marginRight: 5,
        fontSize: 16,
        verticalAlign: 'middle'
    },
    rightWrp: {
        display: 'flex',
        minHeight: 80,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '@media screen and (min-width: 767px) and (max-width: 991px)': {
            minHeight: 'auto',
            padding: '10px 0'
        },
        '@media screen and (max-width: 767px)': {
            minHeight: 'auto',
            padding: '5px 0',
            alignItems: 'center',
            justifyContent: 'center'
        }
    },
    socialIconWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIcon: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    linkColorHeader: {
        color: colors.templateGreyText
    },
    accountWrp: {
        color: colors.templateGreyText,
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
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerLogoBg: {
        position: 'absolute',
        top: 0,
        padding: 20,
        backgroundColor: colors.white,
        zIndex: 2,
        margin: '0 auto',
        '@media screen and (max-width: 500px)': {
            position: 'relative'
        }
    },
    headerLogo: {
        display: 'block',
        height: 'auto',
        width: '100%',
        maxWidth: 250
    }
});

class Header extends Component {
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

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.header.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, padding: '2px 4px', marginRight: '25px', fontSize: '13px'},
            {margin: 0}
        );
    }

    render () {
        const {
            buildSiteMode,
            form,
            loginForm,
            login,
            loginState,
            signUpForm,
            signUpUser,
            signUpState,
            siteConfig,
            siteConfig: {header: {emailAddress, phoneNumber}, logo}
        } = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(siteConfig.colors);
        return (
            <div>
                <div style={style.headerContainer}>
                    <div style={style.headerTopLine} />
                    <div className='container-fluid'>
                        <Row>
                            <Form model={'siteConfig.element.header'}>
                                <Col xs={12} sm={6} md={4} lg={5}>
                                    <div style={style.leftWrp}>
                                        <div style={style.headerTopIcons}>
                                            <div style={style.topIcon}>
                                                <Glyphicon
                                                    glyph='glyphicon glyphicon-earphone'
                                                />
                                            </div>
                                            {getLink(
                                                buildSiteMode,
                                                'tel:+390123456789',
                                                this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber),
                                                style.linkColorHeader
                                            )}
                                        </div>
                                        <div style={style.headerTopIcons}>
                                            <div style={style.topIcon}>
                                                <Glyphicon
                                                    glyph='glyphicon glyphicon-envelope'
                                                />
                                            </div>
                                            {getLink(
                                                buildSiteMode,
                                                'mailto:info@emaildisupporto.it',
                                                this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress),
                                                style.linkColorHeader
                                            )}
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={4} lg={5} mdPush={4} lgPush={2}>
                                    <div style={style.rightWrp}>
                                        <SocialIcons
                                            buildSiteMode={buildSiteMode}
                                            form={form}
                                            socialIconWrpStyle={style.socialIconWrp}
                                            socialIconStyle={style.socialIcon}
                                            siteConfig={siteConfig}
                                        />
                                        <AccountSection
                                            accountWrpStyle={style.accountWrp}
                                            buildSiteMode={buildSiteMode}
                                            login={login}
                                            loginForm={loginForm}
                                            loginState={loginState}
                                            signUpForm={signUpForm}
                                            signUpState={signUpState}
                                            signUpUser={signUpUser}
                                            siteConfig={siteConfig}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} md={4} lg={2} mdPull={4} lgPull={5}>
                                    <div style={style.headerLogoWrp}>
                                        <div style={style.headerLogoBg}>
                                            <img src={logo ? logo : '/_assets/images/template_02/logo_example.jpg'} style={style.headerLogo} />
                                        </div>
                                    </div>
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(Header);
