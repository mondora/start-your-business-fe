import React, {Component, PropTypes} from 'react';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

import {editModes} from 'lib/business-site-utils';

export default class ChooseTemplateWidget extends Component {
    static propTypes = {
        editMode: PropTypes.number,
        selectedTemplateId: PropTypes.string,
        setEditMode: PropTypes.func.isRequired
    };

    render () {
        return (
            <OverlayTriggerIcon
                iconName='change_template_white'
                name='choose-template-widget'
                onClick={() => this.props.setEditMode(editModes.CHOOSE_TEMPLATE)}
                showOverlay={this.props.editMode === editModes.CHOOSE_TEMPLATE}
            >
                <div>
                    {'SCEGLI UN TEMPLATE'}
                </div>
            </OverlayTriggerIcon>
        );
    }
}