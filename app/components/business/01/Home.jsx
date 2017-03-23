import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/Intro';
import OtherInfo from 'components/business/01/OtherInfo';
import Steps from 'components/business/01/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import TeaserCarousel from 'components/business/TeaserCarousel';

import {Col, Row} from 'react-bootstrap';
import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const componentStyles = (siteColors) => ({
    teaserWrp: {
        maxWidth: '1200px',
        height: 'auto'
    },
    introTitleStyle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        color: colors.templateGreyText
    },
    buttonStyle: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        color: siteColors.mainColor,
        borderColor: siteColors.mainColor
    }
});

export default class Home extends Component {

    static propTypes = {
        editMode: PropTypes.number,
        login: PropTypes.func.isRequired,
        productPlans: PropTypes.object,
        setImagePath: PropTypes.func.isRequired,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        siteConfigIntroForm: PropTypes.object.isRequired,
        siteConfigOtherInfoForm: PropTypes.object.isRequired,
        siteConfigStepsForm: PropTypes.object.isRequired,
        siteConfigSubscriptionsForm: PropTypes.object.isRequired,
        spinner: PropTypes.object,
        styles: PropTypes.object.isRequired
    };

    renderTeaser (editMode, siteConfig) {
        const homeStyles = componentStyles(siteConfig.colors);
        return (
            <div className='container-fluid' style={homeStyles.teaserWrp}>
                <Row>
                    <Col xs={12}>
                        <TeaserCarousel
                            buildSiteMode={editMode}
                            images={siteConfig.teaserImages}
                            setImagePath={this.props.setImagePath}
                            templateId={templatesIds.TEMPLATE_1}
                        />
                    </Col>
                </Row>
            </div>
        );
    }

    // next={<Glyphicon glyph='circle-arrow-right' />}
    // prev={<Glyphicon glyph='circle-arrow-left' />}

    render () {
        const {
            editMode,
            login,
            productPlans,
            setImagePath,
            signUpForm,
            signUpState,
            signUpUser,
            siteConfigIntroForm,
            siteConfigStepsForm,
            siteConfigSubscriptionsForm,
            siteConfigOtherInfoForm,
            siteConfig,
            styles
        } = this.props;
        const homeStyles = componentStyles(siteConfig.colors);
        return (
            <div>
                <div style={styles.pageContainer}>
                    {this.renderTeaser(editMode, siteConfig)}
                    <div className='container-fluid' style={styles.pageWrp}>
                        <Intro
                            buttonStyle={homeStyles.buttonStyle}
                            buildSiteMode={editMode}
                            form={siteConfigIntroForm}
                            introTitleStyle={homeStyles.introTitleStyle}
                            login={login}
                            signUpForm={signUpForm}
                            signUpState={signUpState}
                            signUpUser={signUpUser}
                            siteConfig={siteConfig}
                        />
                        <Steps
                            buildSiteMode={editMode}
                            form={siteConfigStepsForm}
                            siteConfig={siteConfig}
                        />
                        <SubscriptionsList
                            buildSiteMode={editMode}
                            form={siteConfigSubscriptionsForm}
                            productPlans={productPlans}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
                <div style={styles.bottomPageContainer1}>
                    <div className='container-fluid' style={styles.bottomPageWrp}>
                        <OtherInfo
                            buildSiteMode={editMode}
                            form={siteConfigOtherInfoForm}
                            setImagePath={setImagePath}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
