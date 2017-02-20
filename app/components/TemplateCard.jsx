import React, {Component, PropTypes} from 'react';

export default class TemplateCard extends Component {
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
        selectedTemplate: PropTypes.number,
        template: PropTypes.object.isRequired
    };

    render () {
        const {id, image, label} = this.props.template;
        return (
            <div>
                <div onClick={() => this.props.onSelect(id)}>
                    {this.props.selectedTemplate === id ? 'V ' : 'X '}
                </div>
                {label}
                <img src={image} />
            </div>
        );
    }
}