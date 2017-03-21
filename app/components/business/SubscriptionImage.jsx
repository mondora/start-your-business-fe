import React, {Component, PropTypes} from 'react';

import ImageUploader from 'components/ImageUploader';

import * as colors from 'lib/colors';

const styles = {
    subscriptionImage: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    backgroundImageWidget: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    backgroundWidget: {
        backgroundColor: colors.blackOpacity,
        textAlign: 'center',
        padding: '60px 10px'
    },
    widgetText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: '20px',
        marginBottom: 20,
        color: colors.white
    }
};

export default class SubscriptionImage extends Component {
    static propTypes = {
        imageUploadMode: PropTypes.bool,
        path: PropTypes.string
    };

    render () {
        return this.props.imageUploadMode ? (
            <div
                style={{
                    ...styles.backgroundImageWidget,
                    ...{backgroundImage: `url(\'${this.props.path}\')`}
                }}
            >
                <div style={styles.backgroundWidget}>
                    <p style={styles.widgetText}>
                        {'AGGIUNGI FOTO DELLA TUA SOTTOSCRIZIONE'}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div style={{width: '90%', overflow: 'hidden', borderRadius: '5px'}}>
                            <ImageUploader />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <img src={this.props.path} style={styles.subscriptionImage} />
        );
    }
}
