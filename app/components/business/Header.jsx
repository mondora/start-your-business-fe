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
        lineHeight: '50px'
    },
    iconWrp: {
        display: 'inline-block',
        marginRight: 20
    },
    headerIcons: {
        color: siteColors.mainColor,
        fontSize: 18,
        padding: 5,
        backgroundColor: colors.white,
        borderRadius: 30,
        marginRight: 8
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 5,
        float: 'right',
        textAlign: 'right'
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%'
    }
});

export default class Header extends Component {
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
                                <Col xs={12} sm={6}>
                                    <div style={style.iconWrp}>
                                        <Glyphicon
                                            glyph='glyphicon glyphicon-phone'
                                            style={style.headerIcons}
                                        />
                                        {this.renderTextField(isEditMode, 'phoneNumber', '+39 012 3456789', phoneNumber)}
                                    </div>
                                    <div style={style.iconWrp}>
                                        <Glyphicon
                                            glyph='glyphicon glyphicon-envelope'
                                            style={style.headerIcons}
                                        />
                                        {this.renderTextField(isEditMode, 'emailAddress', 'info@emaildisupporto.it', emailAddress)}
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} style={{textAlign: 'right'}}>
                                    {'| LOGIN | REGISTRATI |'}
                                </Col>
                            </Form>
                        </Row>
                    </div>
                </div>
                <div className='container-fluid' style={{maxWidth: '1200px'}}>
                    <Row style={{marginTop: 20, marginBottom: 20}}>
                        <Col xs={12} sm={6}>
                            <img src='./_assets/images/templates/logo_example.jpg' style={style.imgResponsive} />
                        </Col>
                        <Col xs={12} sm={6}>
                            <Icon
                                onClick={() => {}}
                                iconName={'/templates/ico_twitter_01'}
                                iconStyle={style.icon}
                            />
                            <Icon
                                onClick={() => {}}
                                iconName={'/templates/ico_facebook_01'}
                                iconStyle={style.icon}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
