import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import Intro from 'components/business/Intro';
import OtherInfo from 'components/business/01/OtherInfo';
import Steps from 'components/business/01/Steps';
import SubscriptionsList from 'components/business/SubscriptionsList';
import TeaserCarousel from 'components/business/TeaserCarousel';

import {Col, Row} from 'react-bootstrap';
import {templatesIds} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const styles = (siteColors) => ({
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

class Home extends Component {
    static propTypes = {
        businessSiteIntroForm: PropTypes.object.isRequired,
        businessSiteOtherInfoForm: PropTypes.object.isRequired,
        businessSiteState: PropTypes.object.isRequired,
        businessSiteStepsForm: PropTypes.object.isRequired,
        businessSiteSubscriptionsForm: PropTypes.object.isRequired,
        styles: PropTypes.object.isRequired
    };

    renderTeaser (editMode, siteConfig) {
        const homeStyles = styles(siteConfig.colors);
        return (
            <div className='container-fluid' style={homeStyles.teaserWrp}>
                <Row>
                    <Col xs={12}>
                        <TeaserCarousel
                            buildSiteMode={editMode}
                            images={siteConfig.teaserImages}
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
            businessSiteIntroForm,
            businessSiteStepsForm,
            businessSiteSubscriptionsForm,
            businessSiteOtherInfoForm,
            businessSiteState: {
                editMode,
                siteConfig
            }
        } = this.props;
        const homeStyles = styles(siteConfig.colors);
        return (
            <div>
                <div style={this.props.styles.pageContainer}>
                    {this.renderTeaser(editMode, siteConfig)}
                    <div className='container-fluid' style={this.props.styles.pageWrp}>
                        <Intro
                            buttonStyle={homeStyles.buttonStyle}
                            buildSiteMode={editMode}
                            form={businessSiteIntroForm}
                            introTitleStyle={homeStyles.introTitleStyle}
                            siteConfig={siteConfig}
                        />
                        <Steps
                            buildSiteMode={editMode}
                            form={businessSiteStepsForm}
                            siteConfig={siteConfig}
                        />
                        <SubscriptionsList
                            buildSiteMode={editMode}
                            form={businessSiteSubscriptionsForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
                <div style={this.props.styles.bottomPageContainer1}>
                    <div className='container-fluid' style={this.props.styles.bottomPageWrp}>
                        <OtherInfo
                            buildSiteMode={editMode}
                            form={businessSiteOtherInfoForm}
                            siteConfig={siteConfig}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default (Radium(Home));
