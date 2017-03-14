import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import StepInfo from 'components/business/StepInfo';

const styles = (siteColors) => ({
    stepsContainer: {
        borderTop: `1px solid ${siteColors.mainColor}`,
        padding: '30px 0',
        textAlign: 'center'
    },
    stepIconWrp: {
        display: 'inline-block',
        fontSize: 50,
        color: siteColors.mainColor
    }
});

export default class Steps extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    getTextReadNode (text) {
        return (
            <p style={{fontSize: '1.2em'}}>
                {text}
            </p>
        );
    }

    getTitleReadNode (title) {
        return (
            <h4 style={{fontSize: '1.6em', fontWeight: '700'}}>
                {title}
            </h4>
        );
    }

    getStep () {
        const {titleStep1, titleStep2, titleStep3, textStep1, textStep2, textStep3} = this.props.siteConfig.steps;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return [
            {
                icon: 'glyphicon glyphicon-th-list',
                title: this.renderTextField(isEditMode, 'titleStep1', 'SCEGLI UNA TRA LE TRE SOTTOSCRIZIONI', titleStep1),
                text: this.renderTextareaField(isEditMode, 'textStep1', 'Abbiamo pensato a tutti, ma se desideri personalizzare il tuo ordine, chiama al 012-3456789', textStep1)
            },
            {
                icon: 'glyphicon glyphicon-calendar',
                title: this.renderTextField(isEditMode, 'titleStep2', 'RISPARMI E NON DOVRAI PENSARE A NULLA', titleStep2),
                text: this.renderTextareaField(isEditMode, 'textStep2', 'Ogni mese ti arriverà una cassettina con frutta e verdura biologica di stagione', textStep2)
            },
            {
                icon: 'glyphicon glyphicon-lock',
                title: this.renderTextField(isEditMode, 'titleStep3', 'POTRAI DISISCRIVERTI QUANDO VUOI', titleStep3),
                text: this.renderTextareaField(isEditMode, 'textStep3', 'Se non sei soddisfatto del servizio, puoi decidere di non ricevere più le nostre cassettine', textStep3)
            }
        ];
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.steps.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.templateGreyText},
            {margin: 0, width: '100%'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.steps.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, textAlign: 'center', fontSize: '14px', minHeight: 120},
            {margin: 0, width:'100%'}
        );
    }

    render () {
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'siteConfig.element.steps'}>
                <div style={style.stepsContainer}>
                    <Row>
                        {this.getStep().map((stepInfo, index) =>
                            <Col key={index} xs={12} sm={4}>
                                <StepInfo
                                    buildSiteMode={this.props.buildSiteMode}
                                    stepTitle={stepInfo.title}
                                    stepText={stepInfo.text}
                                    stepIcon={stepInfo.icon}
                                    stepSymbolStyle={style.stepIconWrp}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </Form>
        );
    }
}
