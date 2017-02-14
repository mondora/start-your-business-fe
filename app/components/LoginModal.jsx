import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Field, Form} from 'react-redux-form';
// import validator from 'validator';
import {Link} from 'react-router';

import Button from 'components/CustomButton';

// const required = validator.isNull;
// const isEmail = validator.isEmail;

export default class LoginModal extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
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
        //TODO find out why validators on Form generate infinite setFieldsValidity actions
        // validators={{
        //     email: {required, isEmail},
        //     password: {required}
        // }}
        return (
            <Form
                model={'user.login'}
                onSubmit={this.login.bind(this)}
            >
                <Field model='user.login.email'>
                    <input type='email' placeholder='Email' />
                </Field>
    
                <Field model='user.login.password'>
                    <input type='password' placeholder='Password' />
                </Field>
    
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