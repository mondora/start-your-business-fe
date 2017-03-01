import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Image, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import FormTextarea from 'components/FormTextarea';

const styles = (siteColors) => ({
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexFlow: 'no-wrap',
        justifyContent: 'space-between',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column',
        }
    },
    boxWrp: {
        width: '48%',
        borderRadius: 10,
        backgroundColor: colors.white,
        textAlign: 'center',
        marginBottom: 20,
        padding: 20,
        '@media screen and (max-width: 767px)': {
            width: '100%'
        }
    },
    boxImage: {
        width: 160,
        height: 160,
        textAlign: 'center'
    },
    textWrp: {
        minHeight: '160px',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (max-width: 991px)': {
            textAlign: 'center',
            height: 'auto',
            padding: '20px 0'
        }
    },
    boxText: {
        fontSize: '1.1em',
        color: colors.darkGrey

    },
    boxButton: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        color: siteColors.mainColor,
        borderColor: siteColors.mainColor
    }
});

class OtherInfo extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    getTextReadNode (style, text) {
        return (
            <p style={style.boxText}>
                {text}
            </p>
        );
    }

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

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormTextarea
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.intro.${fieldName}`}
                placeholder={placeholder}
                textareaStyle={{
                    textAlign: 'center',
                    color: colors.grey
                }}
                style={{margin: 0, width:'100%', maxHeight: '30px'}}
            />
        ) : readNode;
    }

    getInfoBox () {
        const {textBox1, textBox2, buttonBox1, buttonBox2} = this.props.siteConfig.info;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return [
            {
                photo: 'infobox1.jpg',
                text: this.renderTextareaField(isEditMode, 'textBox1', `Scopri altro riguardo
                ai nostri prodotti, sul nostro sito troverai tutte le informazioni che cercavi`, textBox1),
                button: this.renderTextField(isEditMode, 'buttonBox1', 'INIZIA ORA!', buttonBox1)
            },
            {
                photo: 'infobox2.jpg',
                text: this.renderTextareaField(isEditMode, 'textBox2', `Hai delle domande riguardo
                al tuo ordine o desideri sospendere le tue consegne?`, textBox2),
                button: this.renderTextField(isEditMode, 'buttonBox2', 'SCRIVICI UN EMAIL', buttonBox2)
            }
        ];
    }

    render () {
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.info'}>
                <div style={style.boxContainer}>
                    {this.getInfoBox().map((infoBox, index) =>
                        <div key={index} style={style.boxWrp}>
                            <Row>
                                <Col xs={12} md={5}>
                                    <Image src={`./_assets/images/template_01/${infoBox.photo}`} style={style.boxImage} circle={true} />
                                </Col>
                                <Col xs={12} md={7}>
                                    <div style={style.textWrp}>
                                        <div>
                                            <p style={style.boxText}>
                                                {infoBox.text}
                                            </p>
                                            <Button style={style.boxButton}>
                                                {infoBox.button}
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )}
                </div>
            </Form>
        );
    }
}

export default Radium(OtherInfo);
