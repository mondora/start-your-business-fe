import Radium from 'radium';
import React, {PropTypes} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import * as colors from 'lib/colors';

import BusinessOtherInfo from 'components/business/OtherInfo';

const styles = (siteColors) => ({
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexFlow: 'no-wrap',
        justifyContent: 'space-between',
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column'
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
        marginLeft: '10px',
        minHeight: '160px',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '@media screen and (max-width: 991px)': {
            textAlign: 'center',
            height: 'auto',
            padding: '20px 0',
            marginLeft: 0
        }
    },
    boxText: {
        fontSize: '1.1em',
        color: colors.templateGreyText

    },
    boxButton: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        color: siteColors.mainColor,
        borderColor: siteColors.mainColor
    }
});

class OtherInfo extends BusinessOtherInfo {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        siteConfig: PropTypes.object.isRequired
    };

    getInfoBox () {
        const {textBox1, textBox2, buttonBox1, buttonBox2, image1, image2} = this.props.siteConfig.info;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        return [
            {
                field: 'image1',
                imagePath: image1 ? image1 : '/_assets/images/template_01/infobox1.jpg',
                text: this.renderTextareaField(isEditMode, 'textBox1', 'Scopri altro riguardo ai nostri prodotti, sul nostro sito troverai tutte le informazioni che cercavi', textBox1),
                button: this.renderTextField(isEditMode, 'buttonBox1', 'PER SAPERNE DI PIÙ', buttonBox1)
            },
            {
                field: 'image2',
                imagePath: image2 ? image2 : '/_assets/images/template_01/infobox2.jpg',
                text: this.renderTextareaField(isEditMode, 'textBox2', 'Hai delle domande riguardo al tuo ordine o desideri sospendere le tue consegne?', textBox2),
                button: this.renderTextField(isEditMode, 'buttonBox2', 'SCRIVICI UN EMAIL', buttonBox2)
            }
        ];
    }

    render () {
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'siteConfig.element.info'}>
                <div style={style.boxContainer}>
                    {this.getInfoBox().map((infoBox, index) =>
                        <div key={index} style={style.boxWrp}>
                            <Row>
                                <Col xs={12} md={5}>
                                    {this.renderImage(infoBox.imagePath, style, infoBox.field)}
                                </Col>
                                <Col xs={12} md={7}>
                                    <div style={style.textWrp}>
                                        <div>
                                            <p style={style.boxText}>
                                                {infoBox.text}
                                            </p>
                                            <Button style={style.boxButton}>
                                                {infoBox.button} {' > '}
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
