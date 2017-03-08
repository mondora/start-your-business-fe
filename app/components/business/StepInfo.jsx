import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';
import {editModes} from 'lib/business-site-utils';

export default class StepInfo extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        stepIcon: PropTypes.string,
        stepNumber: PropTypes.string,
        stepSymbolStyle: PropTypes.object,
        stepText: PropTypes.string.isRequired,
        stepTitle: PropTypes.string.isRequired,
    };

    

    render () {
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <div style={{margin: isEditMode ? '30px 10px' : '30px 20px', textAlign: 'center'}}>
                <div style={this.props.stepSymbolStyle}>
                    {this.props.stepNumber ? this.props.stepNumber : null}
                    {this.props.stepIcon ?
                        <Glyphicon
                            glyph={this.props.stepIcon}
                        />
                    : null}
                </div>
                <h4 style={{fontSize: isEditMode ? '15px' : '1.6em', fontWeight: '700'}}>
                    {this.props.stepTitle}
                </h4>
                <p style={{fontSize: '1.2em'}}>
                    {this.props.stepText}
                </p>
            </div>
        );
    }
}
