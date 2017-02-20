import R from 'ramda';
import React, {Component, PropTypes} from 'react';

import {editModes, templates} from 'lib/business-site-utils';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';
import TemplateCard from 'components/TemplateCard';

export default class ChooseTemplateWidget extends Component {
    static propTypes = {
        editMode: PropTypes.number,
        selectTemplate: PropTypes.func.isRequired,
        selectedTemplateId: PropTypes.number,
        setEditMode: PropTypes.func.isRequired
    };

    setEditMode (editMode) {
        return () => this.props.setEditMode(editMode);
    }

    renderTemplates () {
        return R.map(template => (
            <TemplateCard
                key={template.id}
                onSelect={this.props.selectTemplate}
                selectedTemplate={this.props.selectedTemplateId}
                template={template}
            />
        ), templates);
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
                {this.renderTemplates()}
            </OverlayTriggerIcon>
        );
    }
}
