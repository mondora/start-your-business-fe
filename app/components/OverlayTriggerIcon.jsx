import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Overlay} from 'react-bootstrap';

import * as colors from 'lib/colors';

import Icon from 'components/Icon';
import SaveButton from 'components/BuildSiteSaveButton';

const iconStyle = (active) => ({
    display: 'block',
    borderRadius: '100%',
    marginBottom: '10px',
    padding: 4,
    width: 52,
    height: 52,
    backgroundColor: active ? colors.primaryColor : colors.primaryColorLight
});

const styles = {
    TooltipIconClose: {
        float: 'right',
        cursor: 'pointer',
        width: 30,
        height: 30,
        borderRadius: 30,
        border: `1px solid ${colors.white}`,
        textAlign: 'center',
        fontSize: 26,
        lineHeight: '26px',
        fontWeight: 200
    },
    TooltipContainer: {
        position: 'absolute',
        padding: 20,
        width: '70vw',
        maxWidth: 600,
        zIndex: 10000,
        marginTop: -30,
        marginLeft: -7,
        '@media screen and (max-width: 767px)': {
            width: '80vw',
            marginLeft: -10
        }
    },
    TooltipTitle: {
        width: 'calc(100% - 40px)',
        float: 'left',
        fontSize: '22px',
        lineHeight: '20px',
        fontWeight: 'bold'
    },
    TooltipInner: {
        padding: '15px 30px',
        minHeight: 200,
        color: colors.white,
        textAlign: 'left',
        borderRadius: 3,
        backgroundColor: colors.primaryColor,
        '@media screen and (max-width: 767px)': {
            padding: '15px'
        }
    },
    TooltipArrow: {
        position: 'absolute',
        left: 4,
        marginTop: 28,
        borderWidth: '8px 8px 8px 8px',
        borderStyle: 'solid',
        borderRightColor: colors.primaryColor,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent'
    }
};

class OverlayTriggerIcon extends Component {
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
                show={this.props.showOverlay}
                target={() => ReactDOM.findDOMNode(this.refs[name])}
            >
                <div style={styles.TooltipContainer}>
                    <div style={styles.TooltipArrow} />
                    <div style={styles.TooltipInner}>
                        <p style={styles.TooltipTitle}>{this.props.title}</p>
                        <label onClick={this.props.onClose} style={styles.TooltipIconClose}>
                            {'×'}
                        </label>
                        {this.props.children}
                        <SaveButton
                            onClick={this.props.onClose}
                        />
                    </div>
                </div>
            </Overlay>
        );
    }

    render () {
        return (
            <div style={{position: 'relative'}}>
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

export default Radium(OverlayTriggerIcon);
