import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Field, Form} from 'react-redux-form';

import Button from 'components/CustomButton';

export default class SignUpConfirmationModal extends Component {
    static propTypes = {
        confirmSignUp: PropTypes.func.isRequired,
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
                <Field model='user.signup.confirmation.code'>
                    <input type='text' placeholder='Codice di conferma' />
                </Field>
                
                {this.props.signupConfirmation.errorMessage}
                
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