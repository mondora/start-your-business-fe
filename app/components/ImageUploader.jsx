import React, {Component, PropTypes} from 'react';

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
        setLogoImage: PropTypes.func.isRequired
    };


    getImage (event, setLogoImage) {
        if (event && event.target && event.target.files && event.target.files.length > 0) {
            const fileInfo = event.target.files[0];
            if (this.isValid(fileInfo)) {
                const reader = new FileReader();
                reader.addEventListener('load', () => {
                    setLogoImage(reader.result);
                }, false);

                reader.readAsDataURL(fileInfo);
            } else {
                // TODO implementare un errore utente
                console.log('Image validation failed');
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
                onChange={(event) => this.getImage(event, this.props.setLogoImage)}
                style={styles.inputFile}
            />
        );
    }
}
