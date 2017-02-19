import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import FormInput from 'components/FormInput';

import {editModes} from 'lib/business-site-utils';

export default class Header extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        headerInfo: PropTypes.object.isRequired
    };

    render () {
        const {emailAddress, phoneNumber} = this.props.headerInfo;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div>
                <Row>
                    <Form model={'businessSite.siteConfig.header'}>
                        <Col xs={12} sm={6}>
                            {
                                isEditMode ?
                                    <FormInput
                                        field={this.props.form.phoneNumber}
                                        inputType='text'
                                        model='businessSite.siteConfig.header.phoneNumber'
                                        placeholder='+39 012 3456789'
                                    /> : phoneNumber
                            }
                            {
                                isEditMode ?
                                    <FormInput
                                        field={this.props.form.emailAddress}
                                        inputType='text'
                                        model='businessSite.siteConfig.header.emailAddress'
                                        placeholder='info@emaildisupporto.it'
                                    /> : emailAddress
                            }
                        </Col>
                        <Col xs={12} sm={6}>
                            {'| LOGIN | REGISTRATI |'}
                        </Col>

                    </Form>
                </Row>
            </div>
        );
    }
}