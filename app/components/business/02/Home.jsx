import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/Intro';
import OtherInfo from 'components/business/02/OtherInfo';
import Steps from 'components/business/02/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import TeaserCarousel from 'components/business/TeaserCarousel';

import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const componentStyles = (siteColors) => ({
    teaserWrp: {
        height: 'auto'
    },
    image: {
        width: '100%',
        height: 'auto'
    },
    introTitleStyle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '300',
        color: siteColors.mainColor
    },
    buttonStyle: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        border: 0,
        borderRadius: 0
    }
});

export default class Home extends Component {

    static propTypes = {
        editMode: PropTypes.number,
        productPlans: PropTypes.object,
        setImagePath: PropTypes.func.isRequired,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        siteConfigIntroForm: PropTypes.object.isRequired,
        siteConfigOtherInfoForm: PropTypes.object.isRequired,
        siteConfigStepsForm: PropTypes.object.isRequired,
        siteConfigSubscriptionsForm: PropTypes.object.isRequired,
        spinner: PropTypes.object,
        styles: PropTypes.object.isRequired,
        user: PropTypes.object
    };

    render () {
        const {
            editMode,
            productPlans,
            setImagePath,
            signUpForm,
            signUpState,
            signUpUser,
            siteConfigIntroForm,
            siteConfigStepsForm,
            siteConfigSubscriptionsForm,
            siteConfigOtherInfoForm,
            siteConfig,
            styles
        } = this.props;
        const homeStyles = componentStyles(siteConfig.colors);
        return (
            <div>
                <div style={homeStyles.teaserWrp}>
                    <TeaserCarousel
                        buildSiteMode={editMode}
                        images={siteConfig.teaserImages}
                        imgStyle={homeStyles.image}
                        setImagePath={setImagePath}
                        templateId={templatesIds.TEMPLATE_2}
                    />
                </div>
                <div className='container-fluid'>
                    <Intro
                        buttonStyle={homeStyles.buttonStyle}
                        buildSiteMode={editMode}
                        form={siteConfigIntroForm}
                        introTitleStyle={homeStyles.introTitleStyle}
                        signUpForm={signUpForm}
                        signUpUser={signUpUser}
                        signUpState={signUpState}
                        siteConfig={siteConfig}
                    />
                    <Steps
                        buildSiteMode={editMode}
                        form={siteConfigStepsForm}
                        siteConfig={siteConfig}
                    />
                </div>
                <div style={styles.subscriptionContainer}>
                    <SubscriptionsList
                        buildSiteMode={editMode}
                        form={siteConfigSubscriptionsForm}
                        productPlans={productPlans}
                        siteConfig={siteConfig}
                    />
                </div>
                <div style={styles.bottomPageContainer2}>
                    <div style={styles.bottomPageBlackOpacity}>
                        <div className='container-fluid' style={styles.bottomPageWrp}>
                            <OtherInfo
                                buildSiteMode={editMode}
                                form={siteConfigOtherInfoForm}
                                setImagePath={setImagePath}
                                siteConfig={siteConfig}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
