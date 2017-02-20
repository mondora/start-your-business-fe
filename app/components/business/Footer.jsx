import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import FormInput from 'components/FormInput';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const styles = {
    footerWrp: {
        backgroundColor: colors.backgroundFooter
    },
    footerCol: {
        color: colors.primaryColorLighter,
        fontSize: 14
    },
    bottomFooterWrp: {
        backgroundColor: colors.backgroundBottomFooter,
        color: colors.primaryColorLighter,
        fontSize: 12,
        fontWeight: 300
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
            />
        ) : readNode;
    }

    renderBottomFooter (isEditMode) {
        return (
            <div style={styles.bottomFooterWrp}>
                <div className='container-fluid' style={{maxWidth: '1200px'}}>
                    <Row>
                        <Col xs={12} sm={6}>
                            {this.renderTextField(isEditMode, 'bottom', '© 2017 Nome Azienda - PIVA: 0123456789',
                                <p style={{margin: '0', padding: '15px 0'}}>
                                    {this.props.footerInfo.bottom}
                                </p>
                            )}
                        </Col>
                        <Col xs={12}  sm={6}>
                            <p style={{float: 'right'}}>
                                {'Privacy Policy | Termini e Condizioni | Developed with: Wallabusiness'}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    render () {
        const {companyName, line1, line2, line3, line4} = this.props.footerInfo;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={styles.footerWrp}>
                <Form model={'businessSite.siteConfig.footer'}>
                    <div className='container'>
                        <Row style={{padding: '20px 0', color: colors.primaryColorLighter}}>
                            <Col xs={12} sm={6} style={styles.footerCol}>
                                {this.renderTextField(isEditMode, 'companyName', 'Nome Azienda',
                                    <strong>
                                        {companyName}
                                    </strong>
                                )}
                                <br />
                                {this.renderTextField(isEditMode, 'line1', 'Via Giosuè Carducci, 10', line1)}
                                <br />
                                {this.renderTextField(isEditMode, 'line2', '20100 Milano (MI)', line2)}
                                <br />
                                {this.renderTextField(isEditMode, 'line3', 'Email: info@maildisupporto.it', line3)}
                                <br />
                                {this.renderTextField(isEditMode, 'line4', 'Tel: 012-3456789', line4)}
                            </Col>
                            <Col xs={12} sm={6} style={styles.footerCol}>
                                {'available payment methods'}
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
