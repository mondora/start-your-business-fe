import React, {Component, PropTypes} from 'react';

import OverlayTriggerIcon from 'components/OverlayTriggerIcon';

export default class ChooseTemplateWidget extends Component {
    static propTypes = {
        selectedTemplateId: PropTypes.string
    };

    render () {
        return (
            <OverlayTriggerIcon
                iconName='change_template_white'
                name='choose-template-widget'
            >
                <div>
                    {'SCEGLI UN TEMPLATE'}
                </div>
            </OverlayTriggerIcon>
        );
    }
}