import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getLink, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FooterPayment from 'components/business/FooterPayment';
import PrivacyModal from 'components/business/PrivacyModal';
import ConditionsModal from 'components/business/ConditionsModal';

const styles = {
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
    copyrightWrp: {
        width: '50%',
        '@media screen and (max-width: 500px)': {
            width: '100%'
        }
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
    },
    imgResponsive: {
        display: 'inline',
        height: 'auto',
        maxWidth: '160px'
    }
};

class Footer extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        footerInfo: PropTypes.object.isRequired,
        form: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            showPrivacyModal: false,
            showConditionsModal: false
        };
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.footer.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, fontWeight: '300'},
            {margin: 0, width: '100vw'}
        );
    }

    renderModals () {
        return (
            <div>
                <ConditionsModal
                    onClose={() => this.setState({showConditionsModal: false})}
                    show={this.state.showConditionsModal}
                />
                <PrivacyModal
                    onClose={() => this.setState({showPrivacyModal: false})}
                    show={this.state.showPrivacyModal}
                />
            </div>
        );
    }

    renderBottomFooter () {
        const {buildSiteMode, footerInfo} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        const openPrivacyModal = buildSiteMode ? null : () => this.setState({showPrivacyModal: true});
        const openConditionsModal = buildSiteMode ? null : () => this.setState({showConditionsModal: true});
        return (
            <div style={styles.bottomFooterWrp}>
                <div className='container-fluid'>
                    <div style={styles.bottomFooter}>
                        <div style={styles.copyrightWrp}>
                            {this.renderTextField(isEditMode, 'bottom', '© 2017 Nome Azienda - PIVA: 0123456789',
                                <span style={styles.bottomLegal}>{footerInfo.bottom}</span>
                            )}
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <div style={{cursor: 'pointer'}} onClick={openPrivacyModal}>{'Privacy Policy'}</div>
                            <div style={{width: 20, textAlign: 'center'}}>{' / '}</div>
                            <div style={{cursor: 'pointer'}} onClick={openConditionsModal}>{'Termini e Condizioni'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render () {
        const {buildSiteMode, footerInfo: {companyName, line1, line2, line3, line4}} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={styles.footerContainer}>
                <Form model={'siteConfig.element.footer'}>
                    <div className='container-fluid'>
                        <Row style={{padding: '20px 0', color: colors.lightGrey}}>
                            <Col xs={12} sm={6}>
                                <div style={styles.footerCol}>
                                    {this.renderTextField(isEditMode, 'companyName', 'NOME AZIENDA',
                                        <span style={styles.footerColTitle}>
                                            {companyName}
                                        </span>
                                    )}
                                    {this.renderTextField(isEditMode, 'line1', 'Via Giosuè Carducci, 10', line1)}
                                    <br />
                                    {this.renderTextField(isEditMode, 'line2', '20100 Milano (MI)', line2)}
                                    <br />
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
                            <Col xs={12} sm={6}>
                                <div style={styles.footerCol}>
                                    <FooterPayment />
                                </div>
                                <div style={styles.footerColLogo}>
                                    <span>
                                        {'Developed With'}
                                    </span>
                                    {getLink(
                                        buildSiteMode,
                                        '#',
                                        (<div>
                                            <img src='/_assets/images/common/logo.png' style={styles.imgResponsive} />
                                        </div>)
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {this.renderBottomFooter()}
                    {this.renderModals()}
                </Form>
            </div>
        );
    }
}

export default Radium(Footer);
