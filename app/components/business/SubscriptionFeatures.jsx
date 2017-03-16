import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';

const styles = {
    subscriptionFeatures: {
        textAlign: 'left',
        padding: '15px 20px',
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
            <div style={styles.subscriptionFeatures}>
                <p style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <Glyphicon
                        glyph='glyphicon glyphicon-ok-circle'
                        style={{...styles.subscriptionIcon, ...{color: mainColor}}}
                    />
                    {this.props.feature1}
                </p>
                <p style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <Glyphicon
                        glyph='glyphicon glyphicon-ok-circle'
                        style={{...styles.subscriptionIcon, ...{color: mainColor}}}
                    />
                    {this.props.feature2}
                </p>
            </div>
        );
    }
}
