import Radium from 'radium';
import React, {Component, PropTypes}  from 'react';

class Icon extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        iconSize: PropTypes.number,
        iconStyle: PropTypes.object
    }

    render () {
        const path = `../_assets/icons/${this.props.iconName}.svg`;
        return (
            <div style={{...this.props.iconStyle, ...{width: this.props.iconSize}}}>
                <img src={path} />
            </div>
        );
    }
}

export default Radium(Icon);
