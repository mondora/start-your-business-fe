import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Teaser from 'components/business/Teaser';
// import Intro from 'components/business/Intro';
import Steps from 'components/business/Steps';

const styles = {
    pageWrp: {
        maxWidth: '1200px',
        height: 'auto',
        marginBottom: 40
    }
};

class Home extends Component {
    static propTypes = {
        businessSiteIntroForm: PropTypes.object,
        businessSiteState: PropTypes.object,
        businessSiteStepsForm: PropTypes.object
    };

    render () {
        const {editMode, siteConfig} = this.props.businessSiteState;
        return (
            <div>
                <Teaser
                    buildSiteMode={editMode}
                    images={this.props.businessSiteState.siteConfig.teaserImages}
                />
                <div className='container-fluid' style={styles.pageWrp}>
                    <Steps
                        buildSiteMode={editMode}
                        form={this.props.businessSiteStepsForm}
                        siteConfig={siteConfig}
                    />
                </div>
            </div>
        );
    }
}

// <Intro
//     buildSiteMode={editMode}
//     form={this.props.businessSiteIntroForm}
//     siteConfig={siteConfig}
// />

const mapStateToProps = (state) => {
    return {
        businessSiteState: state.businessSite,
        businessSiteStepsForm: state.businessSite,
        businessSiteIntroForm: state.businessSite
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
