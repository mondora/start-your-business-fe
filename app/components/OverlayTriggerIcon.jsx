import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Overlay} from 'react-bootstrap';

import Icon from 'components/Icon';

import * as colors from 'lib/colors';

const iconStyle = {
    display: 'block',
    width: 55,
    float: 'left',
    marginTop: '-8px',
    backgroundColor: colors.primaryColor
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
        return (
            <Overlay
                container={this}
                id={name}
                placement='right'
                show={this.state.showOverlay}
                target={() => ReactDOM.findDOMNode(this.refs[name])}
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
                    ref={this.props.name}
                />
                {this.renderOverlay()}
            </div>
        );
    }
}