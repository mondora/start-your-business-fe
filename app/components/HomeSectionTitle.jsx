import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import * as colors from 'lib/colors';

const styles = {
    subtitleSection: {
        margin: 0,
        color: colors.grey,
        fontWeight: 800,
        letterSpacing: '4px',
        lineHeight: 'calc(15px + .5vw)',
        fontSize: 'calc(14px + .5vw)',
    },
    titleSection: {
        margin: '0 0 20px 0',
        fontWeight: 800,
        fontSize: 'calc(35px + 1vw)',
        lineHeight: 'calc(35px + 1vw)',
    },
    textSection: {
        margin: '0 auto',
        width: '80%',
        fontSize: 'calc(14px + .5vw)',
        lineHeight: 'calc(18px + .5vw)',
        '@media screen and (max-width: 767px)': {
            width: '100%'
        },
    }
};

class HomeSectionTitle extends Component {
    static propTypes = {
        description:  PropTypes.string,
        subtitle: PropTypes.string,
        textColor: PropTypes.string,
        title: PropTypes.string
    };

    static defaultProps = {
        textColor: colors.darkGrey
    };

    render () {
        return (
            <div>
                <p style={styles.subtitleSection}>{this.props.subtitle}</p>
                <h2 style={{...styles.titleSection, ...{color: this.props.textColor}}}>
                    {this.props.title}
                </h2>
                <div style={{...styles.textSection, ...{color: this.props.textColor}}}>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

export default Radium(HomeSectionTitle);
