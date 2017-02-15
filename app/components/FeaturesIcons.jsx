import React, {Component, PropTypes} from 'react';
import Radium from 'radium';

import Icon from 'components/Icon';
import * as colors from 'lib/colors';

class FeaturesIcons extends Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        iconStyle: PropTypes.object,
        text: PropTypes.string,
        textColor: PropTypes.string,
        textStyle: PropTypes.object,
        title: PropTypes.string.isRequired,
        titleColor: PropTypes.string
    };

    static defaultProps = {
        icon: 'responsive',
        iconStyle: {},
        text: '',
        textColor: colors.darkGrey,
        textStyle: {},
        title: '',
        titleColor: colors.darkGrey,
    };

    render () {
        return (
            <div>
                <Icon
                    iconName={this.props.icon}
                    iconStyle={this.props.iconStyle}
                />
                <div style={this.props.textStyle}>
                    <h3 style={{color: this.props.titleColor, fontWeight: '800', margin: '0'}}>
                        {this.props.title}
                    </h3>
                    <p style={{color: this.props.textColor, fontSize: '1.2em'}}>
                        {this.props.text}
                    </p>
                </div>
            </div>
        );
    }
}

export default Radium(FeaturesIcons);
