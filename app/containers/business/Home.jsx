import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import * as colors from 'lib/colors';

import HorizontalLine from 'components/HorizontalLine';
import SignUpButton from 'components/SignUpButton';

const styles = {
    teaserWrp: {
        backgroundImage: 'url(\'./_assets/images/common/bg_teaser.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'auto',
        minHeight: 500,
        padding: '20% 0 8% 0',
        '@media screen and (max-width: 767px)': {
            paddingTop: '220px'
        },
        '@media screen and (min-width: 1200px)': {
            height: '100vh'
        }
    },
    textTeaser: {
        color:  colors.white,
        margin: '20px auto',
        width: '60%',
        textAlign: 'center',
        fontSize: 'calc(18px + .25vw)',
        lineHeight: 'calc(18px + 1vw)',
        '@media screen and (max-width: 767px)': {
            width: '100%'
        }
    }
};

class Home extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.bool
    };

    render () {
        return (
            <div style={{backgroundColor: colors.backgroundLightGrey}}>
                <div style={styles.teaserWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <div style={styles.textTeaser}>
                            {
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam.`
                            }
                        </div>
                        <HorizontalLine color={colors.primaryColor} width={100} />
                        <SignUpButton
                            backgroundColor={colors.white}
                            textColor={colors.primaryColor}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
