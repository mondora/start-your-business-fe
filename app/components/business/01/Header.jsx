import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {getLink, editModes, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import AccountSection from 'components/business/AccountSection';
import SocialIcons from 'components/business/SocialIcons';

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
    accountWrp: {
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
            `businessSite.siteConfig.header.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, padding: '2px 4px', marginRight: '25px', fontSize: '13px'},
            {margin: 0}
        );
    }


    render () {
        const {emailAddress, phoneNumber} = this.props.siteConfig.header;
        const {
            buildSiteMode,
            form,
            siteConfig,
            loginForm,
            login,
            loginState,
            signUpForm,
            signUpUser,
            signUpState
        } = this.props;
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
                                            {getLink(
                                                this.props.buildSiteMode,
                                                'tel:+390123456789',
                                                this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber),
                                                style.linkColorHeader
                                            )}
                                        </div>
                                        <div style={style.headerTopIcons}>
                                            <div style={style.topIcon}>
                                                <Glyphicon glyph='glyphicon glyphicon-envelope' />
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
                                <Col xs={12} sm={4}>
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
                        <SocialIcons
                            buildSiteMode={buildSiteMode}
                            form={form}
                            iconWrpStyle={style.socialIconWrp}
                            iconStyle={style.socialIcon}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(Header);
