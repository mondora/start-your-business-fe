import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/01/Intro';
import OtherInfo from 'components/business/OtherInfo';
import Teaser from 'components/business/01/Teaser';
import Steps from 'components/business/01/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';

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
        const {editMode, siteConfig} = this.props.businessSiteState;
        const styles = this.props;
        return (
            <div>
                <div>
                    <Teaser
                        buildSiteMode={editMode}
                        images={siteConfig.teaserImages}
                    />
                    <div className='container-fluid' style={styles.pageContainer}>
                        <Intro
                            buildSiteMode={editMode}
                            form={this.props.businessSiteIntroForm}
                            siteConfig={siteConfig}
                        />
                        <Steps
                            buildSiteMode={editMode}
                            form={this.props.businessSiteStepsForm}
                            siteConfig={siteConfig}
                        />
                        <SubscriptionsList
                            buildSiteMode={editMode}
                            form={this.props.businessSiteSubscriptionsForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
                <div style={styles.bottomContainer}>
                    <div className='container-fluid' style={styles.bottomPageWrp}>
                        <OtherInfo
                            buildSiteMode={editMode}
                            form={this.props.businessSiteOtherInfoForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default (Radium(Home));
