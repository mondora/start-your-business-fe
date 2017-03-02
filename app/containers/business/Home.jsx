import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Home1 from 'components/business01/Home';
import Home2 from 'components/business02/Home';

import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

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
                        businessSiteOtherInfoForm={this.props.businessSiteOtherInfoForm}
                        businessSiteState={this.props.businessSiteState}
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
