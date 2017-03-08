import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes, getLink, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FooterPayment from 'components/business/FooterPayment';

const styles = {
    maxContentWidth: {
        maxWidth: '1200px'
    },
    logoFooterButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: colors.white
    },
    imgResponsive: {
        display: 'inline',
        height: 'auto',
        width: '50%',
        '@media screen and (max-width: 991px)': {
            maxWidth: '130px'
        }
    },
    bottomFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        '@media screen and (max-width: 500px)': {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    },
    bottomFooterWrp: {
        backgroundColor: colors.templateBottomFooterBg,
        color: colors.grey,
        fontSize: 12
    },
    bottomLegal: {
        '@media screen and (max-width: 767px)': {
            paddingTop: '10px'
        }
    },
    footerCol: {
        color: colors.lightGrey,
        fontSize: 14,
        '@media screen and (max-width: 991px)': {
            marginBottom: 20
        }
    },
    footerColTitle: {
        display: 'block',
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.white,
        marginBottom: 5
    },
    footerContainer: {
        backgroundColor: colors.templateFooterBg
    },
    footerColLogo: {
        color: colors.white,
        fontSize: 15,
        textAlign: 'right',
        float: 'right'
    }
};

class Footer extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        footerInfo: PropTypes.object.isRequired,
        form: PropTypes.object
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.footer.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.darkGrey, fontWeight: '300'},
            {margin: 0, width: '100vw'}
        );
    }

    renderBottomFooter () {
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={styles.bottomFooterWrp}>
                <div className='container-fluid' style={styles.maxContentWidth}>
                    <div style={styles.bottomFooter}>
                        {this.renderTextField(isEditMode, 'bottom', '© 2017 Nome Azienda - PIVA: 0123456789',
                            <span style={styles.bottomLegal}>{this.props.footerInfo.bottom}</span>
                        )}
                        <FooterPayment />
                    </div>
                </div>
            </div>
        );
    }

    render () {
        const {companyName, line1, line2, line3, line4} = this.props.footerInfo;
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={styles.footerContainer}>
                <Form model={'businessSite.siteConfig.footer'}>
                    <div className='container-fluid' style={styles.maxContentWidth}>
                        <Row style={{padding: '20px 0', color: colors.lightGrey}}>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    {this.renderTextField(isEditMode, 'companyName', 'NOME AZIENDA',
                                        <span style={styles.footerColTitle}>
                                            {companyName}
                                        </span>
                                    )}
                                    {this.renderTextField(isEditMode, 'line1', 'Via Giosuè Carducci, 10', line1)}
                                    <br />
                                    {this.renderTextField(isEditMode, 'line2', '20100 Milano (MI)', line2)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    <span style={styles.footerColTitle}>
                                        {'CONTATTI'}
                                    </span>
                                    {getLink(
                                        buildSiteMode,
                                        'mailto:info@maildisupporto.it',
                                        this.renderTextField(isEditMode, 'line3', 'Email: info@maildisupporto.it', line3),
                                        {color: colors.lightGrey}
                                    )}
                                    <br />
                                    {this.renderTextField(isEditMode, 'line4', 'Tel: 012-3456789', line4)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    <span style={styles.footerColTitle}>
                                        {'INFO'}
                                    </span>
                                    {getLink(buildSiteMode, '#', 'Privacy Policy', {color: colors.lightGrey})}
                                    <br />
                                    {getLink(buildSiteMode, '#', 'Termini e Condizioni', {color: colors.lightGrey})}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    <span style={styles.footerColTitle}>
                                        {'Developed With'}
                                    </span>
                                    {getLink(
                                        buildSiteMode,
                                        '#',
                                        (<div style={styles.logoFooterButton}>
                                            <img src='/_assets/images/common/logo.png' style={styles.imgResponsive} />
                                            <Glyphicon
                                                glyph='glyphicon glyphicon-chevron-right'
                                                style={{fontSize: 18}}
                                            />
                                        </div>)
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {this.renderBottomFooter()}
                </Form>
            </div>
        );
    }
}

export default Radium(Footer);
