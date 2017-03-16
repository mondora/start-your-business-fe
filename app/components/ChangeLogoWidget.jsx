import React, {Component, PropTypes} from 'react';

import {editModes} from 'constants/editModes';
import * as colors from 'lib/colors';

import ImageUploader from 'components/ImageUploader';
import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

const styles = {
    subTitle: {
        display: 'inline-block',
        width: '100%',
        fontSize: 18,
        color: colors.white,
        float: 'left'
    }
};

export default class ChangeLogoWidget extends Component {
    static propTypes = {
        editMode: PropTypes.number,
        selectedTemplateId: PropTypes.string,
        setEditMode: PropTypes.func.isRequired,
        setImagePath: PropTypes.func.isRequired
    };

    setEditMode (editMode) {
        return () => this.props.setEditMode(editMode);
    }

    render () {
        return (
            <OverlayTriggerIcon
                iconName='change_logo_white'
                name='change-logo-widget'
                onClick={this.setEditMode(editModes.UPLOAD_LOGO)}
                onClose={this.setEditMode(editModes.VIEW)}
                showOverlay={this.props.editMode === editModes.UPLOAD_LOGO}
                title='CARICA IL TUO LOGO'
            >
                <div>
                    <p style={styles.subTitle}>{'Scegli file dal computer'}</p>
                    <ImageUploader
                        setImagePath={(imagePath) => this.props.setImagePath(['element', 'logo'], imagePath)}
                    />
                </div>
            </OverlayTriggerIcon>
        );
    }
}
