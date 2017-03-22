import Radium from 'radium';
import React, {PropTypes, Component} from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import OtherInfoImage from 'components/business/OtherInfoImage';

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
    imageWrp: {
        position: 'absolute',
        top: '-80px',
        left: '50%',
        borderRadius: '100%',
        marginLeft: '-80px',
        width: 164,
        height: 164,
        textAlign: 'center',
        border: `2px solid ${colors.white}`
    },
    textWrp: {
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
        fontSize: '1.5em',
        color: colors.white,
        textAlign: 'center',
        padding: '30px 0'

    },
    buttonWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: '0 20%',
        '@media screen and (min-width: 991px)': {
            margin: '0 25%'
        },
        '@media screen and (min-width: 767px) and (max-width: 991px)': {
            margin: '0 10%'
        },
        '@media screen and (max-width: 767px)': {
            flexDirection: 'column'
        }
    },
    button: {
        fontSize: '1.2em',
        padding: '8px 20px',
        borderRadius: 0,
        color: siteColors.mainColor,
        border: 0,
        margin: '0px 5px 20px 0px'
    }
});

class OtherInfo extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        setImagePath: PropTypes.func.isRequired,
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
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.info.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center'},
            {margin: 0, minWidth: '200px'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.info.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, minHeight: '100px'},
            {margin: 0, width:'100%'}
        );
    }

    getInfoBox () {
        const {image} = this.props.siteConfig.info;
        return [
            {
                field: 'image',
                imagePath: image ? image : '/_assets/images/template_02/infobox.jpg'
            }
        ];
    }

    renderImage (imagePath, index, infoBox) {
        const field = infoBox.field;
        return (
            <OtherInfoImage
                key={index}
                buildSiteMode={this.props.buildSiteMode}
                imagePath={imagePath}
                setImagePath={(imagePath) => this.props.setImagePath(['element', 'info', field], imagePath)}
            />
        );
    }

    render () {
        const {textBox, buttonBox1, buttonBox2, image} = this.props.siteConfig.info;
        const imagePath = image ? image : '/_assets/images/template_02/infobox.jpg';
        const style = styles(this.props.siteConfig.colors);
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <Form model={'siteConfig.element.info'}>
                <div style={style.boxContainer}>
                    <div style={style.imageWrp}>
                        {this.getInfoBox().map((index, infoBox) =>
                            this.renderImage(imagePath, index, infoBox)
                        )}
                    </div>
                    <div className='container-fluid'>
                        <div style={style.textWrp}>
                            {this.renderTextareaField(
                                isEditMode,
                                'textBox',
                                'Sappiamo che amerai i nostri prodotti, se però necessiti di una formula personalizzata o se vuoi comunicarci qualcosa non esitare a scriverci!',
                                <p style={style.boxText}>
                                    {textBox}
                                </p>
                            )}
                        </div>
                        <div style={style.buttonWrp}>
                            <Button style={style.button}>
                                {this.renderTextField(isEditMode, 'buttonBox1', 'PER SAPERNE DI PIÙ', buttonBox1)} {' > '}
                            </Button>
                            <Button style={style.button}>
                                {this.renderTextField(isEditMode, 'buttonBox2', 'SCRIVICI UN EMAIL', buttonBox2)} {' > '}
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
}

export default Radium(OtherInfo);
