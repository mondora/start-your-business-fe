import React, {Component, PropTypes} from 'react';
import {Overlay} from 'react-bootstrap';

import Icon from 'components/Icon';

const iconStyle = {
    display: 'block',
    width: 55,
    float: 'left',
    marginTop: '-8px'
};

export default class OverlayTriggerIcon extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        iconName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            showOverlay: false
        };
    }
    
    renderOverlay () {
        const {name} = this.props;
        console.log(this.state.showOverlay);
        return (
            <Overlay
                container={this}
                show={this.state.showOverlay}
                id={name}
                target={this[name]}
            >
                {this.props.children}
            </Overlay>
        );
    }

    render () {
        return (
            <div>
                <Icon
                    iconName={this.props.iconName}
                    iconStyle={iconStyle}
                    onClick={() => this.setState({showOverlay: !this.state.showOverlay})}
                    ref={component => this[this.props.name] = component}
                />
                {this.renderOverlay()}
            </div>
        );
    }
}