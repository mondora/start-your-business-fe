import React, {PropTypes, Component} from 'react';
import {Image} from 'react-bootstrap';

import {editModes} from 'constants/editModes';
import * as colors from 'lib/colors';

import ImageUploader from 'components/ImageUploader';

const styles = {
    backgroundImageWidget: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: '100%',
        width: 160,
        height: 160
    },
    backgroundWidget: {
        backgroundColor: colors.blackOpacity,
        textAlign: 'center',
        width: 160,
        height: 160,
        padding: '30px',
        borderRadius: '100%'
    },
    widgetText: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: '20px',
        marginBottom: 20,
        color: colors.white
    },
    boxImage: {
        width: 160,
        height: 160,
        textAlign: 'center'
    }
};

export default class OtherInfoImage extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        imagePath: PropTypes.string,
        setImagePath: PropTypes.func.isRequired
    };

    render () {
        return this.props.buildSiteMode === editModes.UPLOAD_IMAGES ? (
            <div
                style={{
                    ...styles.backgroundImageWidget,
                    ...{backgroundImage: `url(\'${this.props.imagePath}\')`}
                }}
            >
                <div style={styles.backgroundWidget}>
                    <p style={styles.widgetText}>
                        {'AGGIUNGI IMMAGINE'}
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
                            <ImageUploader setImagePath={this.props.setImagePath} />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <Image src={this.props.imagePath} style={styles.boxImage} circle={true} />
        );
    }
}
