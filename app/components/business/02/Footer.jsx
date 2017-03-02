import Radium from 'radium';
import React from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import BusinessFooter from 'components/business/Footer';

const styles = {
    footerColLogo: {
        color: colors.white,
        fontSize: 15,
        textAlign: 'right',
        float: 'right'
    },
    imgResponsive: {
        display: 'inline',
        height: 'auto',
        maxWidth: '160px'
    },
    bottomFooter: {
        padding: '10px 0'
    }
};

class Footer extends BusinessFooter {

    renderBottomFooter (isEditMode, buildSiteMode, commonStyle) {
        return (
            <div style={commonStyle.bottomFooterWrp}>
                <div className='container-fluid'>
                    <div 
                        style={{
                            ...commonStyle.bottomFooter,
                            ...styles.bottomFooter
                        }}
                    >
                        <div>
                            {this.renderLegalInfo(isEditMode)}
                        </div>
                        <div>
                            {this.renderLink(buildSiteMode, '#', 'Privacy Policy', {color: colors.lightGrey})}
                            {this.renderLink(buildSiteMode, '#', 'Termini e Condizioni', {color: colors.lightGrey})}
                        </div>
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
                    <div className='container-fluid'>
                        <Row style={{padding: '20px 0', color: colors.lightGrey}}>
                            <Col xs={12} sm={6}>
                                <div style={commonStyle.footerCol}>
                                    {this.renderCompanyAddress(isEditMode)}
                                    {this.renderCompanyContact(isEditMode, buildSiteMode)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6}>
                                <div style={commonStyle.footerCol}>
                                    {this.renderPaymentImages()}
                                </div>
                                <div style={styles.footerColLogo}>
                                    <span>
                                        {'Developed With'}
                                    </span>
                                    {this.renderLink(
                                        buildSiteMode,
                                        '#',
                                        (<div>
                                            <img src='../_assets/images/common/logo.png' style={styles.imgResponsive} />
                                        </div>)
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {this.renderBottomFooter(isEditMode, buildSiteMode, commonStyle)}
                </Form>
            </div>
        );
    }
}

export default Radium(Footer);
