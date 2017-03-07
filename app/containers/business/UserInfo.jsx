import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

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

class UserInfo extends Component {
    static propTypes = {
        businessSiteState: PropTypes.object
    };

    render () {
        return (
            <div>
                {'INSERISCI I TUOI DATI'}
            </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserInfo));
