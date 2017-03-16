import React, {Component, PropTypes} from 'react';
import UUID from 'uuid-js';

import {uploadImage} from 'lib/aws-s3-utils';
import * as colors from 'lib/colors';

const styles = {
    inputFile: {
        backgroundColor: colors.white,
        color: colors.grey,
        padding: 10,
        borderRadius: 6
    }
};

const MAX_SIZE = 5242880;

export default class ImageUploader extends Component {
    static propTypes = {
        setImagePath: PropTypes.func.isRequired
    };

    getAndUploadImage (event, setImagePath) {
        if (event && event.target && event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            if (this.isValid(file)) {
                const {name} = file;
                const imageName = UUID.create().hex + name.substring(name.lastIndexOf('.'), name.length);
                //TODO put right businessName
                uploadImage('pippo', file, imageName, setImagePath);
            } else {
                // TODO implementare un errore utente
                console.error('Image validation failed');
            }
        }
    }

    isValid (file) {
        return (file && file.size < MAX_SIZE && file.type.match(/image/g));
    }

    render () {
        return (
            <input
                type='file'
                accept='image/*'
                onChange={(event) => this.getAndUploadImage(event, this.props.setImagePath)}
                style={styles.inputFile}
            />
        );
    }
}
