import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

// import * as colors from 'lib/colors';

import Teaser from 'components/business/Teaser';


class Home extends Component {
    static propTypes = {
        businessSiteState: PropTypes.object
    };

    render () {
        return (
            <Teaser
                buildSiteMode={this.props.businessSiteState.editMode}
                images={this.props.businessSiteState.siteConfig.teaserImages}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessSiteState: state.businessSite
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
