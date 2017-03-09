import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

import SignUpForm from 'components/SignUpForm';

export default class SignUpModal extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        businessUserPool: PropTypes.object,
        form: PropTypes.object.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool,
        signUpState: PropTypes.object.isRequired,
        signUpUser: PropTypes.func.isRequired
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
                            businessUserPool={this.props.businessUserPool}
                            form={this.props.form}
                            signUpUser={this.props.signUpUser}
                            signUpState={this.props.signUpState}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
