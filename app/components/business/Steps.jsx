import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';

const styles = (siteColors) => ({
    stepsWrp: {
        borderRadius: 10,
        backgroundColor: siteColors.mainColor,
        color: colors.white,
        textAlign: 'center'
    },
    step: {
        margin: '30px 20px'
    },
    stepNumber: {
        display: 'inline-block',
        width: 70,
        height: 70,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: '700',
        lineHeight: '70px',
        borderRadius: '100%',
        color: colors.templatePrimaryColor,
        backgroundColor: colors.white
    },
    stepTitle: {
        fontWeight: '700',
        padding: '20px 0px',
        margin: 0,
        borderBottom: `1px solid ${colors.white}`
    }
});

export default class Steps extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    getStep () {
        const {titleStep1, titleStep2, titleStep3, textStep1, textStep2, textStep3} = this.props.siteConfig.steps;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return [
            {
                number: '1',
                title: this.renderTextField(isEditMode, 'titleStep1', 'SCEGLI UNA TRA LE TRE SOTTOSCRIZIONI', titleStep1),
                text: this.renderTextField(isEditMode, 'textStep1', `Abbiamo pensato a tutti, ma se desideri
                personalizzare il tuo ordine, chiama al 012-3456789`, textStep1)
            },
            {
                number: '2',
                title: this.renderTextField(isEditMode, 'titleStep2', 'RISPARMI E NON DOVRAI PENSARE A NULLA', titleStep2),
                text: this.renderTextField(isEditMode, 'textStep2', `Ogni mese ti arriverà una cassettina con
                frutta e verdura biologica di stagione`, textStep2)
            },
            {
                number: '3',
                title: this.renderTextField(isEditMode, 'titleStep3', 'POTRAI DISISCRIVERTI QUANDO VUOI', titleStep3),
                text: this.renderTextField(isEditMode, 'textStep3', `Se non sei soddisfatto del servizio, puoi decidere di
                non ricevere più le nostre cassettine`, textStep3)
            }
        ];
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.steps.${fieldName}`}
                placeholder={placeholder}
            />
        ) : readNode;
    }

    render () {
        const {stepsTitle} = this.props.siteConfig.steps;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.steps'}>
                <Row>
                    <Col xs={12}>
                        <div style={style.stepsWrp}>
                            <h2 style={style.stepTitle}>
                                {this.renderTextField(isEditMode, 'stepsTitle', 'COME FUNZIONA', stepsTitle)}
                            </h2>
                            <Row>
                                {this.getStep().map((stepInfo, index) =>
                                    <Col key={index} xs={12} sm={4}>
                                        <div style={style.step}>
                                            <div style={style.stepNumber}>
                                                {stepInfo.number}
                                            </div>
                                            <h4>
                                                {stepInfo.title}
                                            </h4>
                                            <p>
                                                {stepInfo.text}
                                            </p>
                                        </div>
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
