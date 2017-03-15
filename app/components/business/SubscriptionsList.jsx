import Color from 'color';
import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import {editModes, getSelectField, getTextAreaField, getTextField, templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';
import {requiredPriceValidator} from 'lib/form-utils';
import {frequencies, frequenciesOptions} from 'lib/zuora-products-utils';

import Subscription1 from 'components/business/01/Subscription';
import Subscription2 from 'components/business/02/Subscription';

const components = {
    subscription1: Subscription1,
    subscription2: Subscription2
};

const styles = (siteColors) => ({
    subscriptionsContainer: {
        color: colors.white,
        textAlign: 'center',
        paddingBottom: 80
    },
    subscriptionsTitle1: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        color: colors.templateGreyText,
        marginBottom: 20,
        marginTop: 80
    },
    subscriptionsTitle2: {
        padding: '60px 0',
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        marginBottom: 20
    },
    subscription1: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexFlow: 'no-wrap',
        justifyContent: 'space-between',
        '@media screen and (max-width: 767px)': {
            display: 'block',
            width: '100%'
        }
    },
    subscription2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexFlow: 'no-wrap',
        justifyContent: 'space-between',
        padding: '0 10%',
        '@media screen and (min-width: 767px) and (max-width: 1100px)': {
            padding: 0
        },
        '@media screen and (max-width: 767px)': {
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }
});

class SubscriptionsList extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        productPlans: PropTypes.object.isRequired,
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
            subscriptionFrequency3,
            subscriptionImage1,
            subscriptionImage2,
            subscriptionImage3
        } = this.props.productPlans.subscriptions;
        return [
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType1', 'CASSETTINA PICCOLA', subscriptionType1),
                image: subscriptionImage1 ? subscriptionImage1 : 'subscription01.jpg',
                frequency: getSelectField(isEditMode, 'businessSite.productPlans.subscriptions.subscriptionFrequency1', frequencies[subscriptionFrequency1], frequenciesOptions),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature1a', 'Adatta per un consumo mensile di una persona', subscriptionFeature1a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature1b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature1b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice1', '35', `€ ${subscriptionPrice1}`, requiredPriceValidator)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType2', 'CASSETTINA PICCOLA', subscriptionType2),
                image: subscriptionImage2 ? subscriptionImage2 : 'subscription02.jpg',
                frequency: getSelectField(isEditMode, 'businessSite.productPlans.subscriptions.subscriptionFrequency2', frequencies[subscriptionFrequency2], frequenciesOptions),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature2a', 'Adatta per un consumo mensile di 2/3 persone', subscriptionFeature2a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature2b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature2b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice2', '45', `€ ${subscriptionPrice2}`, requiredPriceValidator)
            },
            {
                bgColor: siteColors.mainColor,
                type: this.renderTextField(isEditMode, 'subscriptionType3', 'CASSETTINA PICCOLA', subscriptionType3),
                image: subscriptionImage3 ? subscriptionImage3 : 'subscription03.jpg',
                frequency: getSelectField(isEditMode, 'businessSite.productPlans.subscriptions.subscriptionFrequency3', frequencies[subscriptionFrequency3], frequenciesOptions),
                feature1: this.renderTextareaField(isEditMode, 'subscriptionFeature3a', 'Adatta per un consumo mensile di 4/5 persone', subscriptionFeature3a),
                feature2: this.renderTextareaField(isEditMode, 'subscriptionFeature3b', 'Assortimento: verdura mista (frutta a richiesta)', subscriptionFeature3b),
                price: this.renderTextField(isEditMode, 'subscriptionPrice3', '55', `€ ${subscriptionPrice3}`, requiredPriceValidator)
            }
        ];
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode, validator) {
        return getTextField(
            isEditMode,
            this.props.form[fieldName],
            `businessSite.productPlans.subscriptions.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.grey},
            {margin: 0, width: '100vw'},
            validator
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField(
            isEditMode,
            this.props.form[fieldName],
            `businessSite.productPlans.subscriptions.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.grey, textAlign: 'center'},
            {margin: 0, width:'100%', maxHeight: '30px'}
        );
    }

    renderSubscriptionTitle (isEditMode, style, templateId) {
        const {subscriptionsTitle} = this.props.productPlans.subscriptions;
        return (
            <h2 style={style[`subscription${templateId}`]}>
                {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
            </h2>
        );
    }

    renderSubscription (isEditMode, style, templateId) {
        const Subscription = components[`subscription${templateId}`];
        const getBgColor = ({bgColor}, index) =>
            templateId === templatesIds.TEMPLATE_1 ? Color(bgColor).alpha(0.3 * (2 + index)).rgb().string() : bgColor;
        return (
            <div style={style[`subscription${templateId}`]}>
                {this.getSubscription(isEditMode).map((subscriptionInfo, index) =>
                    <Subscription
                        key={index}
                        bgColor={getBgColor(subscriptionInfo, index)}
                        frequency={subscriptionInfo.frequency}
                        feature1={subscriptionInfo.feature1}
                        feature2={subscriptionInfo.feature2}
                        imageUploadMode={this.props.buildSiteMode === editModes.UPLOAD_IMAGES}
                        image={subscriptionInfo.image}
                        price={subscriptionInfo.price}
                        type={subscriptionInfo.type}
                    />
                )}
            </div>
        );
    }

    render () {
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        const {templateId} = this.props.siteConfig;
        return (
            <Form model={'businessSite.productPlans.subscriptions'}>
                <div style={style.subscriptionsContainer}>
                    {this.renderSubscriptionTitle(isEditMode, style, templateId)}
                    <div className='container-fluid'>
                        {this.renderSubscription(isEditMode, style, templateId)}
                    </div>
                </div>
            </Form>
        );
    }
}

export default Radium(SubscriptionsList);
