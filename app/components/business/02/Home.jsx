import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/02/Intro';
import OtherInfo from 'components/business/02/OtherInfo';
import Steps from 'components/business/02/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import Teaser from 'components/business/02/Teaser';

class Home extends Component {
    static propTypes = {
        businessSiteIntroForm: PropTypes.object.isRequired,
        businessSiteOtherInfoForm: PropTypes.object.isRequired,
        businessSiteState: PropTypes.object.isRequired,
        businessSiteStepsForm: PropTypes.object.isRequired,
        businessSiteSubscriptionsForm: PropTypes.object.isRequired,
        styles: PropTypes.object.isRequired
    };

    render () {
        const {
            businessSiteIntroForm,
            businessSiteStepsForm,
            businessSiteSubscriptionsForm,
            businessSiteOtherInfoForm,
            businessSiteState: {
                editMode,
                siteConfig
            }
        } = this.props;
        const {styles} = this.props;
        return (
            <div>
                <Teaser
                    buildSiteMode={editMode}
                    images={siteConfig.teaserImages}
                />
                <div className='container-fluid'>
                    <Intro
                        buildSiteMode={editMode}
                        form={businessSiteIntroForm}
                        siteConfig={siteConfig}
                    />
                    <Steps
                        buildSiteMode={editMode}
                        form={businessSiteStepsForm}
                        siteConfig={siteConfig}
                    />
                </div>
                <div style={styles.subscriptionContainer}>
                    <SubscriptionsList
                        buildSiteMode={editMode}
                        form={businessSiteSubscriptionsForm}
                        siteConfig={siteConfig}
                    />
                </div>
                <div style={styles.bottomPageContainer2}>
                    <div style={styles.bottomPageBlackOpacity}>
                        <div className='container-fluid' style={styles.bottomPageWrp}>
                            <OtherInfo
                                buildSiteMode={editMode}
                                form={businessSiteOtherInfoForm}
                                siteConfig={siteConfig}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Radium(Home));
