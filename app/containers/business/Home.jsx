import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as colors from 'lib/colors';

import Teaser from 'components/business/Teaser';
import Intro from 'components/business/Intro';
import Steps from 'components/business/Steps';
import Subscriptions from 'components/business/Subscriptions';
import OtherInfo from 'components/business/OtherInfo';

const styles = {
    pageWrp: {
        maxWidth: '1200px',
        height: 'auto',
        marginBottom: 40
    },
    bottomContainer: {
        backgroundColor: colors.lightGrey
    },
    bottomPageWrp: {
        maxWidth: '1200px',
        height: 'auto'
    },
};

class Home extends Component {
    static propTypes = {
        businessSiteIntroForm: PropTypes.object,
        businessSiteOtherInfoForm: PropTypes.object,
        businessSiteState: PropTypes.object,
        businessSiteStepsForm: PropTypes.object,
        businessSiteSubscriptionsForm: PropTypes.object
    };

    render () {
        const {editMode, siteConfig} = this.props.businessSiteState;
        return (
            <div>
                <div>
                    <Teaser
                        buildSiteMode={editMode}
                        images={this.props.businessSiteState.siteConfig.teaserImages}
                    />
                    <div className='container-fluid' style={styles.pageWrp}>
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
                        <Subscriptions
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

const mapStateToProps = (state) => {
    return {
        businessSiteState: state.businessSite,
        businessSiteStepsForm: state.businessSite,
        businessSiteIntroForm: state.businessSite,
        businessSiteSubscriptionsForm: state.businessSite,
        businessSiteOtherInfoForm: state.businessSite
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
