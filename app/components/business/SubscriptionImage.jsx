import React, {Component, PropTypes} from 'react';

import ImageUploader from 'components/ImageUploader';

const commonStyle = {
    subscriptionImage: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }
};

export default class SubscriptionImage extends Component {
    static propTypes = {
        imageUploadMode: PropTypes.bool,
        path: PropTypes.string
    };

    render () {
        return this.props.imageUploadMode ? (
            <div>
                <p>
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
                    <ImageUploader />
                </div>
            </div>
        ) : (
            <img src={this.props.path} style={commonStyle.subscriptionImage} />
        );
    }
}
