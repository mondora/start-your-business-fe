import Radium from 'radium';
import React from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import BusinessFooter from 'components/business/Footer';

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
    }
};

class Footer extends BusinessFooter {

    renderBottomFooter (isEditMode, commonStyle) {
        return (
            <div style={commonStyle.bottomFooterWrp}>
                <div className='container-fluid' style={styles.maxContentWidth}>
                    <div style={commonStyle.bottomFooter}>
                        {this.renderLegalInfo(isEditMode)}
                        {this.renderPaymentImages()}
                    </div>
                </div>
            </div>
        );
    }

    render () {
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        const commonStyle = this.getCommonStyle();
        return (
            <div style={commonStyle.footerContainer}>
                <Form model={'businessSite.siteConfig.footer'}>
                    <div className='container-fluid' style={styles.maxContentWidth}>
                        <Row style={{padding: '20px 0', color: colors.lightGrey}}>
                            <Col xs={12} sm={6} md={3}>
                                <div style={commonStyle.footerCol}>
                                    {this.renderCompanyAddress(isEditMode)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={commonStyle.footerCol}>
                                    <span style={commonStyle.footerColTitle}>
                                        {'CONTATTI'}
                                    </span>
                                    {this.renderCompanyContact(isEditMode, buildSiteMode)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={commonStyle.footerCol}>
                                    <span style={commonStyle.footerColTitle}>
                                        {'INFO'}
                                    </span>
                                    <br />
                                    {this.renderLink(buildSiteMode, '#', 'Privacy Policy', {color: colors.lightGrey})}
                                    <br />
                                    {this.renderLink(buildSiteMode, '#', 'Termini e Condizioni', {color: colors.lightGrey})}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={commonStyle.footerCol}>
                                    <span style={commonStyle.footerColTitle}>
                                        {'Developed With'}
                                    </span>
                                    {this.renderLink(
                                        buildSiteMode,
                                        '#',
                                        (<div>
                                            <img src='../_assets/images/common/logo.png' style={styles.imgResponsive} />
                                            <Glyphicon
                                                glyph='glyphicon glyphicon-chevron-right'
                                                style={{fontSize: 18}}
                                            />
                                        </div>),
                                        styles.logoFooterButton
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {this.renderBottomFooter(isEditMode, commonStyle)}
                </Form>
            </div>
        );
    }
}

export default Radium(Footer);
