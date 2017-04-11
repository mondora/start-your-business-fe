import Color from 'color';
import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getSelectField, getTextAreaField, getTextField, templatesIds} from 'lib/business-site-utils';
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
        '@media screen and (min-width: 767px) and (max-width: 1200px)': {
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
        productPlans: PropTypes.array.isRequired,
        siteConfig: PropTypes.object.isRequired
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode, validator) {
        //TODO change form model
        return getTextField(
            isEditMode,
            this.props.form[fieldName],
            `siteProduct.productPlans.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.grey},
            {margin: 0, width: '100vw'},
            validator
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        //TODO change form model
        return getTextAreaField(
            isEditMode,
            this.props.form[fieldName],
            `siteProduct.productPlans.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.grey, textAlign: 'center'},
            {margin: 0, width:'100%', maxHeight: '30px'}
        );
    }

    renderSubscriptionTitle (isEditMode, style, templateId) {
        const {subscriptionsTitle} = this.props.siteConfig;
        return (
            <h2 style={style[`subscriptionsTitle${templateId}`]}>
                {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
            </h2>
        );
    }

    renderProductPlans (isEditMode, style, templateId) {
        const Subscription = components[`subscription${templateId}`];
        const getBgColor = (bgColor, index) =>
            templateId === templatesIds.TEMPLATE_1 ? Color(bgColor).alpha(0.3 * (2 + index)).rgb().string() : bgColor;
        //TODO change form fields
        return (
            <div style={style[`subscription${templateId}`]}>
                {this.props.productPlans.map((plan, index) =>
                    <Subscription
                        key={index}
                        bgColor={getBgColor(this.props.siteConfig.colors.mainColor, index)}
                        frequency={getSelectField(isEditMode, 'businessSite.productPlans.subscriptions.subscriptionFrequency1', frequencies[plan.frequency], frequenciesOptions)}
                        features={plan.features.map(feat => this.renderTextareaField(isEditMode, 'subscriptionFeature1a', 'Caratteristica', feat))}
                        imageUploadMode={this.props.buildSiteMode === editModes.UPLOAD_IMAGES}
                        image={plan.imagePath ? plan.imagePath : `subscription0${index+1}.jpg`}
                        price={this.renderTextField(isEditMode, 'subscriptionPrice3', 'Prezzo', `€ ${plan.price}`, requiredPriceValidator)}
                        type={this.renderTextField(isEditMode, 'subscriptionType3', 'Titolo', plan.type)}
                    />
                )}
            </div>
        );
    }

    render () {
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        const {templateId} = this.props.siteConfig;
        //TODO change form model
        return (
            <Form model={'siteProduct.productPlans'}>
                <div style={style.subscriptionsContainer}>
                    {this.renderSubscriptionTitle(isEditMode, style, templateId)}
                    <div className='container-fluid'>
                        {this.renderProductPlans(isEditMode, style, templateId)}
                    </div>
                </div>
            </Form>
        );
    }
}

export default Radium(SubscriptionsList);
