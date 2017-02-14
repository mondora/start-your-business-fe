import React, {Component, PropTypes} from 'react';

export default class HorizontalLine extends Component {

    static propTypes = {
        color: PropTypes.string,
        width: PropTypes.number
    }

    static defaultProps = {
        color: '#ffffff',
        width: 100
    }

    render () {
        const {color, width} = this.props;
        return (
            <hr
                style={{
                    border: `solid ${color} 2px`,
                    display: 'block',
                    width: width
                }}
            />
        );
    }
}
