import React, {Component, PropTypes} from 'react';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

import {editModes} from 'lib/business-site-utils';

export default class ChangeColorWidget extends Component {
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
                iconName='change_color_white'
                name='change-color-widget'
                onClick={this.setEditMode(editModes.CHOOSE_COLOR)}
                onClose={this.setEditMode(editModes.VIEW)}
                showOverlay={this.props.editMode === editModes.CHOOSE_COLOR}
                title='SCEGLI IL COLORE'
            >
                <div>
                    {'color selector'}
                </div>
            </OverlayTriggerIcon>
        );
    }
}