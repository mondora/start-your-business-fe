import React, {Component, PropTypes} from 'react';
import {Image} from 'react-bootstrap';

import {editModes} from 'constants/editModes';
import {getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import ImageUploader from 'components/ImageUploader';

export default class OtherInfo extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        setImagePath: PropTypes.func.isRequired,
        siteConfig: PropTypes.object.isRequired
    };

    getTextReadNode (style, text) {
        return (
            <p style={style.boxText}>
                {text}
            </p>
        );
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.info.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center'},
            {margin: 0}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.info.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, minHeight: '100px'},
            {margin: 0, width:'100%'}
        );
    }

    renderImage (imagePath, style, field) {
        return this.props.buildSiteMode === editModes.UPLOAD_IMAGES ? (
            <div>
                <p>
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
                    <ImageUploader
                        setImagePath={(imagePath) => this.props.setImagePath(['element', 'info', field], imagePath)}
                    />
                </div>
            </div>
        ) : (
            <Image src={imagePath} style={style.boxImage} circle={true} />
        );
    }
}
