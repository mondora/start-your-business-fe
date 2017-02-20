import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import Button from 'components/CustomButton';
import FormErrorMessage from 'components/FormErrorMessage';
import FormInput from 'components/FormInput';
import HorizontalLine from 'components/HorizontalLine';

import * as colors from 'lib/colors';
import {genericRequiredValidator} from 'lib/form-utils';

const styles = {
    newCode: {
        cursor: 'pointer',
        textDecoration: 'underline',
        color: colors.grey
    }
};

export default class SignUpConfirmationModal extends Component {
    static propTypes = {
        confirmSignUp: PropTypes.func.isRequired,
        form: PropTypes.object.isRequired,
        sendNewCode: PropTypes.func.isRequired,
        signupConfirmation: PropTypes.object.isRequired,
        signupConfirmed: PropTypes.bool.isRequired,
        username: PropTypes.string
    };

    confirmRegistration ({code}) {
        const {confirmSignUp, username} = this.props;
        confirmSignUp(username, code);
    }

    renderSignUpConfirmationForm () {
        return (
            <Form
                model={'user.signup.confirmation'}
                onSubmit={this.confirmRegistration.bind(this)}
            >
                <FormInput
                    field={this.props.form.code}
                    inputType='text'
                    label='Codice'
                    model='user.signup.confirmation.code'
                    placeholder='Codice'
                    validator={genericRequiredValidator}
                />

                <FormErrorMessage
                    message={this.props.signupConfirmation.errorMessage}
                />

                <Button
                    backgroundColor={colors.darkGrey}
                    text='TERMINA REGISTRAZIONE >'
                    type='submit'
                />
            </Form>
        );
    }

    render () {
        const {sendNewCode, signupConfirmed, username} = this.props;
        return (
            <Modal show={!signupConfirmed}>
                <Modal.Header>
                    <Modal.Title style={{textAlign: 'center'}}>
                        <b style={{fontSize: 25}}>{'VALIDA LA REGISTRAZIONE'}</b>
                        <br />
                        <b>{'Inserisci qui il codice che abbiamo inviato alla tua casella email'}</b>
                        <HorizontalLine color={colors.primaryColor} width={60} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.renderSignUpConfirmationForm()}
                </Modal.Body>
                <Modal.Footer>
                    <label style={styles.newCode} onClick={() => sendNewCode(username)}>
                        {'INVIA UN NUOVO CODICE'}
                    </label>
                </Modal.Footer>
            </Modal>
        );
    }
}
