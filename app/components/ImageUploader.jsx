import React, {Component} from 'react';

import * as colors from 'lib/colors';

const styles = {
    inputFile: {
        backgroundColor: colors.white,
        color: colors.grey,
        padding: 10,
        borderRadius: 6
    }
};

export default class ImageUploader extends Component {
    render () {
        return (
            <input
                type='file'
                accept='image/*'
                onChange={(event)=> {
                    console.log(event);
                }}
                style={styles.inputFile}
            />
        );
    }
}
