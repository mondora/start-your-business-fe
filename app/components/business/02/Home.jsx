import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/02/Intro';
import OtherInfo from 'components/business/02/OtherInfo';
import Steps from 'components/business/02/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import TeaserCarousel from 'components/business/TeaserCarousel';

import {templatesIds} from 'lib/business-site-utils';

const styles = {
    teaserWrp: {
        height: 'auto'
    },
    image: {
        width: '100%',
        height: 'auto'
    }
};

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
        return (
            <div>
                <div style={styles.teaserWrp}>
                    <TeaserCarousel
                        buildSiteMode={editMode}
                        images={siteConfig.teaserImages}
                        imgStyle={styles.image}
                        templateId={templatesIds.TEMPLATE_2}
                    />
                </div>
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
                <div style={this.props.styles.subscriptionContainer}>
                    <SubscriptionsList
                        buildSiteMode={editMode}
                        form={businessSiteSubscriptionsForm}
                        siteConfig={siteConfig}
                    />
                </div>
                <div style={this.props.styles.bottomPageContainer2}>
                    <div style={this.props.styles.bottomPageBlackOpacity}>
                        <div className='container-fluid' style={this.props.styles.bottomPageWrp}>
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
