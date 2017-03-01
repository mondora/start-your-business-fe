import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';

const styles = {
    maxContentWidth: {
        maxWidth: '1200px'
    },
    footerContainer: {
        backgroundColor: colors.templateFooterBg
    },
    footerCol: {
        color: colors.lightGrey,
        fontSize: 14,
        '@media screen and (max-width: 991px)': {
            marginBottom: 20,
        }
    },
    footerColTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.white
    },
    bottomFooterWrp: {
        backgroundColor: colors.templateBottomFooterBg,
        color: colors.grey,
        fontSize: 12
    },
    bottomFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media screen and (max-width: 500px)': {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
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
            maxWidth: '130px',
        }
    },
    bottomFooterPayment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '10px 0',
        '@media screen and (max-width: 767px)': {
            justifyContent: 'flex-start'
        }
    },
    bottomLegal: {
        '@media screen and (max-width: 767px)': {
            paddingTop: '10px'
        }
    },
    imgPayment: {
        display: 'inline-block',
        maxWidth: '50px',
        height: 'auto',
        marginRight: 10,
        marginBottom: 5
    }
};

class Footer extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        footerInfo: PropTypes.object.isRequired,
        form: PropTypes.object
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.footer.${fieldName}`}
                placeholder={placeholder}
                inputStyle={{
                    color: colors.darkGrey,
                    fontWeight: '300'
                }}
                style={{margin: 0, width: '100vw'}}
            />
        ) : readNode;
    }

    renderBottomFooter (isEditMode) {
        return (
            <div style={styles.bottomFooterWrp}>
                <div className='container-fluid' style={styles.maxContentWidth}>
                    <div style={styles.bottomFooter}>
                        {this.renderTextField(isEditMode, 'bottom', '© 2017 Nome Azienda - PIVA: 0123456789',
                            <span style={styles.bottomLegal}>{this.props.footerInfo.bottom}</span>
                        )}
                        <div style={styles.bottomFooterPayment}>
                            <img src='../_assets/images/template_01/payment01.png' style={styles.imgPayment} />
                            <img src='../_assets/images/template_01/payment02.png' style={styles.imgPayment} />
                            <img src='../_assets/images/template_01/payment03.png' style={styles.imgPayment} />
                            <img src='../_assets/images/template_01/payment04.png' style={styles.imgPayment} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render () {
        const {companyName, line1, line2, line3, line4} = this.props.footerInfo;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={styles.footerContainer}>
                <Form model={'businessSite.siteConfig.footer'}>
                    <div className='container-fluid' style={styles.maxContentWidth}>
                        <Row style={{padding: '20px 0', color: colors.primaryColorLighter}}>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    {this.renderTextField(isEditMode, 'companyName', 'Nome Azienda',
                                        <span style={styles.footerColTitle}>
                                            {companyName}
                                        </span>
                                    )}
                                    <br />
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
                                    <br />
                                    <a href='mailto:info@maildisupporto.it' style={{color: colors.lightGrey}}>
                                        {this.renderTextField(isEditMode, 'line3', 'Email: info@maildisupporto.it', line3)}
                                    </a>
                                    <br />
                                    {this.renderTextField(isEditMode, 'line4', 'Tel: 012-3456789', line4)}
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    <span style={styles.footerColTitle}>
                                        {'INFO'}
                                    </span>
                                    <br />
                                    <a href='#' style={{color: colors.lightGrey}}>
                                        {'Privacy Policy'}
                                    </a>
                                    <br />
                                    <a href='#' style={{color: colors.lightGrey}}>
                                        {'Termini e Condizioni'}
                                    </a>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3}>
                                <div style={styles.footerCol}>
                                    <span style={styles.footerColTitle}>
                                        {'Developed With'}
                                    </span>
                                    <a href='#' style={styles.logoFooterButton}>
                                        <img src='../_assets/images/common/logo.png' style={styles.imgResponsive} />
                                        <Glyphicon
                                            glyph='glyphicon glyphicon-chevron-right'
                                            style={{fontSize: 18}}
                                        />
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {this.renderBottomFooter(isEditMode)}
                </Form>
            </div>
        );
    }
}

export default Radium(Footer);
