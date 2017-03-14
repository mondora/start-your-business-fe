import Radium from 'radium';
import R from 'ramda';
import React, {Component, PropTypes} from 'react';

import {editModes} from 'constants/editModes';
import {templates} from 'lib/business-site-utils';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';
import TemplateCard from 'components/TemplateCard';

const styles = {
    templateWidgetWrp: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column'
        }
    }
};

class ChooseTemplateWidget extends Component {
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
                <div style={styles.templateWidgetWrp}>
                    {this.renderTemplates()}
                </div>
            </OverlayTriggerIcon>
        );
    }
}

export default Radium(ChooseTemplateWidget);
