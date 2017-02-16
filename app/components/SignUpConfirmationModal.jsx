import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-redux-form';

import Button from 'components/CustomButton';
import FormErrorMessage from 'components/FormErrorMessage';
import FormInput from 'components/FormInput';

import {genericRequiredValidator} from 'lib/form-utils';

export default class SignUpConfirmationModal extends Component {
    static propTypes = {
        confirmSignUp: PropTypes.func.isRequired,
        form: PropTypes.object.isRequired,
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
                    backgroundColor={'#708090'}
                    text='TERMINA REGISTRAZIONE >'
                    type='submit'
                />
            </Form>
        );
    }

    render () {
        return (
            <Modal show={!this.props.signupConfirmed}>
                <Modal.Header>
                    <Modal.Title>
                        {'VALIDA LA REGISTRAZIONE'}
                        <p>
                            {'Inserisci qui il codice che abbiamo inviato alla tua casella email'}
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.renderSignUpConfirmationForm()}
                </Modal.Body>
                <Modal.Footer>
                    <p>
                        {'INVIA UN NUOVO CODICE'}
                    </p>
                </Modal.Footer>
            </Modal>
        );
    }
}