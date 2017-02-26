import React, {Component, PropTypes} from 'react';
import {Col, Row, Image, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';

const styles = (siteColors) => ({
    boxWrp: {
        borderRadius: 10,
        backgroundColor: colors.white,
        color: colors.grey,
        textAlign: 'center',
        margin: '50px 0'
    },
    boxImage: {
        width: 160,
        height: 160
    },
    boxText: {

    },
    boxButton: {
        color: siteColors.mainColor,
        borderColor: siteColors.mainColor
    }
});

export default class OtherInfo extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };


    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.info.${fieldName}`}
                placeholder={placeholder}
            />
        ) : readNode;
    }

    render () {
        const {textBox1, textBox2, buttonBox1, buttonBox2} = this.props.siteConfig.info;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.info'}>
                <Row>
                    <Col xs={12} sm={6}>
                        <div style={style.boxWrp}>
                            <Image src='./_assets/images/template_01/infobox1.jpg' style={style.boxImage} circle={true} />
                            <p style={style.boxText}>
                                {this.renderTextField(isEditMode, 'textBox1', `Scopri altro riguardo
                                ai nostri prodotti, sul nostro sito troverai tutte le informazioni che cercavi`, textBox1)}
                            </p>
                            <Button style={style.button}>
                                {this.renderTextField(isEditMode, 'buttonBox1', 'INIZIA ORA!', buttonBox1)}
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}>
                        <div style={style.boxWrp}>
                            <Image src='./_assets/images/template_01/infobox2.jpg' style={style.boxImage} circle={true} />
                            <p style={style.boxText}>
                                {this.renderTextField(isEditMode, 'textBox2', `Hai delle domande riguardo
                                al tuo ordine o desideri sospendere le tue consegne?`, textBox2)}
                            </p>
                            <Button style={style.button}>
                                {this.renderTextField(isEditMode, 'buttonBox2', 'EMAIL', buttonBox2)}
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        );
    }
}
