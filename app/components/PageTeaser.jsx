import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import * as colors from 'lib/colors';

const styles = {
    teaserWrp: {
        backgroundImage: 'url(\'/_assets/images/common/bg_teaser.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'auto',
        paddingTop: 200,
        '@media screen and (max-width: 767px)': {
            paddingTop: 220
        }
    },
    titleTeaser: {
        margin: 0,
        color: colors.white,
        fontWeight: 800,
        fontSize: 'calc(25px + 3vw)',
        lineHeight: 'calc(20px + 3vw)',
        textAlign: 'center'
    },
    pageStarter: {
        backgroundColor: colors.white,
        height: 50
    }
};

class PageTeaser extends Component {
    static propTypes = {
        pageTitle: PropTypes.string.isRequired
    };

    render () {
        return (
            <div style={styles.teaserWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <h1 style={styles.titleTeaser}>
                        {this.props.pageTitle}
                    </h1>
                </div>
                <div className='container' style={styles.pageStarter} />
            </div>
        );
    }
}

export default Radium(PageTeaser);
