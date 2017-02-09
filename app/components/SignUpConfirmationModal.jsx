import React, {Component, PropTypes} from 'react';
import {FormControl, Modal} from 'react-bootstrap';

import Button from 'components/CustomButton';

export default class SignUpConfirmationModal extends Component {
    static propTypes = {
        confirmSignUp: PropTypes.func.isRequired,
        errorMessage: PropTypes.string,
        signUpConfirmed: PropTypes.bool.isRequired,
        username: PropTypes.string
    };
    
    constructor (props) {
        super(props);
        this.state = {
            confirmationCode: ''
        };
    }

    handleConfirmationCodeChange (e) {
        this.setState({confirmationCode: e.target.value});
    }

    confirmRegistration (e) {
        e.preventDefault();
        const {confirmSignUp, username} = this.props;
        confirmSignUp(username, this.state.confirmationCode.trim());
    }

    renderSignUpConfirmationForm () {
        return (
            <form onSubmit={this.confirmRegistration.bind(this)}>
                <FormControl
                    type='text'
                    value={this.state.confirmationCode}
                    placeholder='Codice di conferma'
                    onChange={this.handleConfirmationCodeChange.bind(this)}
                />
                {this.props.errorMessage}
                <Button
                    backgroundColor={'#708090'}
                    text='TERMINA REGISTRAZIONE >'
                    type='submit'
                />
            </form>
        );
    }

    render () {
        return (
            <Modal show={!this.props.signUpConfirmed}>
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