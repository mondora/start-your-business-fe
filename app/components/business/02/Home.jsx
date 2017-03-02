import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Teaser from 'components/business/02/Teaser';
// import Intro from 'components/business/01/Intro';
// import Steps from 'components/business/01/Steps';
// import SubscriptionsList from 'components/business/SubscriptionsList';
import OtherInfo from 'components/business/OtherInfo';

class Home extends Component {
    static propTypes = {
        businessSiteOtherInfoForm: PropTypes.object.isRequired,
        businessSiteState: PropTypes.object.isRequired,
        styles: PropTypes.object.isRequired
    };

    render () {
        const {editMode, siteConfig} = this.props.businessSiteState;
        const styles = this.props;
        return (
            <div>
                <Teaser
                    buildSiteMode={editMode}
                    images={siteConfig.teaserImages}
                />
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
// <div className='container-fluid'>
//     <Intro
//         buildSiteMode={editMode}
//         form={this.props.businessSiteIntroForm}
//         siteConfig={siteConfig}
//     />
//     <Steps
//         buildSiteMode={editMode}
//         form={this.props.businessSiteStepsForm}
//         siteConfig={siteConfig}
//     />
//     <SubscriptionsList
//         buildSiteMode={editMode}
//         form={this.props.businessSiteSubscriptionsForm}
//         siteConfig={siteConfig}
//     />
// </div>

export default (Radium(Home));
