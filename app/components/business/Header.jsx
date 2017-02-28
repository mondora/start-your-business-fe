import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import Icon from 'components/Icon';

const styles = (siteColors) => ({
    headerWrp: {
        minHeight: 50,
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        lineHeight: '50px',
        '@media screen and (max-width: 767px)': {
            lineHeight: '30px',
            textAlign: 'center'
        }
    },
    headerIconsWrp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        '@media screen and (max-width: 500px)': {
            display: 'none'
        }
    },
    headerIcons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        '@media screen and (max-width: 500px)': {
            marginRight: 0
        }
    },
    icon: {
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
    accountLinksWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        border: 0,
        '@media screen and (max-width: 767px)': {
            padding: '8px 0',
            borderTop: `1px solid ${colors.white}`
        },
        '@media screen and (max-width: 500px)': {
            justifyContent: 'center',
            borderTop: 0
        }
    },
    accountLink: {
        cursor: 'pointer',
        padding: '0 10px'
    },
    logoWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        width: '100%',
        maxWidth: '500px'
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
            />
        ) : readNode;
    }

    render () {
        const {emailAddress, phoneNumber} = this.props.siteConfig.header;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <div>
                <div style={style.headerWrp}>
                    <div className='container-fluid' style={{maxWidth: '1200px'}}>
                        <Row>
                            <Form model={'businessSite.siteConfig.header'}>
                                <Col xs={12} sm={8}>
                                    <div style={style.headerIconsWrp}>
                                        <div style={style.headerIcons}>
                                            <div style={style.icon}>
                                                <Glyphicon
                                                    glyph='glyphicon glyphicon-phone'
                                                />
                                            </div>
                                            <a href='#' style={{color: colors.white}}>
                                                {this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber)}
                                            </a>
                                        </div>
                                        <div style={style.headerIcons}>
                                            <div style={style.icon}>
                                                <Glyphicon
                                                    glyph='glyphicon glyphicon-envelope'
                                                />
                                            </div>
                                            <a href='mailto:info@emaildisupporto.it' style={{color: colors.white}}>
                                                {this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress)}
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={4}>
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
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </div>
                <div className='container-fluid' style={{maxWidth: '1200px'}}>
                    <div style={style.logoWrp}>
                        <div>
                            <img src='./_assets/images/template_01/logo_example.jpg' style={style.imgResponsive} />
                        </div>
                        <div style={style.socialIconWrp}>
                            <Icon
                                onClick={() => {}}
                                iconName={'/templates/ico_twitter_01'}
                                iconStyle={style.socialIcon}
                            />
                            <Icon
                                onClick={() => {}}
                                iconName={'/templates/ico_facebook_01'}
                                iconStyle={style.socialIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(Header);
