import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as colors from 'lib/colors';

import Teaser from 'components/business01/Teaser';
import Intro from 'components/business01/Intro';
import Steps from 'components/business01/Steps';
import SubscriptionsList from 'components/business01/SubscriptionsList';
import OtherInfo from 'components/business01/OtherInfo';

const styles = {
    pageContainer: {
        maxWidth: '1200px',
        height: 'auto',
        marginBottom: 40
    },
    bottomContainer: {
        backgroundColor: colors.lightGrey,
        padding: '60px 0 40px 0'
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

const mapStateToProps = (state) => {
    return {
        businessSiteIntroForm: state.businessSiteIntroForm,
        businessSiteOtherInfoForm: state.businessSiteOtherInfoForm,
        businessSiteState: state.businessSite,
        businessSiteStepsForm: state.businessSiteStepsForm,
        businessSiteSubscriptionsForm: state.businessSiteSubscriptionsForm,
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
