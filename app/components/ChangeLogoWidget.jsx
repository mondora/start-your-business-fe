import React, {Component, PropTypes} from 'react';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

import {editModes} from 'lib/business-site-utils';

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
                    {'logo uploader'}
                </div>
            </OverlayTriggerIcon>
        );
    }
}