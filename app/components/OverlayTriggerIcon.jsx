import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Overlay} from 'react-bootstrap';

import Icon from 'components/Icon';

import * as colors from 'lib/colors';

const iconStyle = (active) => ({
    display: 'block',
    width: 55,
    float: 'left',
    marginTop: '-8px',
    backgroundColor: active ? colors.primaryColor : colors.primaryColorLight
});

export default class OverlayTriggerIcon extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        iconName: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onClose: PropTypes.func,
        showOverlay: PropTypes.bool,
        title: PropTypes.string
    };
    
    renderOverlay () {
        const {name} = this.props;
        return (
            <Overlay
                container={this}
                id={name}
                placement='right'
                show={this.props.showOverlay}
                target={() => ReactDOM.findDOMNode(this.refs[name])}
            >
                <div>
                    <div>
                        {this.props.title}
                        <label onClick={this.props.onClose}>
                            {'x'}
                        </label>
                    </div>
                    {this.props.children}
                </div>
            </Overlay>
        );
    }

    render () {
        return (
            <div style={{display: 'table-row'}}>
                <Icon
                    iconName={this.props.iconName}
                    iconStyle={iconStyle(this.props.showOverlay)}
                    onClick={this.props.onClick}
                    ref={this.props.name}
                />
                {this.renderOverlay()}
            </div>
        );
    }
}