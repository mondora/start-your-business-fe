import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home1 from 'components/business/01/Home';
import Home2 from 'components/business/02/Home';

import {signUpUser} from 'actions/user';

import {getUserSiteState} from 'lib/auth-utils';
import * as colors from 'lib/colors';

const components = {
    home1: Home1,
    home2: Home2
};

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
        businessSiteSubscriptionsForm: PropTypes.object,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object,
        signUpUser: PropTypes.func.isRequired
    };

    render () {
        const Home = components[`home${this.props.businessSiteState.siteConfig.templateId}`];
        return (
            <Home
                businessSiteIntroForm={this.props.businessSiteIntroForm}
                businessSiteOtherInfoForm={this.props.businessSiteOtherInfoForm}
                businessSiteState={this.props.businessSiteState}
                businessSiteStepsForm={this.props.businessSiteStepsForm}
                businessSiteSubscriptionsForm={this.props.businessSiteSubscriptionsForm}
                signUpForm={this.props.signUpForm}
                signUpState={this.props.signUpState}
                signUpUser={this.props.signUpUser}
                styles={styles}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const userSite = getUserSiteState(state.user);
    return {
        businessSiteIntroForm: state.businessSiteIntroForm,
        businessSiteOtherInfoForm: state.businessSiteOtherInfoForm,
        businessSiteState: state.businessSite,
        businessSiteStepsForm: state.businessSiteStepsForm,
        businessSiteSubscriptionsForm: state.businessSiteSubscriptionsForm,
        signUpForm: state.userSignupForm,
        signUpState: userSite.signup
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
