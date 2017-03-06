import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

import SignUpForm from 'components/SignUpForm';

export default class SignUpModal extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        form: PropTypes.object.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool,
        signUpUser: PropTypes.func.isRequired,
        signupState: PropTypes.object.isRequired
    };

    closeModal () {
        this.props.onClose();
    }

    render () {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title style={{textAlign: 'center'}}>
                            <b style={{fontSize: 25}}>{'REGISTRATI'}</b>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SignUpForm
                            backgroundColor={this.props.backgroundColor}
                            form={this.props.form}
                            signUpUser={this.props.signUpUser}
                            signupState={this.props.signupState}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}