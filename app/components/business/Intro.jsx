import React, {Component, PropTypes} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import {editModes} from 'constants/editModes';
import {getTextAreaField, getTextField} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import SignUpModal from 'components/business/SignUpModal';

const commonStyles = {
    introWrp: {
        textAlign: 'center',
        margin: '60px 0'
    },
    introTextStyle: {
        fontSize: '1.4em',
        color: colors.templateGreyText
    }
};

export default class Intro extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        buttonStyle: PropTypes.object,
        form: PropTypes.object,
        introTitleStyle: PropTypes.object,
        signUpForm: PropTypes.object,
        signUpState: PropTypes.object.isRequired,
        signUpUser: PropTypes.func.isRequired,
        siteConfig: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            showLoginModal: false,
            showSignUpModal: false
        };
    }

    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return getTextField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.element.intro.${fieldName}`,
            placeholder,
            readNode,
            {textAlign: 'center', color: colors.templateGreyText},
            {margin: 0, width: '100vw'}
        );
    }

    renderTextareaField (isEditMode, fieldName, placeholder, readNode) {
        return getTextAreaField (
            isEditMode,
            this.props.form[fieldName],
            `siteConfig.element.intro.${fieldName}`,
            placeholder,
            readNode,
            {color: colors.templateGreyText, textAlign: 'center'},
            {margin: 0, width:'100%'}
        );
    }

    renderModal () {
        const {
            siteConfig,
            signUpForm,
            signUpUser,
            signUpState
        } = this.props;
        return (
            <SignUpModal
                backgroundColor={siteConfig.colors.mainColor}
                form={signUpForm}
                onClose={() => this.setState({showSignUpModal: false})}
                show={this.state.showSignUpModal}
                signUpUser={signUpUser}
                signUpState={signUpState}
            />
        );
    }

    render () {
        const {introTitle, introText} = this.props.siteConfig.intro;
        const {buildSiteMode, introTitleStyle, buttonStyle} = this.props;
        const isEditMode = buildSiteMode === editModes.EDIT_TEXTS;
        const onClickSignUp = this.props.buildSiteMode ? null : () => this.setState({showSignUpModal: true});
        return (
            <Form model={'siteConfig.element.intro'}>
                <Row>
                    <Col xs={12} style={commonStyles.introWrp}>
                        <h2 style={introTitleStyle}>
                            {this.renderTextField(isEditMode, 'introTitle', 'CASSETTINE BIOLOGICHE', introTitle)}
                        </h2>
                        <p style={commonStyles.introTextStyle}>
                            {this.renderTextareaField(isEditMode, 'introText', 'Scegliamo i prodotti migliori e te li consegnamo a casa nella formula più adatta alle tue esigenze!', introText)}
                        </p>
                        <Button style={buttonStyle} onClick={onClickSignUp}>
                            {'INIZIA ORA!'}
                        </Button>
                    </Col>
                </Row>
                {this.renderModal()}
            </Form>
        );
    }
}
