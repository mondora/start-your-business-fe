import Color from 'color';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import Subscription from 'components/business/Subscription';

const styles = {
    subscriptionsWrp: {
        color: colors.white,
        textAlign: 'center',
        margin: '80px 0'
    },
    subscriptionsTitle: {
        fontWeight: '700',
        color: colors.darkGrey,
        marginBottom: 20
    }
};

export default class SubscriptionsList extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        businessSiteState: PropTypes.object,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    getSubscription () {
        const siteColors = this.props.siteConfig.colors;
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
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType1', 'CASSETTINA PICCOLA', subscriptionType1),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature1a', `Adatta per un
                consumo mensile di una persona`, subscriptionFeature1a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature1b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature1b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice1', '€ 35', subscriptionPrice1)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType2', 'CASSETTINA PICCOLA', subscriptionType2),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature2a', `Adatta per un
                consumo mensile di 2/3 persone`, subscriptionFeature2a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature2b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature2b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice2', '€ 45', subscriptionPrice2)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType3', 'CASSETTINA PICCOLA', subscriptionType3),
                feature1: this.renderTextField(isEditMode, 'subscriptionFeature3a', `Adatta per un
                consumo mensile di 4/5 persone`, subscriptionFeature3a),
                feature2: this.renderTextField(isEditMode, 'subscriptionFeature3b', `Assortimento:
                verdura mista (frutta a richiesta)`, subscriptionFeature3b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice3', '€ 55', subscriptionPrice3)
            }
        ];
    }

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

    render () {
        const {subscriptionsTitle} = this.props.siteConfig.subscriptions;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const subscriptionInfo = this.props.siteConfig;
        console.log(subscriptionInfo.bgColor);
        return (
            <Form model={'businessSite.siteConfig.subscriptions'}>
                <Row>
                    <Col xs={12}>
                        <div style={styles.subscriptionsWrp}>
                            <h2 style={styles.subscriptionsTitle}>
                                {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
                            </h2>
                            <Row>
                                {this.getSubscription().map((subscriptionInfo, index) =>
                                    <Subscription
                                        key={index}
                                        bgColor={Color(subscriptionInfo.bgColor).alpha(0.3 * (2 + index)).rgb().string()}
                                        feature1={subscriptionInfo.feature1}
                                        feature2={subscriptionInfo.feature2}
                                        price={subscriptionInfo.price}
                                        type={subscriptionInfo.type}
                                    />
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}
