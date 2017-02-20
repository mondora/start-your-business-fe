import React, {Component, PropTypes} from 'react';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

const styles = {
    subTitle: {
        display: 'inline-block',
        width: '100%',
        fontSize: 18,
        color: colors.white,
        float: 'left'
    },
    inputFile: {
        backgroundColor: colors.white,
        color: colors.grey,
        padding: 10,
        borderRadius: 6
    }
};

export default class ChangeLogoWidget extends Component {
    static propTypes = {
        editMode: PropTypes.number,
        selectedTemplateId: PropTypes.string,
        setEditMode: PropTypes.func.isRequired
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
                    <input
                        id='upload'
                        ref='upload'
                        type='file'
                        accept='image/*'
                        onChange={(event)=> {
                            this.readFile(event);
                        }}
                        style={styles.inputFile}
                    />
                </div>
            </OverlayTriggerIcon>
        );
    }
}
