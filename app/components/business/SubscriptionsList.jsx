import Color from 'color';
import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';
import {connect} from 'react-redux';

import {editModes, getTextAreaField, getTextField, templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import Subscription1 from 'components/business/01/Subscription';
import Subscription2 from 'components/business/02/Subscription';

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
            alignItems: 'center',
        }
    }
});

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
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.subscriptions.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.grey},
            {margin: 0, width: '100vw'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.subscriptions.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.grey, textAlign: 'center'},
            {margin: 0, width:'100%', maxHeight: '30px'}
        );
    }

    renderSubscriptionTitle (isEditMode) {
        const {subscriptionsTitle} = this.props.siteConfig.subscriptions;
        const style = styles(this.props.siteConfig.colors);
        switch (this.props.businessSiteState.siteConfig.templateId) {
            case templatesIds.TEMPLATE_2:
                return (
                    <h2 style={style.subscriptionsTitle2}>
                        {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
                    </h2>
                );
            case templatesIds.TEMPLATE_1:
            default:
                return (
                    <h2 style={style.subscriptionsTitle1}>
                        {this.renderTextField(isEditMode, 'subscriptionsTitle', 'SCEGLI LA TUA SOTTOSCRIZIONE', subscriptionsTitle)}
                    </h2>
                );
        }
    }

    renderSubscription (isEditMode) {
        const style = styles(this.props.siteConfig.colors);
        switch (this.props.businessSiteState.siteConfig.templateId) {
            case templatesIds.TEMPLATE_2:
                return (
                    <div style={style.subscription2}>
                        {this.getSubscription(isEditMode).map((subscriptionInfo, index) =>
                            <Subscription2
                                key={index}
                                bgColor={subscriptionInfo.bgColor}
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
                );
            case templatesIds.TEMPLATE_1:
            default:
                return (
                    <div style={style.subscription1}>
                        {this.getSubscription(isEditMode).map((subscriptionInfo, index) =>
                            <Subscription1
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
                );
        }
    }

    render () {
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.subscriptions'}>
                <div style={style.subscriptionsContainer}>
                    {this.renderSubscriptionTitle(isEditMode)}
                    <div className='container-fluid'>
                        {this.renderSubscription(isEditMode)}
                    </div>
                </div>
            </Form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessSiteState: state.businessSite,
    };
};

export default connect(mapStateToProps)(Radium(SubscriptionsList));
