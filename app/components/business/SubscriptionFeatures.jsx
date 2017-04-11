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
        features: PropTypes.array
    };

    render () {
        const mainColor = this.props.bgColor;
        return (
            <div style={styles.subscriptionFeatures}>
                {this.props.features.map((feat, index) =>
                    <p key={index}>
                        <Glyphicon
                            glyph='glyphicon glyphicon-ok-circle'
                            style={{...styles.subscriptionIcon, ...{color: mainColor}}}
                        />
                        {feat}
                    </p>
                )}
            </div>
        );
    }
}
