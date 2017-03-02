import Color from 'color';
import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import FormTextarea from   'components/FormTextarea';
import Subscription from 'components/business/Subscription';

const styles = {
    subscriptionsWrp: {
        color: colors.white,
        textAlign: 'center',
        margin: '80px 0 20px 0'
    },
    subscriptionsTitle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        color: colors.darkGrey,
        marginBottom: 20
    },
    subscription: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexFlow: 'no-wrap',
        justifyContent: 'space-between',
        '@media screen and (max-width: 767px)': {
            display: 'block',
            width: '100%'
        }
    }
};

class SubscriptionsList extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        businessSiteState: PropTypes.object,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    getSubscription (isEditMode) {
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
            subscriptionPrice3,
            subscriptionFrequency1,
            subscriptionFrequency2,
            subscriptionFrequency3
        } = this.props.siteConfig.subscriptions;
        return [
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType1', 'CASSETTINA PICCOLA', subscriptionType1),
                photo: 'subscription01.jpg',
                frequency: this.renderTextField(isEditMode, 'subscriptionFrequency1', 'al mese', subscriptionFrequency1),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature1a', 'Adatta per un consumo mensile di una persona', subscriptionFeature1a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature1b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature1b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice1', '€ 35', subscriptionPrice1)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType2', 'CASSETTINA PICCOLA', subscriptionType2),
                photo: 'subscription02.jpg',
                frequency: this.renderTextField(isEditMode, 'subscriptionFrequency2', 'al mese', subscriptionFrequency2),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature2a', 'Adatta per un consumo mensile di 2/3 persone', subscriptionFeature2a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature2b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature2b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice2', '€ 45', subscriptionPrice2)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType3', 'CASSETTINA PICCOLA', subscriptionType3),
                photo: 'subscription03.jpg',
                frequency: this.renderTextField(isEditMode, 'subscriptionFrequency3', 'al mese', subscriptionFrequency3),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature3a', 'Adatta per un consumo mensile di 4/5 persone', subscriptionFeature3a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature3b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature3b),
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
                inputStyle={{
                    textAlign: 'center',
                    color: colors.grey
                }}
                style={{margin: 0, width: '100vw'}}
            />
        ) : readNode;
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormTextarea
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.intro.${fieldName}`}
                placeholder={placeholder}
                textareaStyle={{
                    textAlign: 'center',
                    color: colors.grey
                }}
                style={{margin: 0, width:'100%', maxHeight: '30px'}}
            />
        ) : readNode;
    }

    render () {
        const {subscriptionsTitle} = this.props.siteConfig.subscriptions;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <Form model={'businessSite.siteConfig.subscriptions'}>
                <Row>
                    <Col xs={12}>
                        <div style={styles.subscriptionsWrp}>
                            <h2 style={styles.subscriptionsTitle}>
                                {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
                            </h2>
                            <div style={styles.subscription}>
                                {this.getSubscription(isEditMode).map((subscriptionInfo, index) =>
                                    <Subscription
                                        key={index}
                                        bgColor={Color(subscriptionInfo.bgColor).alpha(0.3 * (2 + index)).rgb().string()}
                                        frequency={subscriptionInfo.frequency}
                                        feature1={subscriptionInfo.feature1}
                                        feature2={subscriptionInfo.feature2}
                                        imageUploadMode={this.props.buildSiteMode === editModes.UPLOAD_IMAGES}
                                        photoName={subscriptionInfo.photo}
                                        price={subscriptionInfo.price}
                                        type={subscriptionInfo.type}
                                    />
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Radium(SubscriptionsList);
