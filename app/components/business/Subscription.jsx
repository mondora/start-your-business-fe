import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';

import ImageUploader from 'components/ImageUploader';
import SaveButton from 'components/BuildSiteSaveButton';

const commonStyle = {
    subscriptionImage: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        margin: '0 auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
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

export default class Subscription extends Component {
    static propTypes = {
        bgColor: PropTypes.string,
        feature1: PropTypes.node,
        feature2: PropTypes.node,
        frequency: PropTypes.node,
        imageUploadMode: PropTypes.bool,
        photoName: PropTypes.string,
        price: PropTypes.node,
        type: PropTypes.node
    };

    renderImage (path) {
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
                    <SaveButton />
                </div>
            </div>
        ) : (
            <img src={path} style={commonStyle.subscriptionImage} />
        );
    }

    renderSubscriptionFeatures () {
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
