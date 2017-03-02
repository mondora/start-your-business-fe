import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes, getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const styles = (siteColors) => ({
    introWrp: {
        textAlign: 'center',
        margin: '60px 0'
    },
    introTitle: {
        fontSize: 'calc(22px + 1vw)',
        fontWeight: '700',
        color: colors.darkGrey
    },
    introText: {
        fontSize: '1.3em',
        color: colors.darkGrey
    },
    button: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        color: siteColors.mainColor,
        borderColor: siteColors.mainColor
    }
});

class Intro extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        form: PropTypes.object,
        siteConfig: PropTypes.object.isRequired
    };

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.intro.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.darkGrey},
            {margin: 0, width: '100vw'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `businessSite.siteConfig.intro.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.darkGrey, textAlign: 'center'},
            {margin: 0, width:'100%'}
        );
    }

    render () {
        const {introTitle, introText} = this.props.siteConfig.intro;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.intro'}>
                <Row>
                    <Col xs={12} style={style.introWrp}>
                        <h2 style={style.introTitle}>
                            {this.renderTextField(isEditMode, 'introTitle', 'CASSETTINE BIOLOGICHE', introTitle)}
                        </h2>
                        <p style={style.introText}>
                            {this.renderTextareaField(isEditMode, 'introText', 'Scegliamo i prodotti migliori e te li consegnamo a casa nella formula più adatta alle tue esigenze!', introText)}
                        </p>
                        <Button style={style.button}>
                            {'INIZIA ORA!'}
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default Radium(Intro);
