import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes, getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import StepInfo from 'components/business/StepInfo';

const styles = (siteColors) => ({
    stepsContainer: {
        borderRadius: 10,
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        textAlign: 'center'
    },
    stepTitle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        padding: '20px',
        margin: 0,
        borderBottom: `1px solid ${colors.white}`
    },
    stepNumberWrp: {
        display: 'inline-block',
        width: 70,
        height: 70,
        textAlign: 'center',
        fontSize: '3.8em',
        fontWeight: '700',
        lineHeight: '70px',
        borderRadius: '100%',
        color: siteColors.mainColor,
        backgroundColor: colors.white
    }
});

export default class Step extends Component {
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
                number: '1',
                title: this.renderTextField(isEditMode, 'titleStep1', 'SCEGLI UNA TRA LE TRE SOTTOSCRIZIONI', titleStep1),
                text: this.renderTextareaField(isEditMode, 'textStep1', 'Abbiamo pensato a tutti, ma se desideri personalizzare il tuo ordine, chiama al 012-3456789', textStep1)
            },
            {
                number: '2',
                title: this.renderTextField(isEditMode, 'titleStep2', 'RISPARMI E NON DOVRAI PENSARE A NULLA', titleStep2),
                text: this.renderTextareaField(isEditMode, 'textStep2', 'Ogni mese ti arriverà una cassettina con frutta e verdura biologica di stagione', textStep2)
            },
            {
                number: '3',
                title: this.renderTextField(isEditMode, 'titleStep3', 'POTRAI DISISCRIVERTI QUANDO VUOI', titleStep3),
                text: this.renderTextareaField(isEditMode, 'textStep3', 'Se non sei soddisfatto del servizio, puoi decidere di non ricevere più le nostre cassettine', textStep3)
            }
        ];
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.steps.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.grey},
            {margin: 0, width: '100%'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.steps.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.grey, textAlign: 'center', fontSize: '14px', minHeight: 120},
            {margin: 0, width:'100%'}
        );
    }

    render () {
        const {stepsTitle} = this.props.siteConfig.steps;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.steps'}>
                <Row>
                    <Col xs={12}>
                        <div style={style.stepsContainer}>
                            <h2 style={style.stepTitle}>
                                {this.renderTextField(isEditMode, 'stepsTitle', 'COME FUNZIONA', stepsTitle)}
                            </h2>
                            <Row>
                                {this.getStep().map((stepInfo, index) =>
                                    <Col key={index} xs={12} sm={4}>
                                        <StepInfo
                                            buildSiteMode={this.props.buildSiteMode}
                                            stepTitle={stepInfo.title}
                                            stepText={stepInfo.text}
                                            stepNumber={stepInfo.number}
                                            stepSymbolStyle={style.stepNumberWrp}
                                        />
                                    </Col>
                                )}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}
