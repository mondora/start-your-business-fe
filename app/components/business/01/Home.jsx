import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/01/Intro';
import OtherInfo from 'components/business/OtherInfo';
import Steps from 'components/business/01/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import Teaser from 'components/business/01/Teaser';

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
                <div style={styles.pageContainer}>
                    <Teaser
                        buildSiteMode={editMode}
                        images={siteConfig.teaserImages}
                    />
                    <div className='container-fluid' style={styles.pageWrp}>
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
                        <SubscriptionsList
                            buildSiteMode={editMode}
                            form={businessSiteSubscriptionsForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
                <div style={styles.bottomPageContainer}>
                    <div className='container-fluid' style={styles.bottomPageWrp}>
                        <OtherInfo
                            buildSiteMode={editMode}
                            form={businessSiteOtherInfoForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default (Radium(Home));
