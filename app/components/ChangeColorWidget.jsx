import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import {editModes} from 'constants/editModes';

import CustomColorPicker from 'components/CustomColorPicker';
import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

class ChangeColorWidget extends Component {
    static propTypes = {
        colors: PropTypes.object.isRequired,
        editMode: PropTypes.number,
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
                <CustomColorPicker
                    colors={this.props.colors}
                />
            </OverlayTriggerIcon>
        );
    }
}

export default Radium(ChangeColorWidget);
