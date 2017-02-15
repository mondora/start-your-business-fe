import Radium from 'radium';
import React, {Component, PropTypes}  from 'react';

class Icon extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        iconStyle: PropTypes.object
    }

    render () {
        const path = `../_assets/icons/${this.props.iconName}.svg`;
        return (
            <div style={this.props.iconStyle}>
                <img src={path} />
            </div>
        );
    }
}

export default Radium(Icon);
