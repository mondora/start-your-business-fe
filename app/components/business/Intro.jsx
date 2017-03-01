import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';

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
    buttonWrp: {
        ':hover': {
            opacity: '.7'
        }
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
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.intro.${fieldName}`}
                placeholder={placeholder}
            />
        ) : readNode;
    }

    render () {
        const {introTitle, introText} = this.props.siteConfig.intro;
        const isEditMode = this.props.buildSiteMode === editModes.EDIT_TEXTS;
        const style = styles(this.props.siteConfig.colors);
        return (
            <Form model={'businessSite.siteConfig.intro'}>
                <Row>
                    <Col xs={12} style={style.introWrp}>
                        {this.renderTextField(isEditMode, 'introTitle', 'CASSETTINE BIOLOGICHE', (
                            <h2 style={style.introTitle}>
                                {introTitle}
                            </h2>
                        ))}
                        {this.renderTextField(isEditMode, 'introText',
                            `Scegliamo i prodotti migliori e te li consegnamo a
                            casa nella formula più adatta alle tue esigenze!`, (
                                <p style={style.introText}>
                                    {introText}
                                </p>
                            ))}
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
