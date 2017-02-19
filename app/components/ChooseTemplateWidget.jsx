import React, {Component, PropTypes} from 'react';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

import {editModes} from 'lib/business-site-utils';

export default class ChooseTemplateWidget extends Component {
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
                iconName='change_template_white'
                name='choose-template-widget'
                onClick={this.setEditMode(editModes.CHOOSE_TEMPLATE)}
                onClose={this.setEditMode(editModes.VIEW)}
                showOverlay={this.props.editMode === editModes.CHOOSE_TEMPLATE}
                title='SCEGLI UN TEMPLATE'
            >
                <div>
                    {'lista di template'}
                </div>
            </OverlayTriggerIcon>
        );
    }
}