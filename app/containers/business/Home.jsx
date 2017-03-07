import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Home1 from 'components/business/01/Home';
import Home2 from 'components/business/02/Home';

import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const styles = {
    pageContainer: {
        backgroundColor: colors.white
    },
    pageWrp: {
        maxWidth: '1200px',
        height: 'auto'
    },
    subscriptionContainer: {
        backgroundColor: colors.lightGrey
    },
    bottomPageContainer1: {
        backgroundColor: colors.lightGrey,
        padding: '60px 0 40px 0'
    },
    bottomPageContainer2: {
        position: 'relative',
        backgroundImage: 'url(\'/_assets/images/template_02/carousel01.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    },
    bottomPageBlackOpacity: {
        padding: '100px 0 60px 0',
        backgroundColor: colors.blackOpacity
    },
    bottomPageWrp: {
        maxWidth: '1200px',
        height: 'auto'
    }
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
        switch (this.props.businessSiteState.siteConfig.templateId) {
            case templatesIds.TEMPLATE_2:
                return (
                    <Home2
                        businessSiteIntroForm={this.props.businessSiteIntroForm}
                        businessSiteOtherInfoForm={this.props.businessSiteOtherInfoForm}
                        businessSiteState={this.props.businessSiteState}
                        businessSiteStepsForm={this.props.businessSiteStepsForm}
                        businessSiteSubscriptionsForm={this.props.businessSiteSubscriptionsForm}
                        styles={styles}
                    />
                );
            case templatesIds.TEMPLATE_1:
            default:
                return (
                    <Home1
                        businessSiteIntroForm={this.props.businessSiteIntroForm}
                        businessSiteOtherInfoForm={this.props.businessSiteOtherInfoForm}
                        businessSiteState={this.props.businessSiteState}
                        businessSiteStepsForm={this.props.businessSiteStepsForm}
                        businessSiteSubscriptionsForm={this.props.businessSiteSubscriptionsForm}
                        styles={styles}
                    />
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        businessSiteIntroForm: state.businessSiteIntroForm,
        businessSiteOtherInfoForm: state.businessSiteOtherInfoForm,
        businessSiteState: state.businessSite,
        businessSiteStepsForm: state.businessSiteStepsForm,
        businessSiteSubscriptionsForm: state.businessSiteSubscriptionsForm
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
