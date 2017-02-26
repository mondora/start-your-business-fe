import React, {Component, PropTypes} from 'react';
import {Col, Row, Button, Glyphicon} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';

const styles = (siteColors) => ({
    subscriptionsWrp: {
        color: colors.white,
        textAlign: 'center',
        margin: '80px 0'
    },
    subscriptionsTitle: {
        fontWeight: '700',
        color: colors.darkGrey,
        marginBottom: 20
    },
    subscriptionContainer: {
        borderRadius: 10,
        color: colors.white,
        backgroundColor: siteColors.mainColor,
        border: `1px solid ${siteColors.mainColor}`,
        paddingBottom: 30
    },
    subscriptionType: {
        padding: '10px 0',
        fontSize: '1.3em',
        fontWeight: '700'
    },
    subscriptionContent: {
        backgroundColor: colors.white,
        color: colors.grey
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%'
    },
    icon: {
        fontSize: 30,
        color: siteColors.mainColor
    },
    subscriptionPrice: {
        fontSize: '3em'
    },
    button: {
        color: siteColors.mainColor,
        backgroundColor: colors.white
    }
});

export default class Subscriptions extends Component {
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
                model={`businessSite.siteConfig.subscriptions.${fieldName}`}
                placeholder={placeholder}
            />
        ) : readNode;
    }

    getSubscription () {
        const {
            subscriptionType1,
            subscriptionType2,
            subscriptionType3,
            subscriptionFeature1a,
            subscriptionFeature1b,
            subscriptionFeature2a,
            subscriptionFeature2b,
            subscriptionFeature3a,
            subscriptionFeature3b,
            subscriptionPrice1,
            subscriptionPrice2,
            subscriptionPrice3
        } = this.props.siteConfig.subscriptions;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return [
            {
                type: this.renderTextField(isEditMode, 'subscriptionType1', 'CASSETTINA PICCOLA', subscriptionType1),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature1a', `Adatta per un
                consumo mensile di una persona`, subscriptionFeature1a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature1b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature1b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice1', '€ 35', subscriptionPrice1)
            },
            {
                type: this.renderTextField(isEditMode, 'subscriptionType2', 'CASSETTINA PICCOLA', subscriptionType2),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature2a', `Adatta per un
                consumo mensile di 2/3 persone`, subscriptionFeature2a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature2b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature2b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice2', '€ 35', subscriptionPrice2)
            },
            {
                type: this.renderTextField(isEditMode, 'subscriptionType3', 'CASSETTINA PICCOLA', subscriptionType3),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature3a', `Adatta per un
                consumo mensile di 4/5 persone`, subscriptionFeature3a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature3b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature3b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice3', '€ 35', subscriptionPrice3)
            }
        ];
    }

    render () {
        const {subscriptionsTitle} = this.props.siteConfig.subscriptions;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.subscriptions'}>
                <Row>
                    <Col xs={12}>
                        <div style={style.subscriptionsWrp}>
                            <h2 style={style.subscriptionsTitle}>
                                {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
                            </h2>
                            <Row>
                                {this.getSubscription().map((subscriptionInfo, index) =>
                                    <Col key={index} xs={12} sm={4}>
                                        <div style={style.subscriptionContainer}>
                                            <div style={style.subscriptionType}>
                                                {subscriptionInfo.type}
                                            </div>
                                            <div style={style.subscriptionContent}>
                                                <img src='./_assets/images/template_01/infobox2.jpg' style={style.imgResponsive} />
                                                <p>
                                                    <Glyphicon
                                                        glyph='glyphicon glyphicon-ok-circle'
                                                        style={style.icon}
                                                    />
                                                    {subscriptionInfo.feature1}
                                                </p>
                                                <p>
                                                    <Glyphicon
                                                        glyph='glyphicon glyphicon-ok-circle'
                                                        style={style.icon}
                                                    />
                                                    {subscriptionInfo.feature2}
                                                </p>
                                            </div>
                                            <p style={style.subscriptionPrice}>
                                                {subscriptionInfo.price}
                                            </p>
                                            <Button style={style.button}>
                                                {'ORDINA ORA !'}
                                            </Button>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}
