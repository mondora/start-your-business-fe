import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import Icon from 'components/Icon';

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
        marginRight: 20,
        color: siteColors.mainColor
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
    socialIcon: {
        width: 30,
        height: 30,
        marginRight: 5
    },
    linkColorHeader: {
        color: colors.darkGrey
    },
    accountLinksWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: 0,
        height: 30,
        '@media screen and (max-width: 767px)': {
        },
        '@media screen and (max-width: 500px)': {
        }
    },
    accountLink: {
        cursor: 'pointer',
        padding: '0 10px'
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
        zIndex: 10000,
        margin: '0 auto'
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

    render () {
        const {emailAddress, phoneNumber} = this.props.siteConfig.header;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <div>
                <div style={style.headerContainer}>
                    <div style={style.headerTopLine} />
                    <div className='container-fluid'>
                        <Row>
                            <Form model={'businessSite.siteConfig.header'}>
                                <Col xs={12} sm={6} md={4} lg={5}>
                                    <div style={style.leftWrp}>
                                        <div style={style.headerTopIcons}>
                                            <Glyphicon
                                                glyph='glyphicon glyphicon-phone'
                                                style={{marginRight: 5}}
                                            />
                                            <a href='#' style={style.linkColorHeader}>
                                                {this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber)}
                                            </a>
                                        </div>
                                        <div style={style.headerTopIcons}>
                                            <Glyphicon
                                                glyph='glyphicon glyphicon-envelope'
                                                style={{marginRight: 5}}
                                            />
                                            <a href='mailto:info@emaildisupporto.it' style={style.linkColorHeader}>
                                                {this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress)}
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={5}
                                    mdPush={4}
                                    lgPush={2}
                                >
                                    <div style={style.rightWrp}>
                                        <Icon
                                            onClick={() => {}}
                                            iconName={'/templates/ico_twitter_02'}
                                            iconStyle={style.socialIcon}
                                        />
                                        <Icon
                                            onClick={() => {}}
                                            iconName={'/templates/ico_facebook_02'}
                                            iconStyle={style.socialIcon}
                                        />
                                        <div style={style.accountLinksWrp}>
                                            <div>{'|'}</div>
                                            <div style={style.accountLink} onClick={() => this.setState({showLoginModal: true})}>
                                                {'LOGIN'}
                                            </div>
                                            <div>{'|'}</div>
                                            <div style={style.accountLink} onClick={() => this.setState({showLoginModal: true})}>
                                                {'REGISTRATI'}
                                            </div>
                                            <div>{'|'}</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={4} lg={2} mdPull={4} lgPull={5}>
                                    <div style={style.headerLogoWrp}>
                                        <div style={style.headerLogoBg}>
                                            <img src='./_assets/images/template_02/logo_example.jpg' style={style.headerLogo} />
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
