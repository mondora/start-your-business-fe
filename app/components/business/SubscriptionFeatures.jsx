import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';

const commonStyle = {
    subscriptionFeatures: {
        display: 'flex',
        textAlign: 'left',
        padding: '15px 20px',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: '1.1em'
    },
    subscriptionIcon: {
        fontSize: 26,
        verticalAlign: 'middle',
        marginRight: 5
    }
};

export default class SubscriptionFeatures extends Component {
    static propTypes = {
        bgColor: PropTypes.string,
        feature1: PropTypes.node,
        feature2: PropTypes.node,
    };

    render () {
        const mainColor = this.props.bgColor;
        return (
            <div style={commonStyle.subscriptionFeatures}>
                <p style={{width: '100%'}}>
                    <Glyphicon
                        glyph='glyphicon glyphicon-ok-circle'
                        style={{...commonStyle.subscriptionIcon, ...{color: mainColor}}}
                    />
                    {this.props.feature1}
                </p>
                <p style={{width: '100%'}}>
                    <Glyphicon
                        glyph='glyphicon glyphicon-ok-circle'
                        style={{...commonStyle.subscriptionIcon, ...{color: mainColor}}}
                    />
                    {this.props.feature2}
                </p>
            </div>
        );
    }
}
