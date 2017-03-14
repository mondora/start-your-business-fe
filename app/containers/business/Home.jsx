import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home1 from 'components/business/01/Home';
import Home2 from 'components/business/02/Home';

import {signUpUser} from 'actions/user';
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
        editMode: PropTypes.number,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        siteConfigIntroForm: PropTypes.object,
        siteConfigOtherInfoForm: PropTypes.object,
        siteConfigStepsForm: PropTypes.object,
        siteConfigSubscriptionsForm: PropTypes.object
    };

    render () {
        switch (this.props.siteConfig.templateId) {
            case templatesIds.TEMPLATE_2:
                return (
                    <Home2
                        {...this.props}
                        styles={styles}
                    />
                );
            case templatesIds.TEMPLATE_1:
            default:
                return (
                    <Home1
                        {...this.props}
                        styles={styles}
                    />
                );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        editMode: state.ui.editMode,
        signUpForm: state.userSignupForm,
        signUpState: state.user.signup,
        siteConfig: state.siteConfig.element,
        siteConfigIntroForm: state.siteConfigIntroForm,
        siteConfigOtherInfoForm: state.siteConfigOtherInfoForm,
        siteConfigStepsForm: state.siteConfigStepsForm,
        siteConfigSubscriptionsForm: state.siteConfigSubscriptionsForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
