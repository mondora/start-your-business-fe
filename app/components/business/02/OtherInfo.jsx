import Radium from 'radium';
import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
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
    imageWrp: {
        position: 'absolute',
        top: '-80px',
        left: '50%',
        marginLeft: '-80px'
    },
    boxImage: {
        width: 160,
        height: 160,
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
            margin: '0 25%',
        },
        '@media screen and (min-width: 767px) and (max-width: 991px)': {
            margin: '0 10%',
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
        marginBottom: 20
    }
});

class OtherInfo extends BusinessOtherInfo {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        siteConfig: PropTypes.object.isRequired
    };

    render () {
        const {textBox, buttonBox1, buttonBox2} = this.props.siteConfig.info;
        const style = styles(this.props.siteConfig.colors);
        const {buildSiteMode} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        return (
            <Form model={'businessSite.siteConfig.info'}>
                <div style={style.boxContainer}>
                    <div style={style.imageWrp}>
                        {this.renderImage('infobox1.jpg', style)}
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
