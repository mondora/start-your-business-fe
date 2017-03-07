import Radium from 'radium';
import React, {Component, PropTypes}  from 'react';

class Icon extends Component {
    static propTypes = {
        iconName: PropTypes.string.isRequired,
        iconStyle: PropTypes.object,
        onClick: PropTypes.func
    };

    render () {
        const path = `/_assets/icons/${this.props.iconName}.svg`;
        const {iconStyle, onClick} = this.props;
        return (
            <div
                style={{
                    ...iconStyle,
                    cursor: onClick ? 'pointer' : null
                }}
                onClick={onClick}
            >
                <img src={path} />
            </div>
        );
    }
}

export default Radium(Icon);
