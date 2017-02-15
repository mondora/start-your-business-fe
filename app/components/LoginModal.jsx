import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-redux-form';
import {Link} from 'react-router';

import Button from 'components/CustomButton';
import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

export default class LoginModal extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        loginForm: PropTypes.object.isRequired,
        loginState: PropTypes.object.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    login ({email, password}) {
        this.props.login(email, password);
    }

    closeModal () {
        this.props.onClose();
    }

    renderLoginForm () {
        return (
            <Form
                model={'user.login'}
                onSubmit={this.login.bind(this)}
            >
                <FormInput
                    field={this.props.loginForm.email}
                    inputType='email'
                    model='user.login.email'
                    placeholder='Email'
                    validator={requiredEmailValidator}
                />

                <FormInput
                    field={this.props.loginForm.password}
                    inputType='password'
                    model='user.login.password'
                    placeholder='Password'
                    validator={genericRequiredValidator}
                />
    
                {this.props.loginState.errorMessage}
    
                <Button
                    backgroundColor={'#708090'}
                    text={'LOGIN >'}
                    type='submit'
                />
            </Form>
        );
    }

    render () {
        return (
            <Modal show={this.props.show} onHide={this.closeModal.bind(this)}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>
                        {'LOGIN'}
                        <p>
                            {'accedi al tuo account'}
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.renderLoginForm()}
                </Modal.Body>
                <Modal.Footer>
                    {'INIZIA ORA!'}
                    <p>
                        {'Non hai un account?'}
                        <Link to='signup' onClick={this.closeModal.bind(this)}>{'Registrati ora'}</Link>
                    </p>
                </Modal.Footer>
            </Modal>
        );
    }
}